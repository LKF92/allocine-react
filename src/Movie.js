import React from "react";
import MovieInfo from "./MovieInfo";
import MovieSynopsis from "./MovieSynopsis";

const Movie = () => {
  return (
    <section className="movie-page">
      <MovieInfo
        releaseDate="27 septembre 1968"
        duration="2h21min"
        director="Stanley Kubrick"
        actors={["Keir Dullea", "Gary Lockwood", "William Sylvester"]}
        genre="Science fiction"
        nationality="Américain, Britannique"
      />
      <MovieSynopsis />
    </section>
  );
};

export default Movie;
