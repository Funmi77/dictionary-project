import React from "react";

export default function Phonetics(props) {
  if (!props.phonetic) {
    return null;
  }

  return (
    <div className="Phonetics">
      <span>{props.phonetic.text}</span>

      {props.phonetic.audio && (
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          Listen
        </a>
      )}
    </div>
  );
}
