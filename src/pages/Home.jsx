// import {  useNavigate } from "react-router-dom";
//importamos credenciales de firesbase.config
// import {dbapp} from '../firebase/firebase';
//importamos permisos para el auth
// import {getAuth,signOut} from 'firebase/auth';
//importamos el manejo de navbar
import { HomeOut } from "../components";
//integramos las credenciales de firebase con los permisos del auth
// const auth=getAuth(dbapp);

export  function Home() {
  // const navigate = useNavigate();


  //funcion para cerrar la sesion 
  // const CerrarSesion=()=>{
  //   signOut(auth);
  //   console.log("sesion terminada");
  //   navigate("/login")
  // }

  return (
    <div>
      {/* <NavbarOut CerrarSesion={CerrarSesion} /> */}
      <h2>Home</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum? home home</p>
      <HomeOut/>
    </div>
  )
}
 