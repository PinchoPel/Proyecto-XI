import React, { useEffect, useState } from 'react'
import Api from '../../api/Api.jsx'
import "./Home.css"
import TitleH3 from '../../components/titleh3/TitleH3.jsx';
import { getRandomColor } from '../../utils/randomColor.js';
import { NavLink, useOutletContext } from 'react-router-dom';


const Home = () => {
    const [generations, setGenerations] = useState([]);
    const { setHeaderTitle } = useOutletContext();
    useEffect(()=>{
        setHeaderTitle("Generaciones Pokemon");       
    },[setHeaderTitle] )
  
    return (
        <div className='home'>
            <Api endPoint="generation" takeResults={setGenerations}/>
            {generations.results && generations.results.map((gen, index)=>
            <NavLink 
              key={index}
              to={`/generation/${index + 1}`}
            >
              <div
                className='generation'
                id={`${index + 1}`}
                style={ {backgroundColor: getRandomColor()}} 
              >
                <TitleH3>{gen.name.toUpperCase().replace("-", " ")}</TitleH3>
              </div>
            </NavLink>
          )}
          <NavLink key="10" to={`/generation/10`} >
            <div className='generation' style= {{backgroundColor: getRandomColor()}} id='10'>
              <TitleH3>{"Genera tu equipo pokemon"} </TitleH3>
            </div>
          </NavLink>

        </div>
    )
}

export default Home
