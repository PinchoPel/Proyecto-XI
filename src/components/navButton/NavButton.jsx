import React from 'react'
import { NavLink } from 'react-router-dom'
import "./NavButton.css"

const NavButton = ({textButton, to}) => {
    return (
        <button className="button">
            <NavLink to={to}>
            {textButton}
            </NavLink>
        </button>
    )
}

export default NavButton
