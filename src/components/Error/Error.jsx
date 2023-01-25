import React from "react";
import styled from "styled-components";

const DivError = styled.div`
color:#FFF;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

export default function Error (){
    return (
        <DivError>
            <h1>ERROR 404</h1>
            <h2>Página no encontrada</h2>
        </DivError>
    )
}



