import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import pokedex from '../assets/pokedex.svg'
import pokemon_logo from '../assets/pokemon_logo.svg';
import rectagle147 from '../assets/rectagle-147.svg'
import rectagle148 from '../assets/rectagle-148.svg'

const PokemonId = () => {

    const { id } = useParams();

    const [pokemon, setPokemon] = useState({});
    const [moves, setMoves] = useState([]);
    const [stats, setStats] = useState([]);
    const [type, setType] = useState([])
    const [types, setTypes] = useState([])

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setPokemon(res.data))
            .catch(() => alert("Ese pokemon no existe"))

        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setMoves(res.data.moves))
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setStats(res.data.stats))
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setType(res.data.types[0].type))
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setTypes(res.data.types[1].type))

    }, []);
      
    // console.log(pokemon);
    // console.log(moves)
    // console.log(stats)
    // console.log(type)
    // console.log(types)
    /***********************************************************************COLORS********************************************************************************+ */
    
    //Type 0
    
    let colorDot = '';

    if (type.name === 'grass') {
        colorDot = 'linear-gradient(178.92deg, #7EC6C5 0.92%, #ABDAC6 47.96%, #CAE099 99.08%)'
    } if (type.name === 'fire') {
        colorDot = 'linear-gradient(176.37deg, #F96D6F -32.26%, #E35825 22.55%, #E8AE1B 125.72%)'
    } if (type.name === 'water') {
        colorDot = 'linear-gradient(179.57deg, #133258 -70.14%, #1479FB 56.16%, #82B2F1 214.85%)'
    } if (type.name === 'bug') {
        colorDot = 'linear-gradient(0deg, rgba(37,240,67,1) 40%, rgba(60,208,22,1) 60%)'
    } if (type.name === 'normal') {
        colorDot = 'linear-gradient(181.51deg, #735259 -6.44%, #BC6B7C 121.95%, #7C3F4C 186.11%)'
    } if (type.name === 'electric') {
        colorDot = 'linear-gradient(180deg, rgba(219,255,0,1) 53%, rgba(0,0,0,1) 96%, rgba(255,255,255,1) 100%)'
    } if (type.name === 'fighting') {
        colorDot = 'linear-gradient(176.83deg, #96402A -8.78%, #F1613C 169.09%, #CB735D 242.33%)'
    } if (type.name === 'poison') {
        colorDot = 'linear-gradient(177.03deg, #5B3184 -11.97%, #A564E3 71.28%, #CE9BFF 135.64%)'
    } if (type.name === 'ground') {
        colorDot = 'linear-gradient(179.75deg, #654008 -19.96%, #895C1A 43.67%, #D69638 138.4%)'
    } if (type.name === 'rock') {
        colorDot = 'linear-gradient(177.03deg, #7E7E7E -11.97%, #8D8D94 57.49%, #D3D3D3 135.64%)'
    } if (type.name === 'ghost') {
        colorDot = 'linear-gradient(177.03deg, #323569 -11.97%, #454AA8 57.49%, #787DDA 135.64%)'
    } if (type.name === 'steel') {
        colorDot = 'linear-gradient(179.75deg, #5E736C -19.96%, #728881 43.67%, #A8A8A8 138.4%)'
    } if (type.name === 'psychic') {
        colorDot = 'linear-gradient(179.75deg, #E62D2D -19.96%, #D13E3E 43.67%, #F07F7F 138.4%)'
    } if (type.name === 'ice') {
        colorDot = 'linear-gradient(177.03deg, #6FBEDF -11.97%, #64CBF5 47.77%, #BDEBFE 136.72%)'
    } if (type.name === 'dark') {
        colorDot = 'linear-gradient(180deg, rgba(0,20,119,1) 0%, rgba(0,0,0,1) 100%)'
    } if (type.name === 'dragon') {
        colorDot = 'linear-gradient(179.75deg, #478A93 -19.96%, #56A4AE 43.67%, #A2BEC1 138.4%)'
    } if (type.name === 'fairy') {
        colorDot = 'linear-gradient(179.75deg, #971B45 -19.96%, #C23867 43.67%, #CD7D98 138.4%)'
    }

    //Type 1

    let colorType1 = '';

    if (types.name === 'grass') {
        colorType1 = 'linear-gradient(178.92deg, #7EC6C5 0.92%, #ABDAC6 47.96%, #CAE099 99.08%)'
    } if (types.name === 'fire') {
        colorType1 = 'linear-gradient(176.37deg, #F96D6F -32.26%, #E35825 22.55%, #E8AE1B 125.72%)'
    } if (types.name === 'water') {
        colorType1 = 'linear-gradient(179.57deg, #133258 -70.14%, #1479FB 56.16%, #82B2F1 214.85%)'
    } if (types.name === 'bug') {
        colorType1 = 'linear-gradient(0deg, rgba(37,240,67,1) 40%, rgba(60,208,22,1) 60%)'
    } if (types.name === 'normal') {
        colorType1 = 'linear-gradient(181.51deg, #735259 -6.44%, #BC6B7C 121.95%, #7C3F4C 186.11%)'
    } if (types.name === 'electric') {
        colorType1 = 'linear-gradient(180deg, rgba(219,255,0,1) 53%, rgba(0,0,0,1) 96%, rgba(255,255,255,1) 100%)'
    } if (types.name === 'fighting') {
        colorType1 = 'linear-gradient(176.83deg, #96402A -8.78%, #F1613C 169.09%, #CB735D 242.33%)'
    } if (types.name === 'poison') {
        colorType1 = 'linear-gradient(177.03deg, #5B3184 -11.97%, #A564E3 71.28%, #CE9BFF 135.64%)'
    } if (types.name === 'ground') {
        colorType1 = 'linear-gradient(179.75deg, #654008 -19.96%, #895C1A 43.67%, #D69638 138.4%)'
    } if (types.name === 'rock') {
        colorType1 = 'linear-gradient(177.03deg, #7E7E7E -11.97%, #8D8D94 57.49%, #D3D3D3 135.64%)'
    } if (types.name === 'ghost') {
        colorType1 = 'linear-gradient(177.03deg, #323569 -11.97%, #454AA8 57.49%, #787DDA 135.64%)'
    } if (types.name === 'steel') {
        colorType1 = 'linear-gradient(179.75deg, #5E736C -19.96%, #728881 43.67%, #A8A8A8 138.4%)'
    } if (types.name === 'psychic') {
        colorType1 = 'linear-gradient(179.75deg, #E62D2D -19.96%, #D13E3E 43.67%, #F07F7F 138.4%)'
    } if (types.name === 'ice') {
        colorType1 = 'linear-gradient(177.03deg, #6FBEDF -11.97%, #64CBF5 47.77%, #BDEBFE 136.72%)'
    } if (types.name === 'dark') {
        colorType1 = 'linear-gradient(180deg, rgba(0,20,119,1) 0%, rgba(0,0,0,1) 100%)'
    } if (types.name === 'dragon') {
        colorType1 = 'linear-gradient(179.75deg, #478A93 -19.96%, #56A4AE 43.67%, #A2BEC1 138.4%)'
    } if (types.name === 'fairy') {
        colorType1 = 'linear-gradient(179.75deg, #971B45 -19.96%, #C23867 43.67%, #CD7D98 138.4%)'
    }

    /***********************************************************************COLORS********************************************************************************+ */
    return (
        <div className='container-pokemonid' style={{ height: "100%", }}>
            <img src={pokedex} className="pokedex-id" alt="" />
            <img src={rectagle147} className="line-red-id" alt="" />
            <img src={rectagle148} className="line-black-id" alt="" />
            <div className='pokemon-logo-container'>
                <img className='pokemon-logo-img' src={pokemon_logo} alt="" />
            </div>

            <div className='container-first'>



                <div className='pokemonid-img-container' style={{ background: colorDot }}>


                    <img className='pokemonid-img'
                        src={pokemon.sprites?.other.dream_world.front_default} alt=""
                    />
                </div>

                <div className='pokemonid-name'>
                    <h3 style={{ display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "system-ui", fontSize: "x-large" }}>
                        <p className='id'>
                            #{id}
                        </p>
                    </h3>

                    <h1 style={{ fontFamily: "system-ui", fontZise: "xx-large" }}>
                        {pokemon?.name}
                    </h1>

                    <div className='pokemonid-form'>
                        <p style={{ fontFamily: "system-ui", fontZise: "medium", fontWeight: "500" }}>
                            Weight  <b style={{ fontWeight: "lighter" }}>
                                {pokemon.height}
                            </b>
                        </p>
                        <p style={{ fontFamily: "system-ui", fontZise: "medium", fontWeight: "500" }}>
                            Heigth <b style={{ fontWeight: "lighter" }}>
                                {pokemon.weight}
                            </b>
                        </p>
                    </div>
                </div>

                <div className='pokemonid-container-skills' >

                    <div>
                        <h4>
                            Type
                        </h4>

                        <div className='skill-type'>
                            <p style={{ background: colorDot, color: "whitesmoke" }}>
                                {pokemon.types?.[0].type.name}
                            </p>
                            <p style={{ background: colorType1, color: "whitesmoke" }} >
                                {pokemon.types?.[1]?.type.name}
                            </p>
                        </div>

                    </div>

                    <div>
                        <h4>
                            Abilities
                        </h4>

                        <div className='skill-type'>
                            <p>
                                {pokemon.abilities?.[0]?.ability.name}
                            </p>
                            <p>
                                {pokemon.abilities?.[1]?.ability.name}
                            </p>
                        </div>

                    </div>





                </div>

                <div className='container-stats'>
                    <h1>
                        Stats
                    </h1>

                    <div className='container'>

                        <div className='skills'>
                            <span className='Name'>HP</span>
                            <div className='percent'>
                                <div className='progress' style={{ width: `${stats[0]?.base_stat}%` }}></div>
                            </div>
                            <span className='Value'>{stats[0]?.base_stat}</span>

                        </div>

                    </div>

                    <div className='container'>

                        <div className='skills'>
                            <span className='Name'>Attack</span>
                            <div className='percent'>
                                <div className='progress' style={{ width: `${stats[1]?.base_stat}%` }}></div>
                            </div>
                            <span className='Value'>{stats[1]?.base_stat}</span>

                        </div>

                    </div>

                    <div className='container'>

                        <div className='skills'>
                            <span className='Name'>Defense</span>
                            <div className='percent'>
                                <div className='progress' style={{ width: `${stats[2]?.base_stat}%` }}></div>
                            </div>
                            <span className='Value'>{stats[2]?.base_stat}</span>

                        </div>

                    </div>

                    <div className='container'>

                        <div className='skills'>
                            <span className='Name'>Speed</span>
                            <div className='percent'>
                                <div className='progress' style={{ width: ` ${stats[5]?.base_stat}%` }}></div>
                            </div>
                            <span className='Value'>{stats[5]?.base_stat}</span>

                        </div>

                    </div>

                </div>
            </div>





            <div className='pokemon-moves'>
                <h2>
                    Movements
                </h2>
                <div className='pokemon-moves-container'>

                    {
                        moves.map(move => (
                            <p key={move.move.url}>

                                {move.move.name}
                            </p>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default PokemonId;