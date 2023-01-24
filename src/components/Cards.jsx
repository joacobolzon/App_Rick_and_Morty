import Card from './Card';
import styled from 'styled-components';

const DivContainer = styled.div`
align-items : center;
display : flex;
flex-direction: row;
justify-content: space-around;
`

export default function Cards(props) {
   const { characters } = props;
   return <DivContainer>
      {characters.map(character =>
         <Card 
            key ={character.name}
            name = {character.name}
            species = {character.species}
            gender = {character.gender}
            image = {character.image}
            id={character.id}
            onClose = {props.onClose}
         />)}
   </DivContainer>;
}
