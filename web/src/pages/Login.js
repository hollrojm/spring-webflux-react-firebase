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
        title: 'Usuario Registrado',
        text: 'Gracias por ingresar',
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
                    <div class="row mb-4 px-3">
                        <h6 class="mb-0 mr-4 mt-2">Sign in with</h6>
                        <div class="facebook text-center mr-3">
                        <i class="fa fa-google" aria-hidden="true"></i>
                        </div>
                        <div class="twitter text-center mr-3">
                            <div class="fa fa-twitter"></div>
                        </div>
                        <div class="linkedin text-center mr-3">
                            <div class="fa fa-linkedin"></div>
                        </div>
                    </div>
                    <div class="row px-3 mb-4">
                        <div class="line"></div> <small class="or text-center">Or</small>
                        <div class="line"></div>
                    </div>
                    <form onSubmit={registrarUsuario}>
                    <div class="row px-3"> <label class="mb-1">
                            <h6 class="mb-0 text-sm">Coreo electrónico</h6>
                        </label> <input onChange={(e) => {setEmail(e.target.value)}} class="mb-4" type="text" name="email" placeholder="Enter a valid email address"/> </div>
                    <div class="row px-3"> <label class="mb-1">
                            <h6 class="mb-0 text-sm">Contraseña</h6>
                        </label> <input onChange={(e) => {setPassword(e.target.value)}} type="password" name="password" placeholder="Enter password"/> </div>
                    <div class="row px-3 mb-4">
                        <div class="custom-control custom-checkbox custom-control-inline"> <input id="chk1" type="checkbox" name="chk" class="custom-control-input"/> <label for="chk1" class="custom-control-label text-sm">Remember me</label> </div> <a href="#" class="ml-auto mb-0 text-sm">Forgot Password?</a>
                    </div>
                    </form>
                    <div class="row mb-3 px-3"> <button onClick={registrarUsuario} type="submit" class="btn btn-danger text-center">Ingresar</button> </div>
                    <div class="row mb-4 px-3"> <small class="font-weight-bold">Don't have an account? <a class="text-danger ">Register</a></small> </div>
                </div>
            </div>
        </div>
  
    </div>



        </Fragment>


    )
}

export default Login
