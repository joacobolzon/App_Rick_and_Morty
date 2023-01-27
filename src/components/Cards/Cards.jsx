import {Card} from '../Card/Card.jsx';
import './Cards.modules.css'

export default function Cards(props) {
   const { characters } = props;
   return <div className='cards_divContainer'>
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
   </div>;
}
