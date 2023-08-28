import {  useNavigate } from "react-router-dom";

//credenciales de firesbase.js
import {dbapp} from '../../firebase/firebase';
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth';

//para la bd
import {getFirestore,doc,setDoc} from 'firebase/firestore';
const firestore=getFirestore(dbapp);

const auth=getAuth(dbapp)

export  function MiRegistro() {
    const navigate = useNavigate();

    const registrarUsuario=async(email,password,rol)=>{
      const infoUsuario= await createUserWithEmailAndPassword(auth,email,password)
      .then((usuarioFirebase)=>{
        return usuarioFirebase;
      });
        console.log(infoUsuario);
       //para que se cree usuario en authentication y en la bd firestore
       const docuRef=doc(firestore,`usuarios/${infoUsuario.user.uid}`);
      setDoc(docuRef,{correo:email,password:password,rol:rol});


    }

    const submitHandler=(e)=>{
        e.preventDefault();
        //capturamos el elevemento del formulario a tarves del id tomamos su valor
        const email=e.target.elements.email.value;
        const password=e.target.elements.password.value;
        const rol=e.target.elements.rol.value;
        console.log("submit",email,password,rol);
        registrarUsuario(email,password,rol);
        navigate("/")
    }

  return (
    <section>
        <h1>Registro de Cuenta</h1>
        <form onSubmit={submitHandler}>
            <label>Correo Electronico:
            <input className="form-control" type="email" id="email"/>
            </label>
            <br />
            <label>Contraseña:
            <input className="form-control" type="password" id="password"/>
            </label>
           <br />
            <label>Rol:
                <br />
                <select id="rol" >
                    <option value="admin">Administrador</option>
                    <option value="user">Usuario</option>
                </select>
            </label>
            <br />
            <input type="submit"
                   value="Registrar"
            />
            <br />
        </form>

        <button className="btn btn-success">
            Registrar
        </button>
    </section>
  )
}
