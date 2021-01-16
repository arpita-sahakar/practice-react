import React from "react";

function MovieDetail(props) {
  if (props.title) {
    return (
      <div className="text-center">
        <img
          alt={props.title}
          className="img-fluid"
          src={props.src}
          style={{ margin: "0 auto" }}
        />
        <h3>Director(s): {props.director}</h3>
        <h3>Genre: {props.genre}</h3>
        <h3>Released: {props.released}</h3>
      </div>
    );
  } else {
    return <h1>Movie not found</h1>;
  }
}

export default MovieDetail;
