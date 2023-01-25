import './App.css'
import Cards from './components/Cards/Cards.jsx'  
import Nav from './components/Nav/Nav.jsx'
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail.jsx'
import Error from './components/Error/Error.jsx'
import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'

function App () {

  const [characters,setCharacters] = useState([])

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
    <div>
    <Nav onSearch = {onSearch}/>
    <Routes className='App' style={{ padding: '25px' }}>
      <Route path='/home' element={<Cards characters={characters} onClose = {onClose}/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/detail/:detailId' element={<Detail/>}/>
      <Route path='*' element={<Error/>}></Route>
    </Routes>
    </div>
  )
}

export default App
