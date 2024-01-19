import { useState, useEffect } from "react";
import {v1 as uuid} from "uuid";
import axios from "axios";

function useFlip() {
  const [isFacingUp, setIsFacingUp] = useState(true);
  const flipCard = () => setIsFacingUp(isUp => !isUp);
  return [isFacingUp, flipCard];
}

function useAxios(url) {
  const [data, setData] = useState([]);

  async function fetchData(extension = "") {
    try {
      const response = await axios.get(`${url}${extension}`);
      setData((prevData) => [...prevData, { ...response.data, id: uuid() }]);
    } catch (error) {
      console.error('Error fetching data: ', error);
    } 
  };

  return [data, fetchData];
}


const usePokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);

  const fetchAndCopyPokemonNames = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1025');
      const pokemonData = response.data.results;
      const names = pokemonData.map(pokemon => pokemon.name).sort();
      setPokemonList(names);
    } catch (error) {
      console.error('Error fetching Pokemon data:', error);
    }
  };

  useEffect(() => {
    fetchAndCopyPokemonNames();
  }, []);

  return pokemonList;
};

export { useFlip, useAxios, usePokemonList};