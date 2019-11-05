import React from "react";

const Hero = props => {
  return (
    <div className="hero">
      <p className="movie-title">{props.movieTitle}</p>
    </div>
  );
};

export default Hero;
