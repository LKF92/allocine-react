import React from "react";
import { tsPropertySignature } from "@babel/types";

const MovieSynopsis = (props) => {
  return (
    <div className="synopsis">
      <h2> SYNOPSIS ET DÉTAILS</h2>
      <p>{props.synopsis}</p>
    </div>
  );
};

export default MovieSynopsis;
