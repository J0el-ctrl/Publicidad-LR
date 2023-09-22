//pagina para traer los pagos procesados por cada usuario
import { useEffect, useState } from 'react';
import {getPaymentsByUIDProcesados} from '../../functions/getPaymentsByUID';

import {UsuarioContext} from '../../contexto/UsuarioProvider';
import {useContext} from 'react';

export  function Perfil() {

  const {user}=useContext(UsuarioContext);
  const [payments, setPayments] = useState([]);
  useEffect(() => {

    async function getPayments(){
      //si no existe usuario termina todo
      if(!user) return;
      //pasamos el uid del user al getPaymentsByUIDProcesados
      const payments=await getPaymentsByUIDProcesados(user.uid);
      setPayments(payments);
    }
      
    getPayments();

  }, [user])
  

  return (
    <div>
      <h2>articulos comprados del usuario:</h2>
      {payments.length > 0 &&
        payments.map((payment) => (
          <div key={payment.id}>
            <h3>{payment.amount / 100} </h3>
            <p>{payment.currency}</p>
          <span>
              {payment.items.map((item) => (
                
                <p key={item.description} >
                  {item.description}
                </p>
                
              ))}
          </span>
          </div>
        ))}
    
    </div>
  )
}



