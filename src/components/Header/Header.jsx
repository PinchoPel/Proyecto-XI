import React from 'react'
import Titleh1 from '../Title/Titleh1.jsx'
import "./Header.css"

const Header = ({children}) => {
    return (
        <header>
            <Titleh1>{children}</Titleh1>
        </header>
    )
}

export default Header
