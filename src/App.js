import React from "react";

import AudioPlayer from "./AudioPlayer";
// import ListOfVoicemails from "./ListOfVoicemails";

const AUDIO_FILE = "./26.7.19.mp3";

function App() {
  return (
    <>
      {/* <header class="VoicemailHeader">Oma's voicemails</header> */}
      <div className="container">
        <div className="voicemail-container">{/* <ListOfVoicemails /> */}</div>
        <div className="audio-container">
          <AudioPlayer audioSrc={AUDIO_FILE} />
        </div>
      </div>
    </>
  );
}

export default App;
