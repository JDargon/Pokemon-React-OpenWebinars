import { useState } from 'react';
import './App.css'
import PokemonList from './components/PokemonList'
import PokemonDetails from './components/PokemonDetails';

function App() {

  const [selectedPokemon, setSelectedpokemon] = useState();


  return (
    <>
      {selectedPokemon && (
        <div>
          <h2>Pokemon Seleccionado</h2>
          <PokemonDetails pokemon={selectedPokemon}/>
        </div>
      )}

      <h2>Lista de Pokemons</h2>
      <PokemonList selectPokemon={setSelectedpokemon}/>
    </>
  )
}

export default App
