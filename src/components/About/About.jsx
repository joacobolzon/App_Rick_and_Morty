import React from "react";
import styled from "styled-components";

const DivAbout = styled.div`
color : white;
display: flex;
flex-direction:column;
justify-content: center;
align-items:center;
`

export default function About () {
    return (
        <DivAbout>
        <h1>¡Bienvenido a mi primera App con React!</h1>
        <h2>Mi nombre es Enzo Joaquin Bolzon</h2>
        <p>Actualmente soy estudiante del programa Full Stack Web developer
             de Soy Henry. Y este es un proyecto de la cursada!</p>
        </DivAbout>
    )
}






