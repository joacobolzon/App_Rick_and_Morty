import { useState , useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Route , Routes } from 'react-router-dom'
import './App.css'
import Cards from './components/Cards/Cards.jsx'  
import Nav from './components/Nav/Nav.jsx'
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail.jsx'
import Error from './components/Error/Error.jsx'
import Form from './components/Form/Form.jsx'
import Favorites from './components/Favorites/Favorites.jsx'


function App () {
  const navigate = useNavigate();
  const location = useLocation();
  
  const username = 'joaco@gmail.com';
  const password = 'joaco123';
  
  const [access,setAccess] = useState(false);
  
  const [characters,setCharacters] = useState([]);
  
  function login(userData) {
    if (userData.password === password && userData.username === username) {
       setAccess(true);
       navigate('/home');
    }
 }
 
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
      
      useEffect(() => {
       !access && navigate('/');
     }, [access]);
      
      return (
        <div>
          {location.pathname !== '/' && <Nav onSearch = {onSearch}/>}
            <Routes className='App' style={{ padding: '25px' }}>
              <Route exact path='/' element={<Form login={login}/>}></Route>
              <Route path='/home' element={<Cards characters={characters} onClose = {onClose}/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/favorites' element={<Favorites/>}/>
              <Route path='/detail/:detailId' element={<Detail/>}/>
              <Route path='*' element={<Error/>}></Route>
            </Routes>
        </div>
  )
}

export default App
