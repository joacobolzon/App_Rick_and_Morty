import './App.css'
import Cards from './components/Cards.jsx'
import characters from './data.js'
import Nav from './components/Nav.jsx'
import { useState } from 'react'


function App () {

  const [characters,setCharacters] = useState([])
  
/*   const example = {
    name: 'Morty Smith',
    species: 'Human',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
 }; */

 const onSearch = (character) => {
  fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
 }

const onClose = (id) => {
  setCharacters(characters.filter(char => char.id !== id))
}

  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav onSearch = {onSearch}/>
      <div>
        <Cards
          characters={characters}
          onClose = {onClose}
        />
      </div>
      <hr />
      
    </div>
  )
}

export default App
