import "./App.css";
import { useState, useEffect } from "react";

function AudioPlayer({ embedCode }) {
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
