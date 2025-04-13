import React, { useEffect, useState } from 'react'
import "./Generation.css";
import Api from '../../api/Api.jsx';
import {useOutletContext, useParams } from 'react-router-dom';
import PokeCard from '../../components/pokeCard/PokeCard.jsx';
import NavButton from '../../components/navButton/NavButton.jsx';

const Generation = () => {
    const [region, setRegion] = useState([]);
    const {id}= useParams();
    const { setHeaderTitle } = useOutletContext();
    useEffect(()=>{
        id == 10 
        ? setHeaderTitle("Este es tu equipo")
        : setHeaderTitle(region.main_region?.name.toUpperCase());
    },[region, setHeaderTitle] )
    return (
        <div className='divGenerations' id={`generation${id}`}>
            <div className='divReturnButton'>
                <NavButton textButton="Volver a Inicio" to="/"/>
            </div>
            <div className='divPokeCards'>
                {<Api endPoint= {`generation/${id}`} takeResults={setRegion}/>}
                <PokeCard/>
            </div>
        
           
        </div>
    )
}

export default Generation