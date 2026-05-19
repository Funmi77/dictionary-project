import React from "react";
import "./Photos.css";

export default function Photos(props) {
  console.log(props.photos);

  if (!props.photos) {
    return null;
  }

  return (
    <div className="Photos">
      <div className="row">
        {props.photos.map(function (photo, index) {
          return (
            <div className="col-4" key={index}>
              <a href={photo.src.original} target="_blank" rel="noreferrer">
                <img
                  src={photo.src.landscape}
                  alt={photo.photographer}
                  className="img-fluid rounded shadow-sm mb-3"
                />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
