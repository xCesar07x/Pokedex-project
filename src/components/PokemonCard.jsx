import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PokemonCard = ({ url }) => {

    const [pokemon, setPokemon] = useState({});
    const [type, setType] = useState({});
    
 
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(url)
            .then(res => setPokemon(res.data));
        axios.get(url)
            .then(res => setType(res.data.types[0].type));

    }, []);

    //    console.log(type)
    // console.log(pokemon)
    
/***********************************************************************COLORS********************************************************************************+ */
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
    }  if (type.name === 'fighting') {
        colorDot = 'linear-gradient(176.83deg, #96402A -8.78%, #F1613C 169.09%, #CB735D 242.33%)'
    }  if (type.name === 'poison') {
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
/***********************************************************************COLORS********************************************************************************+ */
    return (
        <li >
            <div className="pokemon-container" onClick={() => navigate(`/pokemon/${pokemon.id}`)}>

                <div className="container-img" style={{ background: colorDot }}>



                    <img className="pokemon-img" src={pokemon.sprites?.other.dream_world.front_default} alt="" /> <br />



                </div>

                <h1 className="pokemon-name">
                    {pokemon.name}
                </h1>

                <p style={{ color: "gray", fontFamily: "system-ui" }}>
                    type
                </p>

                <b style={{ fontFamily: "system-ui", fontWeight: "600" }}>
                    {pokemon.types?.[0].type.name}  {pokemon.types?.[1]?.type.name}
                </b>


                <div className="pokemon-stats">

                    <h2 style={{ fontFamily: "system-ui", fontWeight: "600" }}>
                        <p style={{ color: "gray", fontFamily: "system-ui" }}>
                            {pokemon.stats?.[0].stat.name}
                        </p>
                        {pokemon.stats?.[0].base_stat}
                    </h2>

                    <h2 style={{ fontFamily: "system-ui", fontWeight: "600" }}>
                        <p style={{ color: "gray", fontFamily: "system-ui" }}>
                            {pokemon.stats?.[1].stat.name}
                        </p>
                        {pokemon.stats?.[1].base_stat}
                    </h2>

                    <h2 style={{ fontFamily: "system-ui", fontWeight: "600" }}>
                        <p style={{ color: "gray", fontFamily: "system-ui" }}>
                            {pokemon.stats?.[2].stat.name}
                        </p>
                        {pokemon.stats?.[2].base_stat}
                    </h2>

                    <h2 style={{ fontFamily: "system-ui", fontWeight: "600" }}>
                        <p style={{ color: "gray", fontFamily: "system-ui" }}>
                            {pokemon.stats?.[5].stat.name}
                        </p>
                        {pokemon.stats?.[5].base_stat}
                    </h2>

                </div>

            </div>

            
        </li>
        
    )
}

export default PokemonCard;