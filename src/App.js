import React from "react";

import AudioPlayer from "./AudioPlayer";

const AUDIO_FILE = "./26.7.19.mp3";

function App() {
  return (
    <>
      <div className="container">
        <AudioPlayer audioSrc={AUDIO_FILE} />
      </div>
    </>
  );
}

export default App;
