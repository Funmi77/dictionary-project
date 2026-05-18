import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (!props.synonyms || props.synonyms.length === 0) {
    return null;
  }

  return (
    <div className="Synonyms">
      <strong>Synonyms: </strong>

      {props.synonyms.map(function (synonym, index) {
        return (
          <span key={index} className="Synonym-item">
            {synonym}
          </span>
        );
      })}
    </div>
  );
}
