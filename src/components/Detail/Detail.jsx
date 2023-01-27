import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './Detail.module.css'

export default function Detail() {

  const [character, setCharacter] = useState({});

  const { detailId } = useParams();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div className="detail_firstDiv">
      <div className="detail_divContainer">
        <Link to='/home'><button className="detail_button">Back to home</button></Link>
        <h1 className="detail_name">Name: {character.name}</h1>
        <h2 className="detail_gender">Gender: {character.gender}</h2>
        <h2 className="detail_origin">Origin: {character.origin?.name}</h2>
        <h2 className="detail_location">Location: {character.location?.name}</h2>
      </div>
      <img className="detail_img" src={character.image} alt="No encontrada" />
    </div>
  )
}