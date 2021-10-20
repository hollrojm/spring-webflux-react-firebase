import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export const PublicNavbar = () => (
  <Fragment>
    <nav>
      <section>
        <Link to="/">Home</Link>
        <Link to="/questions">Questions</Link>
      </section>
    </nav>
    <div class="logo-img">
      <img src="/logo.png" alt="logo" />
    </div>
  </Fragment>
)

export const PrivateNavbar = () => (
  <Fragment>
  <nav>
    <section>
      <Link to="/">Home</Link>
      <Link to="/questions">Questions</Link>
      <Link to="/new">New</Link>
      <Link to="/list">List</Link>
    </section>
  </nav>
  <div class="logo-img">
        <img src="/logo.png" alt="logo" />
      </div>
  </Fragment>
)
