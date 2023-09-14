//imvocamos el contexto creado en el context para carrito
import {CarritoContext} from '../../contexto/carritoContext';
import {useContext} from 'react';
//invocamos el contexto de usuario para comprar segun el usuario
import {UsuarioContext} from '../../contexto/UsuarioProvider';

import createCheckOutCompra from '../../functions/createCheckoutComprar';


import {Link} from 'react-router-dom';

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
      Tu carrito:
      {
      carrito?.map((producto)=>
        <div key={producto.id}>
        <p>{producto.name}</p>
        </div>
       
        )
      }
        <button onClick={isBuyCarrito} className='btn btn-success'>COMPRAR AHORA</button>
      <Link  className='btn btn-warning' to="/tiendaproducto" >Volver a tienda </Link>
    </>
  );
}
