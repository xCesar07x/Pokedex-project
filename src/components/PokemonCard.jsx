import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PokemonCard = ({url}) => {

    const [pokemon , setPokemon] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(url)
        .then(res => setPokemon(res.data));

    },[]);

    console.log(pokemon)

    return (
        <li className="pokemon-container">
            <div className="pokemon-container" onClick={() => navigate(`/pokemon/${pokemon.id}`)}>

              <div className="container-img">
                
              

              <img className="pokemon-img" src={pokemon.sprites?.other.dream_world.front_default} alt="" /> <br />
               


              </div>

              <h1 className="pokemon-name">
                {pokemon.name}
              </h1> 

              <p style={{color: "gray",fontFamily: "system-ui"}}>
                type
              </p>

              <b style={{fontFamily: "system-ui", fontWeight: "600"}}>
                {pokemon.types?.[0].type.name} / {pokemon.types?.[1]?.type.name}
              </b>
              

              <div className="pokemon-stats">

                <h2 style={{fontFamily: "system-ui", fontWeight: "600"}}>
                    <p style={{color: "gray",fontFamily: "system-ui"}}>
                        {pokemon.stats?.[0].stat.name}
                    </p>
                    {pokemon.stats?.[0].base_stat}
                </h2>

                <h2 style={{fontFamily: "system-ui", fontWeight: "600"}}>
                    <p style={{color: "gray",fontFamily: "system-ui"}}>
                        {pokemon.stats?.[1].stat.name}
                    </p>
                    {pokemon.stats?.[1].base_stat}
                </h2>

                <h2 style={{fontFamily: "system-ui", fontWeight: "600"}}>
                    <p style={{color: "gray",fontFamily: "system-ui"}}>
                        {pokemon.stats?.[2].stat.name}
                    </p>
                    {pokemon.stats?.[2].base_stat}
                </h2>

                <h2 style={{fontFamily: "system-ui", fontWeight: "600"}}>
                    <p style={{color: "gray",fontFamily: "system-ui"}}>
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