import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import CardPoke from "../components/pokedex/CardPoke";
import InputSearch from "../components/pokedex/InputSearch";
import SelectByType from "../components/pokedex/SelectByType";
import "./styles/Pokedex.css";
import Header from "./Header";
import Pagination from "../components/pokedex/Pagination";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState();
  const [typeSelected, setTypeSelected] = useState("All Pokemons");
  useEffect(() => {
    if (typeSelected !== "All Pokemons") {
      
      axios
        .get(typeSelected)
        .then((res) => {
          const result = res.data.pokemon.map((e) => e.pokemon);
          setPokemons(result);
        })
        .catch((err) => console.log(err));
    } else {
      // Si quiero a todos los pokemon
      const URL = "https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0";
      axios
        .get(URL)
        .then((res) => setPokemons(res.data.results))
        .catch((err) => console.log(err));
    }
  }, [typeSelected]);
  const userName = useSelector((state) => state.userName);
  // Logica de paginacion
  const [page, setPage] = useState(5);
  const [pokePerPage, setPokePerPage] = useState(8);
  //   1 - 1      8 = 0
  //   2 - 1      8 = 8
  const initialPoke = (page - 1) * pokePerPage;
  const finalPoke = page * pokePerPage;
  return (
    <div>
      <header className="pokedex__header">
        <Header />
        <p className="pokedex-p">
          <span className="pokedex-span">Welcome {userName}</span>, here you can
          find your favorite pokemon
        </p>
      </header>
      <aside className="pokedex__input-container">
        <InputSearch className="pokedex__input" />
        <SelectByType setPage={setPage} setTypeSelected={setTypeSelected} />
      </aside>
      <main>
        <div className="card-container">
          {pokemons?.slice(initialPoke, finalPoke).map((pokemon) => (
            <CardPoke key={pokemon.url} url={pokemon.url} />
          ))}
        </div>
      </main>
      <Pagination setPage={setPage} page={page} pagesLength={ pokemons && Math.ceil(pokemons.length / pokePerPage)} />
    </div>
  );
};
export default Pokedex;