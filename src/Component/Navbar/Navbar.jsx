import React from 'react'
import './navbar.css';
import { BrowserRouter , Router, Routes, Route, Link, NavLink } from 'react-router-dom';

function Navbar(props) {
    return (
        <div className="Row">
                <div>
                    <NavLink to="/">
                        <img class="img" width="110px" src={props.logo} />
                    </NavLink>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">
                    <NavLink to="/Movies">Movies</NavLink>
                    </button>
                    <div class="dropdown-content">
                        <NavLink to="/Movies">Featured</NavLink>
                        <NavLink to="/DoctorStrange">Doctor Strange In The Multiverse Of Madness</NavLink>
                        <NavLink to="/Lightyear">Light year</NavLink>
                        <NavLink to="/TurningRed">Turning Red</NavLink>
                        <NavLink to="/Lucasfilm">Lucasfilm Movies</NavLink>
                        <NavLink to="/Marvel">Marvel Movies</NavLink>
                        <NavLink to="/Pixar">Pixar Movies</NavLink>
                    </div>
                </div>
        </div>
    )
}

export default Navbar