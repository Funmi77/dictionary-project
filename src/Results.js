import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Results(props) {
  if (!props.results) {
    return null;
  }

  return (
    <div className="Results">
      <section>
        <h2>{props.results.word}</h2>

        {props.results.phonetics?.map((phonetic, index) => (
          <Phonetics key={index} phonetic={phonetic} />
        ))}

        {props.results.meanings?.map((meaning, index) => (
          <div key={index}>
            <Meaning meaning={meaning} />
          </div>
        ))}
      </section>
    </div>
  );
}
