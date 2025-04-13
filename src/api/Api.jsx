import React, { useEffect, useState } from 'react'

const Api = ({endPoint, takeResults}) => {
    const [apiResponse, setApi] = useState();
    useEffect(()=>{
        const apiCall = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/${endPoint}`);
            const results = await response.json();
            setApi(results);
            takeResults(results);                     
        }
         apiCall();
    },[endPoint])
    return (
        <></>
    )
}

export default Api
