import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../App';


function SignOut({ dispatch }) {
  return (
    auth.currentUser && (
      <button
        className="button right"
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
    <nav>
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
  <nav>
    <section>
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


