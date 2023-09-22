import  { useEffect, useState } from 'react';
//recibo el id que viene desde tienda outcomponents, enviado desde el link
import {useParams} from 'react-router-dom';
//invocamos a la funcion creada para traer la data de firestore
import getProductDeId from '../../../functions/getProductById';
//imvocamos el contexto creado en el context para carrito
import {CarritoContext} from '../../../contexto/carritoContext';
import {useContext} from 'react';

//invocamos al contexto UsuarioProvider para que pueda comprar, si esta authenticado compra caso contrrio no

import {Link} from 'react-router-dom';
import styled from 'styled-components';

export  function InfoProductosTienda() {
        //tratamos el useContext de carrito
        const {carrito, setCarrito}=useContext(CarritoContext);

    const {id}=useParams();
    //tratamiento con la function de llamada de data y setear al estado la db, y el efecto cuando solo cambie el id
    const [productoInfo, setProductoInfo] = useState(null)
    useEffect(() => {
      async function getProductDeInfo(){
        //invoco la data e indentifico por su id mediante el useParams
        const product= await getProductDeId(id);
        setProductoInfo(product);
      }
      getProductDeInfo();
    }, [id])

    //funcion para agregar producto al carrito
    function addToCard(){
      //guarda todo lo que tenga carrito y adicional lo que tenga productoInfo||crea un nuevo array con todo lo que tenfa el estado carrito y el estado productoInfo
      setCarrito([...carrito,productoInfo]);
    }   
    


    
  return (
<ContenedorInfo className='container py-5'>           
<div className="">
     <h1>{productoInfo?.name}</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
</div>
<div className="">
        {/* productoInfo?.images[0] -> la interrogacion nos indica si existe muestralo caso contrario bota error */}
    <MiImagenInfo src={productoInfo?.images[0]}  alt={productoInfo?.name} />
   
</div>
 <AcionEnInfoProductos>
       <button className='btn btn-success ' onClick={addToCard} >AÑADIR A CARRITO </button>
       
     
       <Link  to="/carrito" className='btn btn-warning'>IR A CARRITO</Link>
       
       
</AcionEnInfoProductos>
   
</ContenedorInfo>
  )
}

const ContenedorInfo=styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-evenly;
`;
const MiImagenInfo=styled.img`
  width: 250px;
  height: 200px;
  border-radius:10%;
`;
const AcionEnInfoProductos=styled.div`
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    justify-content:space-evenly;
`;