import React from "react";
import MovieInfo from "./MovieInfo";
import MovieSynopsis from "./MovieSynopsis";

const Movie = (props) => {
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
      <MovieSynopsis synopsis="A l'aube de l'Humanité, dans le désert africain, une tribu de primates subit les assauts répétés d'une bande rivale, qui lui dispute un point d'eau. La découverte d'un monolithe noir inspire au chef des singes assiégés un geste inédit et décisif. Brandissant un os, il passe à l'attaque et massacre ses adversaires. Le premier instrument est né.
En 2001, quatre millions d'années plus tard, un vaisseau spatial évolue en orbite lunaire au rythme langoureux du 'Beau Danube Bleu'. A son bord, le Dr. Heywood Floyd enquête secrètement sur la découverte d'un monolithe noir qui émet d'étranges signaux vers Jupiter.
Dix-huit mois plus tard, les astronautes David Bowman et Frank Poole font route vers Jupiter à bord du Discovery. Les deux hommes vaquent sereinement à leurs tâches quotidiennes sous le contrôle de HAL 9000, un ordinateur exceptionnel doué d'intelligence et de parole. Cependant, HAL, sans doute plus humain que ses maîtres, commence à donner des signes d'inquiétude : à quoi rime cette mission et que risque-t-on de découvrir sur Jupiter ?"/>
    </section>
  );
};

export default Movie;
