import { useState } from "react";
import './SearchBar.modules.css'


export default function SearchBar(props) {
   
   const [character,setCharacter] = useState("")
   
   const handleChange = (e) => {
      setCharacter(e.target.value)
   }

   return (
      <div className="searchbar_divContainer">
         <input className="searchbar_input" type='search' placeholder="Buscar"
         onChange={handleChange}/>
      <button
      className="searchbar_button"
      onClick={() => props.onSearch(character)}>
         Agregar
      </button>
      </div>
   );
}
