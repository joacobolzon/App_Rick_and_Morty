import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Img = styled.img`
border-radius : 30px;
margin-left : 10px;
margin-right : 10px;
margin-bottom: 10px
`

const Button = styled.button`
border-radius:10%;
color: red;
:hover{
   border-radius:30%;
}
`

const DivCard = styled.div`
background-color: rgb(100, 256, 235,30%);
box-shadow:2px -6px 10px #FFF;
border : 5px solid grey;
border-radius: 20px;
justify-content: space-around;
:hover{
   background-color: rgb(100, 256, 235,50%);
}
`

const H2Description = styled.h2`
color: #fff;
font: arial;
font-size: 25px;
`
const Title = styled.h2`
color: #fff;
font: arial;
font-size: 25px;
`

export default function Card(props) {
   return (
      <DivCard>
         <Button onClick={() => props.onClose(props.id)}>X</Button>
         <Link to={`/detail/${props.id}`}><Title>{props.name}</Title></Link>
         <H2Description>{props.species}</H2Description>
         <H2Description>{props.gender}</H2Description>
         <Img  src={props.image} alt="Img not found" />
      </DivCard>
   );
}
