//nos permitira llamar los datos y mostrar mediante el useParams en Tienda de Infoproductos

import {db} from '../firebase/firebase';
import {doc,collection,getDoc,getDocs} from 'firebase/firestore';

async function getProductDeId(id){
    const collectionRef=collection(db,"products");
    const docuRef=doc(collectionRef,id);
    const snapDoc=await getDoc(docuRef);
    const producto=snapDoc.data();

     //snaps para los PRECIOS ***
        //apuntamos hasta la coleccion prices || snap.ref apunta al documento || obtenemos los documentos de la subcoleccionde prices 
        const precioSnaps=await getDocs(collection(snapDoc.ref,"prices"));
        //asignamos a producto luego accedemos al precio [0] del array en prices y tomamos el valor data
        producto.price=precioSnaps.docs[0].data();
        //para obtener el precio de ese id de documento || priceId
        producto.priceId=precioSnaps.docs[0].id;

    return producto;
}

export default getProductDeId;