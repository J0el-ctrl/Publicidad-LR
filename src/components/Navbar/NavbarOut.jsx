/* eslint-disable react/prop-types */
import{
  NavLink,useNavigate 
} from "react-router-dom"
import "./Navbar.css"
import { AiOutlineShoppingCart } from "react-icons/ai";
//importamos carrito para el contador de productos
import {CarritoContext} from '../../contexto/carritoContext';
import {Link} from 'react-router-dom';

//importamos el contexto para su tratamiento
import {UsuarioContext} from '../../contexto/UsuarioProvider';
import {useContext} from 'react';


export  function NavbarOut(props) {
//tratamos el carrito context para el contador y demas
const {carrito}=useContext(CarritoContext);

  //tratamos el useContext de user
  const {user}=useContext(UsuarioContext);
  //recibimos de props de Home la funcion CerrarSesion
  const {CerrarSesion}=props;
  


  // menejamos el scrol abajo
  const ScrolBajo=()=>{
    window.scrollTo(0,0);
  }

  //tratamos el navigate
  const navigate=useNavigate();
  const Navegar=()=>{
    //navegamos a la ruta
    navigate("/login")
    ScrolBajo();
   
  }


  return (
    <header>         
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">
    <img src="/public/img/sc-logo.png" alt="Sentimiento Carnavalero" width="150" height="120" />
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="container">

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar nav me-auto ">
        <li>
          <NavLink className="nav-bar-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <li>
           <NavLink className="nav-bar-link" aria-current="page" to="/eventos">Eventos</NavLink>
        </li>
        <li>
           <NavLink className="nav-bar-link" aria-current="page" to="/publicaciones">Publicaciones</NavLink>
        </li>
        <li>
           <NavLink className="nav-bar-link" aria-current="page" to="/aventuras">Aventuras</NavLink>
        </li>
        <li>
           <NavLink className="nav-bar-link" aria-current="page" to="/ampay">Ampay</NavLink>
        </li>
        <li>
           <NavLink className="nav-bar-link" aria-current="page" to="/tiendaproducto">Tienda</NavLink>
        </li>
        <li>
        <Link to="/carrito">
              <span
                // className={`absolute w-3 h-3 rounded-full bg-red-600 top-0 right-0  translate-x-1/2 -translate-y-1/2  ${
                //   carrito.length >= 0 ? "opacity-100" : "opacity-0"
                // }`}
              >{carrito.length}</span>
              <AiOutlineShoppingCart size={30} />
            </Link>
        </li>
      </ul>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end" >
        {
          user?  <button onClick={CerrarSesion}  className="btn btn-danger" >Cerrar Session</button> : <button onClick={Navegar}  className="btn btn-success" >Iniciar session</button>
        }  
        {
          user?  <NavLink className="nav-bar-link-intranet" to="/intranet">Intranet</NavLink> : <NavLink className="nav-bar-link-intranet" to="/registrar">Registrarse</NavLink>
        }
        
      </div>
    </div> 
    </div>
  </div>
</nav>
 </header>
  )
}



