
//recibimos de functions los productos activos || getActiveProducts.js
import { useEffect, useState } from 'react';
import getActiveProducts from '../../../functions/getActiveProducts';

import {Link} from 'react-router-dom';
import styled from 'styled-components';
export  function Tienda() {

    //tratamiento de lectura de productos con apoyo de getActiveProducts functions
    const [productos, setProductos] = useState(null)
    useEffect(() => {
      async function getProducts(){
        const products = await getActiveProducts();
        setProductos(products)
      }
      getProducts();
    }, [])
    

  
  return (
    <>
      <ContenedorTienda className="container">
      {productos?productos.map((p)=>     
<div key={p.id} >
  <div className="card" >
      {/* enviamos la info a una pagina new en infodeproductos, */}
    <Link to={`/infodeproducto/${p.id}`} >
        <MiImagen src={p.images[0]}  alt={p.name} />
    </Link>
      <div className="card-body">
          <h5 className="card-title">{p.name}</h5>
          <p className="card-text"> s/{p.price.unit_amount/100}  
        {p.price.currency}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
  </div>  
</div>       
       )
    :
    (
      null
    )
    }
      </ContenedorTienda>    
  </>
  )
}

const ContenedorTienda=styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:space-evenly;

`;
const MiImagen=styled.img`
  width: 200px;
  height: 150px;
`;