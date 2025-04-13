import React from 'react'
import "./RouteNotFound.css"
import NavButton from '../../components/navButton/NavButton.jsx'

const RouteNotFound = (props) => {
    return (
        <div className='notFound'>
            <p>Ruta no encontrada</p>
            <NavButton textButton="Volver a Inicio" to="/"/>
        </div>
    )
}

export default RouteNotFound
