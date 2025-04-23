import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Api from '../../api/Api.jsx';
import { generationRanges } from '../../utils/generationRange.js';
import { generateRandomNumbers } from '../../utils/randomNumbers.js';
import "./PokeCard.css"
import { getRandomColor } from '../../utils/randomColor.js';

const PokeCard = () => {
    const [pokemon, setPokemon] = useState([]);
    const [number, setNumber] = useState([])
    const {id}= useParams();
    const { start, end } = generationRanges[id];

    const uniquePokemon = [];
    const pokeIds = [];
    pokemon.forEach((poke) => {
    if (!pokeIds.includes(poke.id)) {
        pokeIds.push(poke.id);
        uniquePokemon.push(poke);
    }
    });

    useEffect(() => {
        setPokemon([]);
        if (id === '10') {
          const randomArray = generateRandomNumbers(start, end);
          setNumber(randomArray);
        } else {
          const fullArray = Array.from({ length: end - start + 1 }, (_, index) => start + index);
          setNumber(fullArray);
        }
      }, [id, start, end]);
      
    return (
        < >
            { number.map((idPokemon, index) => (
            <Api
                key={start + index}
                endPoint={`pokemon/${idPokemon}`}
                takeResults={(data) => setPokemon(prev => [...prev, data])}
            />
            ))}
            {uniquePokemon.map((poke)=>(              
                <div 
                className='pokeCard' 
                key={poke.id} 
                style={ {backgroundColor: getRandomColor()}} 
                >
                    <div className='divFront'>
                        <img src= {poke.sprites?.front_default} key={poke.id} loading='lazy'/>
                    </div>
                    <div className='divBack'>
                        <h3>{poke.name.toUpperCase()} </h3>
                        <div className='divType'>
                            {poke.types.map((elem, index)=>(
                                <p key={index}>{elem.type.name}</p>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
    </>
    )
}

export default PokeCard