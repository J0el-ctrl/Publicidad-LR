import {MiRegistro} from "../components";
import styled from 'styled-components';


export  function Registro() {
  return (

    <ContenR>
  
      <ContenRLeft className="container">
        <MiRegistro/>
      </ContenRLeft>
      <BlockRight/>
         
    
  </ContenR>  
  )
}
const ContenRLeft=styled.div`
    width: 50%; 
    display: flex;
    align-items: center;
    justify-content: center;
`;
const ContenR=styled.div`
    height: 100vh;
    max-height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
const BlockRight=styled.div`
 background-image: url("/img/e-register.png");
  background-position: center;
    background-size: cover;
    height: 100%;
    width: 50%;
`;