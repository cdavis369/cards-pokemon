import React, { useState } from "react";
import {usePokemonList} from "./Hooks.js";
import choice from "./helpers";

/* Select element to choose from common pokemon. */
function PokemonSelect({ add }) {
  const pokemon = usePokemonList();
  const [pokeIdx, setPokeIdx] = useState(0);
  const handleChange = evt => {
    setPokeIdx(evt.target.value);
  };

  return (
    <div>
      <select onChange={handleChange}>
        {pokemon.map((p, idx) => (
          <option key={idx} value={idx}>
            {p}
          </option>
        ))}
      </select>
      <button onClick={() => add(pokemon[pokeIdx])}>Catch one!</button>
      <button onClick={() => add(choice(pokemon))}>I'm feeling lucky</button>
    </div>
  );
}

export default PokemonSelect;
