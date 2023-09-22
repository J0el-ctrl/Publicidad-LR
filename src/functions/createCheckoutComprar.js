// para ejecutar la compra de los articulos en stripe y react

import {db} from '../firebase/firebase';
import {collection,doc,addDoc,onSnapshot} from 'firebase/firestore';

//funcion para comprar y que tenga session iniciada
//creamos la funcion de compra y recibimos el uid del usuario que va a comprar este viene de carrito en pages-ecommerce
async function createCheckOutCompra(uid,cart){
    const collectionRef=collection(db,`customers/${uid}/checkout_sessions`);
    //destructurando el id que devuelve el documento
    const {id}=await addDoc(collectionRef,{
        mode:"payment",
        success_url:window.location.origin,
        cancel_url:window.location.origin,
        collect_shipping_address:true,  
        line_items:cart.map((item)=>{
            return{
                quantity:1,
                price:item.priceId,
            };
        }),
    });

    //monitorea cambios en tiempo real con snapshot mira el customers del uid del usuario y checke session escucha el documento de la sesion que acaba de crear y pasa el id del documento que optiene de la destructuracion {id}
     const cancelarStreaming= onSnapshot(
        doc(db,`customers/${uid}/checkout_sessions/${id}`),
        (snapshot)=>{
            //cada que haya cambios asignale a la variable let el valor de la url, que envia al gestor de venta de strapi
            let url=snapshot.data().url;
            if(url){
                //una vez tenga el url cancelar el escucha para que no consuma memoria y pasamos a una nueva ventana de gestor de venta de strapi
                cancelarStreaming();
                window.location.href=url;
            }
        }
    );


}

    export default createCheckOutCompra;