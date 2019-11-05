import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Movie from "./Movie";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero movieTitle="2001: A Space Odysee" />
      <Movie/>
    </div>
  );
}

export default App;
