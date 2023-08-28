/* eslint-disable react/prop-types */
import {useState,createContext} from 'react';


//para detectar usuario el escucha
import {dbapp} from '../firebase/firebase';
import {getAuth,onAuthStateChanged} from 'firebase/auth';
const auth=getAuth(dbapp)
//para leer las credenciales de firestore y detectar su rol
//doc;trae la referencia y getDoc; la informacion de dicha referencia
import { getFirestore, doc, getDoc } from "firebase/firestore";
const firestore=getFirestore(dbapp);

//para crear el contexto 
export const UsuarioContext =createContext()

export  function UsuarioProvider(props) {
  const [user, setUser] = useState(null)


  // PARA DETECTAR USUARIO
  async function getRol(uid) {
    //crea una referencia la documento
    const docuRef = doc(firestore, `usuarios/${uid}`);
    //obtener la informacion cifrada en cierta manera
    const docuCifrada = await getDoc(docuRef);
    //
    const infoFinal = docuCifrada.data().rol;
    return infoFinal;
  }
  //establecer la informacion del usuario a traves del usuario
  function setUserWithFirebaseAndRol(usuarioFirebase) {
    //reciba el rol
    getRol(usuarioFirebase.uid).then((rol) => {
      //define la informacion del usuario hasta obtener el rol al final y se guarda en el estado
      const userData = {
        uid: usuarioFirebase.uid,
        email: usuarioFirebase.email,
        rol: rol,
      };
      setUser(userData);
      console.log("userData fianl", userData);
    });
  }

    // // si existe usuario en firebase, se guarda en el estado setUser, caso contrario el estado regresa a null
    onAuthStateChanged(auth,(usuarioFirebase)=>{
        if(usuarioFirebase){
          if(!user){
            setUserWithFirebaseAndRol(usuarioFirebase);
          }
        }else{
            setUser(null);
        }
    })

    //FIN DETECTAR USUARIO
  return (
    <UsuarioContext.Provider value={{user}} >
      {props.children}
    </UsuarioContext.Provider>
  )
}
