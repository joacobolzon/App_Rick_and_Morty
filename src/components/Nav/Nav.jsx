import React from "react"
import SearchBar from "../SearchBar/SearchBar.jsx"
import { Link } from "react-router-dom"
import './Nav.modules.css'


export default function NavBar({onSearch}) {
    return (
        <div className="nav_divContainer">
            <SearchBar onSearch={onSearch}/>
            <Link className="nav_about" to='/about'>About</Link>
            <Link className="nav_home" to='/home'>Home</Link>
        </div>
    )
}
