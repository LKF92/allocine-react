import React from "react";
import MovieIMG from "./img/2001-space-odysee.jpg";

const MovieInfo = props => {
  return (
    <div className="movie-info">
      <img src={MovieIMG}></img>
      <div className="movie-details">
        <p>
          Date de sortie <a href="">{props.releaseDate}</a> ({props.duration})
        </p>
        <p>
          De <a href="">{props.director}</a>
        </p>
        <p>
          Avec
          {props.actors.map(acteur => (
            <a href="">{acteur},</a>
          ))}
        </p>
        <p>
          Genre <a href="">{props.genre}</a>
        </p>
        <p>
          Nationalités <a href="">{props.nationality}</a>
        </p>
      </div>
    </div>
  );
};

export default MovieInfo;
