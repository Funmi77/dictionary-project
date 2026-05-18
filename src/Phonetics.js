import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  if (!props.phonetic) {
    return null;
  }

  function playAudio() {
    if (props.phonetic.audio) {
      let audio = new Audio(props.phonetic.audio);
      audio.play();
    }
  }

  return (
    <div className="Phonetics">
      <span className="text">{props.phonetic.text}</span>

      {props.phonetic.audio ? (
        <button onClick={playAudio} className="speaker">
          🔊 Listen
        </button>
      ) : (
        <span className="no-audio">No audio available</span>
      )}
    </div>
  );
}
