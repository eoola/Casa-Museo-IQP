import React, {useState} from 'react'
import { NavLink, Redirect, useHistory } from "react-router-dom";

export default function Sections() {

    return (
        <main>
            <ul>
                <NavLink exact to="/">Section 1</NavLink>
                <NavLink to="/sections">Section 2</NavLink>
                <NavLink to="/about">Section 3</NavLink>
            </ul>
        </main>
    )
}