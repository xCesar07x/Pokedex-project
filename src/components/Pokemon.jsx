import axios, { all } from 'axios';
import React, { useEffect, useState } from 'react';
import { set } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';
import pokedex from '../assets/pokedex.svg'
import rectagle147 from '../assets/rectagle-147.svg'
import rectagle148 from '../assets/rectagle-148.svg'
import pokeball from '../assets/pokeball.png'


const Pokemon = () => {

    const userName = useSelector(state => state.userName)

    const [pokemons, setPokemons ] = useState([]);
    const [ inputSearch, setInputSearch] = useState("");
    const [types, setTypes] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then(res => setPokemons(res.data.results))

        axios.get('https://pokeapi.co/api/v2/type/')
        .then(res => setTypes(res.data.results))

    },[]);

    

    const search = () => {
        navigate(`/pokemon/${inputSearch.toLocaleLowerCase()}`)
    }

    // console.log(pokemons);
    // console.log(types)

    const filterType = (e) => {
        // alert(e.target.value)
        axios.get(e.target.value)
         .then(res => setPokemons(res.data.pokemon))
    }

    // console.log(pokemons)

    return (
        <div>


            
            
            <img className='pokeball' src={pokeball} alt="" />
            
            <img className='pokedex-icon' src={pokedex} alt="" />

            <img className='nav-rectagle147' src={rectagle147} alt="" />
            

            
            

            
            
            <img className='nav-rectagle148' src={rectagle148} alt="" />
            

            
            

            

            <h1 className='pokemon-pharse'>
                <p style={{color: "#FE1936"}}>
                    Welcome {userName}, 
                </p> <b style={{color: "transparent"}}>Q</b>
                here you can find your favorite Pokemon
            </h1>

            <div className='input-select'>
              
               <div className='input-button-pokemon'>
                   <input className='pokemon-input'
                   type="text" 
                   placeholder='search pokemon or id'
                   value={ inputSearch }
                   onChange={e => setInputSearch(e.target.value)}
                   />
                   <button className='pokemon-search'
                   onClick={search}>Search</button>
               </div>

              <div style={{paddingTop: "10px"}}>
                    <select  
                    className='pokemon-select'
                    onChange={filterType} name="" id=""
                    >
                        <option disabled={false}>All pokemon</option>
                        {
                           types.map(type => (
                            
                            <option  
                            value={type.url} key={type.url}>
                                
                                {type.name}
                            </option>
                           ))
                        }
                    </select>

              </div>
            </div>

            <ul className='pokemon-list' >
                {
                    pokemons.map(pokemon => (
                        <PokemonCard 
                        url={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                        key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                        />
                    ))
                }
            </ul>
        </div>
    );
};

export default Pokemon;