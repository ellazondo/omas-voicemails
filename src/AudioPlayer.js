import "./App.css";
import { useState, useEffect } from "react";

function AudioPlayer() {
  const [embedCode, setEmbedCode] = useState(null);

  const soundcloudUrl = "https://on.soundcloud.com/6dM9Q";

  useEffect(() => {
    fetch(`https://soundcloud.com/oembed?url=${soundcloudUrl}&format=json`)
      .then((res) => res.json())
      .then((data) => {
        setEmbedCode(data.html);
      })
      .catch((error) => {
        console.error("Error fetching SoundCloud embed code:", error);
      });
  }, [soundcloudUrl]);

  return (
    <div class="Audioplayer">
      {embedCode ? (
        <div dangerouslySetInnerHTML={{ __html: embedCode }} />
      ) : (
        <p>Loading audio...</p>
      )}
    </div>
  );
}

export default AudioPlayer;
