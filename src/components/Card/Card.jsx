import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addFavorite,delFavorite } from '../../redux/actions/actions';
import './Card.module.css';

export function Card(props) {
   
   const [isFav,setIsFav] = useState(false);
   
   function handleFavorite(){
      if(isFav){
         setIsFav(false)
         props.delFavorite(props.id);
      } else {
         setIsFav(true);
         props.addFavorite(props);
      }
   }

   useEffect(() => {
      props.myFavorites?.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);

   return (
      <div className='card_divContainer'>
         {isFav ? (<button onClick={handleFavorite}>❤️</button>) : (<button onClick={handleFavorite}>🤍</button>)}
         <button className='card_button' onClick={() => props.onClose(props.id)}>X</button>
         <Link to={`/detail/${props.id}`}><h2 className='card_title'>Name: {props.name}</h2></Link>
         <h2 className='card_species'>Specie: {props.species}</h2>
         <h2 className='card_gender'>Gender: {props.gender}</h2>
         <img className='card_img' src={props.image} alt="Img not found" />
      </div>
   );
}

export function mapDispatchToProps(dispatch){
   return{
      addFavorite: function(fav){
         dispatch(addFavorite(fav))
      },
      
      delFavorite: function(id){
         dispatch(delFavorite(id))
      }
   }
}

export function mapStateToProps(state){
   return {
      myFavorites: state.myFavorites,
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);