import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
            <ul className="nav bg-dark">

                <li className="nav-item">
                    <Link className="nav-link text-decoration-none text-white" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-decoration-none text-white" to="/weekly">Weekly</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-decoration-none text-white" to="/weekly-battle">Weekly Battle</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-decoration-none text-white" to="/popular">Popular</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-decoration-none text-white" to="/popular-battle">Popular Battle</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-decoration-none text-white" to="/favorites">Favorites</Link>
                </li>
        
            </ul>
        );
    }
}

export default NavBar;