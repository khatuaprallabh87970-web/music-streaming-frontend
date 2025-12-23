import { useEffect, useState } from "react";
import { supabase } from "../supabase";

export default function Home() {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTracks();
  }, []);

  const fetchTracks = async () => {
    const { data, error } = await supabase
      .from("tracks")
      .select("*");

    if (error) {
      console.error("Error fetching tracks:", error.message);
    } else {
      setTracks(data);
    }
    setLoading(false);
  };

  if (loading) {
    return <h2 style={{ color: "white" }}>Loading songs...</h2>;
  }

  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h1>🎵 Music Library</h1>

      {tracks.length === 0 && <p>No songs found</p>}

      {tracks.map((track) => (
        <div
          key={track.id}
          style={{
            marginBottom: "20px",
            padding: "10px",
            border: "1px solid gray",
            borderRadius: "8px",
          }}
        >
          <h3>{track.title}</h3>
          <p>{track.artist}</p>

          <audio controls style={{ width: "100%" }}>
            <source src={track.audio_url} type="audio/mpeg" />
            Your browser does not support audio.
          </audio>
        </div>
      ))}
    </div>
  );
}
