import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeUserName } from '../store/slices/userName.slice';
import pokedex from '../assets/pokedex.svg'
import rectagle148 from '../assets/rectagle-148.svg'
import rectagle147 from '../assets/rectagle-147.svg'
import trainer from '../assets/pokemon-trainer.svg'

const InputName = () => {

    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState("");

    const navigate = useNavigate();

    const clickButton = () => {
        dispatch(changeUserName(inputValue))
        navigate("/pokemon")
    }

    return (
        <div className='container-inputname'>

            <div className='pokedex-container'>
            <img className='pokedex-img' src={pokedex} alt="" />
            <h1 className='trainer-pharse'>Hi Trainer!</h1>
            <p className='started-phsrse'>To get started, give me your name...</p>

            <img className='trainer' src={trainer} alt="" />
            
            <div className='input-button'> 
            <input className='input-name'
            type="text" 
            placeholder='your name' 
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            />
            <button className='star-button' 
            onClick={ clickButton }>Start
            </button>
            </div>

            
                {/* <div className='line-container'>
                    <img className='line-red' src={rectagle147} alt="" />
                    <img className='line-black' src={rectagle148} alt="" />
                </div> */}
            
            </div>
            
        </div>
    );
};

export default InputName;