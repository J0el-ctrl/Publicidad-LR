// para manejar los productos se envi a Tienda de OutComponents

import {db} from '../firebase/firebase';
//query & where para filtrar los productos activos o no
import {collection,getDocs,query,where} from 'firebase/firestore';

export default async function(){
    //crea una referencia a la coleccion de la bd
    const collectionRef=collection(db,"products");
    //para filtrar los documentos activos || consulta a la referencia de la coleccion donde la propiedad active sea igual a true
    const filtrarActivos= query(collectionRef,where("active","==",true));
    //trae los documentos de la coleccion
    const snaps= await getDocs(filtrarActivos);
    const productos=[];

    //se va a iterar con cada snaps a recorrer una coleccion para devolver un valor al terminar el snaps.docs debe ingresar a este para que pueda iterar u recorrer
    for await(const snap of snaps.docs){
        //leer la informacion de cada snap con data() ademas recibe la informacion de producto.price
        const producto=snap.data();
        //al producto se asigna un id, el nombre de cada documento
        producto.id=snap.id;
        //snaps para los PRECIOS ***
        //apuntamos hasta la coleccion prices || snap.ref apunta al documento || obtenemos los documentos de la subcoleccionde prices 
        const precioSnaps=await getDocs(collection(snap.ref,"prices"));
        //asignamos a producto luego accedemos al precio [0] del array en prices y tomamos el valor data
        producto.price=precioSnaps.docs[0].data();
        //para obtener el precio de ese id de documento || priceId
        producto.priceId=precioSnaps.docs[0].id;
        //enviamos al arrary productos[] esto const producto=snap.data();
        productos.push(producto);
    }
    return productos;

}