import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Results(props) {
  if (!props.results) {
    return null;
  }

  return (
    <div className="Results">
      <h2>{props.results.word}</h2>
      {props.results.phonetics?.map(function (phonetic, index) {
        return <Phonetics phonetic={phonetic} key={index} />;
      })}

      {props.results.meanings?.map((meaning, index) => (
        <div key={index}>
          <Meaning meaning={meaning} />
        </div>
      ))}
    </div>
  );
}
