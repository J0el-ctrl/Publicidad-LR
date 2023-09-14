// para ejecutar la compra de los articulos en stripe y react

import {db} from '../firebase/firebase';
import {collection,doc,addDoc,onSnapshot} from 'firebase/firestore';

//funcion para comprar y que tenga session iniciada
//creamos la funcion de compra y recibimos el uid del usuario que va a comprar este viene de carrito en pages-ecommerce
async function createCheckOutCompra(uid,cart){
    const collectionRef=collection(db,`customers/${uid}/checkout_sessions`);
    addDoc(collectionRef,{
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
}

    export default createCheckOutCompra;