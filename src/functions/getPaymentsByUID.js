// para traer los articulos que se ha comprado cada usuario
import {db} from '../firebase/firebase';
import {collection,getDocs} from 'firebase/firestore';

export async function getPaymentsByUIDProcesados(uid){
    //hacemos una referencia a la coleccion 
    const collectionRef=collection(db,`customers/${uid}/payments`);
    //traemos esos datos en snaps en fotos
    const snaps = await getDocs(collectionRef);
    //accedemos a la propieda docs de snaps luego mapeamos para regresar la data de cada snaps
    const payments=snaps.docs.map((snap)=>snap.data());

    return payments;
}
