import React, {useState} from 'react'
import { NavLink, Redirect, useHistory } from "react-router-dom";

export default function Header() {

    return (
        <div className="header">
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/sections">Sections</NavLink>
            <NavLink to="/about">About</NavLink>
        </div>
    )
}