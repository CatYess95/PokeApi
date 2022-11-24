import React from "react";
import FormHome from "../components/home/FormHome";
import './styles/Home.css';


const Home = () => {
  return (

    <div className="pokedex">
      <img src="/pokeapi.png" className="pokedex__img"/>
      <h2 className="pokedex__subtitle">Hello Trainer!</h2>
      <p className="pokedex__text">Give me your name to start</p>
      <FormHome />
    </div>
  );
};
export default Home;
