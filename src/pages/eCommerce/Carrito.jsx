//imvocamos el contexto creado en el context para carrito
import {CarritoContext} from '../../contexto/carritoContext';
import {useContext} from 'react';
//invocamos el contexto de usuario para comprar segun el usuario
import {UsuarioContext} from '../../contexto/UsuarioProvider';

import createCheckOutCompra from '../../functions/createCheckoutComprar';


import {Link} from 'react-router-dom';
import { ListaProductosEnCarrito } from '../../components';

export  function Carrito() {
  //tratamos el useContext de carrito
  const {carrito}=useContext(CarritoContext);
  console.log(carrito);

  const {user,setUser}=useContext(UsuarioContext);

  //funcion para comprar
  function isBuyCarrito(){
    //enviamos a functions el uid y carrito para que reciba y haga su tratamiento en functions
    createCheckOutCompra(user.uid,carrito);
    console.log("hola comprando");
  }


  return (
    <>
      <h1 className='text-center py-3'>Tu carrito:</h1> 
      {carrito.length === 0 ? (
        <>
          <p className="text-xl">No hay productos en tu carrito</p>
          <Link to="/" className="text-azul underline my-3">
            Volver al inicio
          </Link>
        </>
      ) : (
        carrito?.map((producto) => <ListaProductosEnCarrito producto={producto} key={producto.id} />)
      )}
        <button onClick={isBuyCarrito} className='btn btn-success'>COMPRAR AHORA</button>
      <Link  className='btn btn-warning' to="/tiendaproducto" >Volver a tienda </Link>
    </>
  );
}
