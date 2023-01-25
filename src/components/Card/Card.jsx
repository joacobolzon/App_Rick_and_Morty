import { Link } from 'react-router-dom';
import './Card.modules.css';

export default function Card(props) {
   return (
      <div className='card_divContainer'>
         <button className='card_button' onClick={() => props.onClose(props.id)}>X</button>
         <Link to={`/detail/${props.id}`}><h2 className='card_title'>Name: {props.name}</h2></Link>
         <h2 className='card_species'>Specie: {props.species}</h2>
         <h2 className='card_gender'>Gender: {props.gender}</h2>
         <img className='card_img' src={props.image} alt="Img not found" />
      </div>
   );
}
