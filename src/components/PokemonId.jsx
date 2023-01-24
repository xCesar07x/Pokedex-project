import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PokemonId = () => {

    const{ id } = useParams();

    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => setPokemon(res.data))
        .catch(() => alert("Ese pokemon no existe"))
        
    },[]);

    // console.log(pokemon);

    return (
        <div className='container-pokemonid'>
            <h1>Pokemon ID</h1>
            <h3>Este es el Pokemon con id: {id}</h3>
            <p>{pokemon?.name}</p>
            <img className='pokemonid-img'
            src={pokemon.sprites?.other.dream_world.front_default} alt="" 
            />
        </div>
    );
};

export default PokemonId;