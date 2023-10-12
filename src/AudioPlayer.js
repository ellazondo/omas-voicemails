import React, { useState, useRef, useEffect } from "react";
import omagpaGif from "./omagpa.gif";

function AudioPlayer() {
  const AUDIO_FILE_DEFAULT = "./26.7.19.mp3";
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(AUDIO_FILE_DEFAULT);
  const audioRef = useRef(null);

  //create a list of audiofiles
  const audio_file1 = "./01.10.21.mp3";

  const handlePlay = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  const handleNext = () => {
    setCurrentTrack(audio_file1);
    audioRef.current.load();
    audioRef.current.addEventListener(
      "canplay",
      () => {
        audioRef.current.play();
        setIsPlaying(true);
      },
      { once: true }
    );
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e) => {
    audioRef.current.currentTime = e.target.value;
    setCurrentTime(e.target.value);
  };

  function formatDuration(durationSeconds) {
    const minutes = Math.floor(durationSeconds / 60);
    const seconds = Math.floor(durationSeconds % 60);
    const formattedSeconds = seconds.toString().padStart(2, "0");
    return `${minutes}:${formattedSeconds}`;
  }

  useEffect(() => {
    audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  useEffect(() => {
    audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
    audioRef.current.addEventListener("loadedmetadata", () => {
      setDuration(audioRef.current.duration);
    });
    return () => {
      audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
      audioRef.current.removeEventListener("loadedmetadata", () => {
        setDuration(audioRef.current.duration);
      });
    };
  }, []);

  return (
    <>
      <div className="player-card">
        <img src={omagpaGif} />

        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleSeek}
        />
        <audio ref={audioRef} src={currentTrack} />
        <div className="track-duration">
          <p>{formatDuration(currentTime)}</p>
          <p>{formatDuration(duration)}</p>
        </div>
        <div className="flex flex2">
          <button className="flex-items">
            <span className="back-forth">⏮</span>
          </button>

          <button className="flex-items">
            <span onClick={handlePlayPause} className="play-pause">
              {isPlaying ? "⏸" : "▶"}
            </span>
          </button>

          <button className="flex-items">
            <span onClick={handleNext} className="back-forth">
              ⏭
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default AudioPlayer;

//https://images.unsplash.com/photo-1604782666037-3c63d50052db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1827&q=80
//https://i.imgur.com/wXX15cy.mp4
//https://im5.ezgif.com/tmp/ezgif-5-3fae5324c8.png
