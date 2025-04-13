import React from 'react'
import { Outlet } from 'react-router-dom'
import "./Main.css"

const Main = ({ setHeaderTitle }) => {
    return (
        <main>
            <Outlet context={ {setHeaderTitle} }/>
        </main>
    )
}

export default Main
