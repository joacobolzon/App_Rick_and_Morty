import { useState } from "react";
import styled from "styled-components";

const InputSearch = styled.input`
border-radius:10px;
`
const ButtonSend = styled.button`
border-radius:10px;
`

export default function SearchBar(props) {
   
   const [character,setCharacter] = useState("")
   
   const handleChange = (e) => {
      setCharacter(e.target.value)
   }

   return (
      <div>
         <InputSearch type='search' placeholder="Buscar"
         onChange={handleChange}/>
      <ButtonSend 
      onClick={() => props.onSearch(character)}>
         Agregar
      </ButtonSend>
      </div>
   );
}
