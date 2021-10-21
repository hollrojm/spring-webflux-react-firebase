import React, { useState }from 'react'
import { auth } from '../App'
import Swal from 'sweetalert2'
import firebase from "firebase/app";
function Login(props) {



    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

   const registrarUsuario = (e) =>{
       e.preventDefault()
       auth.signInWithEmailAndPassword(email, password)
       .then((res) =>
       console.log(auth),
       Swal.fire({
        icon: 'success',
        title: 'Usuario Registrado',
        text: 'Gracias por ingresar',
      })
       )
   }
    const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }; 

    return (
        <div className="mt-4">
            <h2>Login</h2>
            <form onSubmit={registrarUsuario} className= "form-group mt-3">
                <input
                onChange={(e) => {setEmail(e.target.value)}}
                className="form-control mb-3" type="email"
                placeholder="email"
                ></input>
                <input
                onChange={(e) => {setPassword(e.target.value)}}
                className="form-control mb-3" type="password"
                placeholder="contraseña"
                ></input>
                <input type="submit"
                className="btn btn-block btn-info"
                value="Registrar"/>
                <p></p>
            </form>
            <div>
                <button onClick={signInWithGoogle}>inicio con Google</button>
            </div>



        </div>
    )
}

export default Login
