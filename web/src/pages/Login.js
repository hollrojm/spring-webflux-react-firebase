import React, { Fragment, useState }from 'react'
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
       Swal.fire({
        icon: 'success',
        title: 'Bienvenido',
      })).catch((error) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuario o contraseña invalido!',
          })
      });
   }
    const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }; 

    return (
        <Fragment>
            <div class="container-fluid ">
        <div class="row d-flex">
            <div class="col-lg-6">
            </div>
            <div class="col-lg-6">
                <div class="card2 card border-0 px-4 py-5">
                    
                        <button className="btn-google right" onClick={signInWithGoogle}>Sign in with google  <i class="fab fa-google"></i></button>;
                    
                        <div class="line"></div> <small class="or text-center">Or</small>
                        <br></br>
                    
                    <form onSubmit={registrarUsuario}>
                    <div class="row px-3"> <label class="mb-1">
                            <h6 class="mb-0 text-sm">Coreo electrónico</h6>
                        </label> <input onChange={(e) => {setEmail(e.target.value)}} class="mb-4" type="text" name="email" placeholder="Enter a valid email address"/> </div>
                    <div class="row px-3"> <label class="mb-1">
                            <h6 class="mb-0 text-sm">Contraseña</h6>
                        </label> <input onChange={(e) => {setPassword(e.target.value)}} type="password" name="password" placeholder="Enter password"/> </div>
                    <div class="row px-3 mb-4">
                    </div>
                    </form>
                    <div class="row mb-3 px-3"> <button onClick={registrarUsuario} type="submit" class="btn btn-info text-center">Ingresar</button> </div>
                </div>
            </div>
        </div>
  
    </div>



        </Fragment>


    )
}

export default Login
