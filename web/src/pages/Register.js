import React, { useState } from 'react'
import { auth } from '../App'
import Swal from 'sweetalert2'
import firebase from "firebase/app";
function Register(props) {



    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const registrarUsuario = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
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
        <div className="container mt-6">
            <div className="row justify-content-center mt-5">
                <div className="col-lg-6">
                    <h2>Registrate</h2>
                    <form onSubmit={registrarUsuario} >
                        <div >
                        <input
                            onChange={(e) => { setEmail(e.target.value) }}
                            id="email"
                            className="form-control" type="email"
                            placeholder="Email"
                        ></input>
                        </div>
                        <input
                            onChange={(e) => { setPassword(e.target.value) }}
                            className="form-control mb-3 " type="password"
                            id="floatingPassword"
                            placeholder="Contraseña"
                        ></input>
                        <input type="submit"
                            className="btn btn-block btn-info"
                            value="Registrar" />
                        <p></p>
                    </form>
                    <p className="text-center">ó</p>
                    <div>
                        <button className="btn-google right" onClick={signInWithGoogle}>Sign in with google  <i class="fab fa-google"></i></button>;
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Register