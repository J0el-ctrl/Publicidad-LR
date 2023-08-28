// importamos la funcion para inicializar la aplicacion de firebase
import { initializeApp } from "firebase/app";

//añade la credenciales
const firebaseConfig = {
   
};

// inicializamos la aplicacion y la guardamos en firebaseApp
const dbapp = initializeApp(firebaseConfig);
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicacion 
export  {dbapp}