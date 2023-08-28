import {
    BrowserRouter,
    Routes,
    Route,
   } from 'react-router-dom';
import {Ampay, Aventuras, Eventos, Home, Intranet, Login, PaginaNoEncontrada, Publicaciones, Registro} from '../pages';

import {UsuarioContext} from '../contexto/UsuarioProvider';
import {useContext} from 'react';

//importamos permisos para el auth para cerrar session
import {getAuth,signOut} from 'firebase/auth';
import { NavbarOut, Tienda } from '../components';
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
            <Route exact path='/tienda' element={<Tienda/>}/>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/registrar' element={<Registro/>}/>
            <Route exact path='/' element={<Home/>}/>         
            <Route exact path='*' element={<PaginaNoEncontrada/>}/>
    </Routes>
</BrowserRouter>
  ) 
}
