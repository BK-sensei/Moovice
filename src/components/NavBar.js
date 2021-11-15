import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
            <ul className="nav">

                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/weekly">Weekly</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/weekly-battle">Weekly Battle</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/popular">Popular</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/popular-battle">Popular Battle</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/favorites">Favorites</Link>
                </li>
        
            </ul>
        );
    }
}

export default NavBar;