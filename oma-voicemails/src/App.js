import "./App.css";
import { useEffect, useState } from "react";
import AudioPlayer from "./AudioPlayer";

function App() {
  const [embedCode, setEmbedCode] = useState(null);

  const soundcloudUrls = [
    "https://on.soundcloud.com/xxKE4",
    "https://on.soundcloud.com/KBWqn",
    "https://on.soundcloud.com/jHjZL",
    "https://on.soundcloud.com/fRFvQ",
    "https://on.soundcloud.com/CByty",
    "https://on.soundcloud.com/ot8ot",
    "https://on.soundcloud.com/oFJMd",
    "https://on.soundcloud.com/QArWy",
    "https://on.soundcloud.com/4Mujd",
    "https://on.soundcloud.com/nWAM7",
    "https://on.soundcloud.com/NWbgh",
    "https://on.soundcloud.com/eZmXH",
    "https://on.soundcloud.com/LiNh4",
    "https://on.soundcloud.com/264dX",
  ];
  useEffect(() => {
    const soundcloudUrl = "https://on.soundcloud.com/xxKE4";
    fetch(`https://soundcloud.com/oembed?url=${soundcloudUrl}&format=json`)
      .then((res) => res.json())
      .then((data) => {
        setEmbedCode(data.html);
      })
      .catch((error) => {
        console.error("Error fetching SoundCloud embed code:", error);
      });
  }, []);
  return (
    <div className="App">
      <header class="VoicemailHeader">Oma's voicemails</header>
      <div className="CenteredContainer">
        <div className="AudioPlayersContainer">
          {soundcloudUrls.map((url, index) => (
            <AudioPlayer
              key={index}
              soundcloudUrl={url}
              embedCode={embedCode}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
