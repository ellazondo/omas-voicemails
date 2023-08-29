import React from "react";

import AudioPlayer2 from "./AudioPlayer2";

const AUDIO_FILE = "./26.7.19.mp3";

function App() {
  return (
    <>
      <header class="VoicemailHeader">Oma's voicemails</header>
      <div className="container">
        <AudioPlayer2 audioSrc={AUDIO_FILE} />
      </div>
    </>
  );
}

export default App;
