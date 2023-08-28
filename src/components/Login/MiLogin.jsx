import {  useNavigate } from "react-router-dom";

import {dbapp} from '../../firebase/firebase';
import {signInWithEmailAndPassword,getAuth} from 'firebase/auth';

const auth=getAuth(dbapp);

export  function MiLogin() {
    const navigate = useNavigate();
 
    const submitHandler=async(e)=>{
        e.preventDefault();     
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;   
        // signInWithEmailAndPassword(auth,email,password)
        try {
          await signInWithEmailAndPassword(auth,email,password)
           navigate("/intranet")
            console.log("session iniciada");

        } catch (error) {
            console.log(error,"session rechazada");
        }
                     
    };
    
  return (
    <section>
        <h1>Login</h1>
        <form onSubmit={submitHandler}>
            <label>Correo Electronico:
            <input className="form-control" type="email" id="email"/>
            </label>
            <br />
            <label>Contraseña:
            <input className="form-control" type="password" id="password"/>
            </label>
           <br />
           
            <br />
            <input type="submit"
                   value="Login"
            />
            <br />
        </form>

        {/* <button className="btn btn-success">
            Registrar
        </button> */}
    </section>
  )
}
