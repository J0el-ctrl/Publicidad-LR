/* eslint-disable react/prop-types */

import styled from 'styled-components';
import {CarritoContext} from '../../../contexto/carritoContext';
import {useContext} from 'react';


export  function ListaProductosEnCarrito({producto}) {

    const {carrito}=useContext(CarritoContext);

  return (
<> 
<table className="table table-hover container">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Precio</th>
      <th scope="col">foto</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row">{carrito.length}</td>
      <td>{producto.name}</td>
      <td>${producto.price.unit_amount / 100}</td>
      <td><ImagenArticuloCompra src={producto.images[0]} alt="" className="img-thumbnail" /></td>
    </tr>

  
  </tbody>
</table>

</>

  );
}

const ImagenArticuloCompra=styled.img`
    width:150px;
    height:auto;
    border-radius:15%;
`;