import React, { useEffect } from 'react'

const Api = ({endPoint, takeResults}) => {
    useEffect(()=>{
        const apiCall = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/${endPoint}`);
            const results = await response.json();
            takeResults(results);                     
        }
         apiCall();
    },[endPoint])
    return (
        <></>
    )
}

export default Api
