import {
    BrowserRouter,
    Routes,
    Route,
   } from 'react-router-dom';
import {Ampay, Aventuras, Carrito, Checkout, Eventos, Home, Intranet, Login, PaginaNoEncontrada, Perfil, Publicaciones, Registro, TiendaProducto} from '../pages';

import {UsuarioContext} from '../contexto/UsuarioProvider';
import {useContext} from 'react';

//importamos permisos para el auth para cerrar session
import {getAuth,signOut} from 'firebase/auth';
import { InfoProductosTienda, NavbarOut } from '../components';
//integramos las credenciales de firebase con los permisos del auth
//importamos credenciales de firesbase.config
import {dbapp} from '../firebase/firebase';

const auth=getAuth(dbapp);

export  function MyRoutes() {
    
  //consumiendo el contexto para su manejo de user
    const {user}=useContext(UsuarioContext);

   //funcion para cerrar la sesion 
   const CerrarSesion=()=>{
    signOut(auth);
    console.log("sesion terminada");
    // navigate("/login")
  }

  return (
<BrowserRouter>

    <NavbarOut CerrarSesion={CerrarSesion}  />
    <Routes>
        {
            user? <Route exact path='/intranet' element={<Intranet/>}/>  : console.log("usuario no detectado")
        }
      
            
            <Route exact path='/eventos' element={<Eventos/>}/>
            <Route exact path='/publicaciones' element={<Publicaciones/>}/>
            <Route exact path='/aventuras' element={<Aventuras/>}/>
            <Route exact path='/ampay' element={<Ampay/>}/>
            {/* producto => /infodeproducto/:id' para que al hacer click me cargue el contenido de ese articulo en la page de tiendaproductos */}
            {/* muestra los productos en tienda */}
            <Route exact path='/tiendaproducto' element={<TiendaProducto/>}/>
            {/* muestra la info de producto al hacer click sobre el item de la tienda new page u cara */}
            <Route exact path='/infodeproducto/:id' element={<InfoProductosTienda/>}/>

            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/registrar' element={<Registro/>}/>

          {/* gestionar el comercio   INICIO*/}
          <Route exact path='/perfil' element={<Perfil/>} />
          <Route exact path='/carrito' element={<Carrito/>} />
          <Route exact path='/checkout' element={<Checkout/>} />
          {/* gestionar el comercio   FIN*/}

            <Route exact path='/' element={<Home/>}/>         
            <Route exact path='*' element={<PaginaNoEncontrada/>}/>
    </Routes>
</BrowserRouter>
  ) 
}
