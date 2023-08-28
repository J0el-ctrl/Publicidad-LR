// importamos la funcion para inicializar la aplicacion de firebase
import { initializeApp } from "firebase/app";

//añade la credenciales
const firebaseConfig = {
    apiKey: "AIzaSyAFQS2bNMextJHo_iaF7YNfX7bRtF6NFjo",
    authDomain: "e-commerce-peru.firebaseapp.com",
    projectId: "e-commerce-peru",
    storageBucket: "e-commerce-peru.appspot.com",
    messagingSenderId: "736459204903",
    appId: "1:736459204903:web:cf6bc775dbafdcf382a102"
};

// inicializamos la aplicacion y la guardamos en firebaseApp
const dbapp = initializeApp(firebaseConfig);
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicacion 
export  {dbapp}