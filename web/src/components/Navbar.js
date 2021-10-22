import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../App';


function SignOut({ dispatch }) {
  return (
    auth.currentUser && (
      <button
        className=" margin-left btn btn-outline-danger  my-2 my-sm-0"
        onClick={() => {
          // dispatch(logout())
          auth.signOut();
        }}
      >
        Sign out
      </button>
    )
  );
}

export const PublicNavbar = () => (
  <Fragment>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-5">
      <section>
        <Link to="/">Home</Link>
        <Link to="/questions">Questions</Link>
        <Link to="/login">Login</Link>
      </section>
      
    </nav>
    <div class="logo-img">
      <img src="/logo.png" alt="logo" />
    </div>
  </Fragment>
)

export const PrivateNavbar = ({dispatch}) => (
  <Fragment>
  <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <section >
      <Link to="/">Home</Link>
      <Link to="/questions">Questions</Link>
      <Link to="/new">New</Link>
      <Link to="/list">List</Link>
      <SignOut dispatch={dispatch} />
    </section>
  </nav>
  <div class="logo-img">
        <img src="/logo.png" alt="logo" />
      </div>
      
  </Fragment>
)


