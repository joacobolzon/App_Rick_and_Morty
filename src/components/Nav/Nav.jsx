import React from "react"
import SearchBar from "../SearchBar/SearchBar.jsx"
import styled from "styled-components"
import { Link } from "react-router-dom"

const StyledNav = styled.div`
width:95%;
padding:20px;
margin-bottom: 30px;
display: flex;
flex-direction:row-reverse;
border-radius: 10px;
background-color: rgb(10, 256, 235,50%)
`

export default function NavBar({onSearch}) {
    return (
        <StyledNav>
            <SearchBar onSearch={onSearch}/>
            <Link to='/about'>About</Link>
            <Link to='/home'>Home</Link>
        </StyledNav>
    )
}
