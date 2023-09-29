// importamos la funcion para inicializar la aplicacion de firebase
import { initializeApp } from "firebase/app";
//importamos la funcion para le manejo de bd
import {getFirestore} from 'firebase/firestore';

//añade la credenciales
const firebaseConfig = {
  
};

// inicializamos la aplicacion y la guardamos en firebaseApp
const dbapp = initializeApp(firebaseConfig);

//para el manejo de db
export const db=getFirestore(dbapp);

// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicacion 
export  {dbapp}
