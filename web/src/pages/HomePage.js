import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Register from './Register'



const HomePage = ({children}) => (
  <Fragment>
  <section>
    <h1>Home</h1>
    <div>
      {children}
    </div>
    <p>welcome to the question and answer app.</p>
    <Link to="/questions" className="button">
      View Questions
    </Link>
    <Register></Register>
  </section>

  </Fragment>
)
export default HomePage
