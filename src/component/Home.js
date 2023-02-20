import React from 'react'
import {Link} from "react-router-dom"
function Login() {
 
  return (
    <div>
          <Link to='/'>
          <h1>Home Page</h1>
         </Link>
          <Link to={"/allposts"}>All Post</Link>
          <Link to={"/register"}>Register</Link>
          <Link to={"/login"}>Login</Link>
          <Link to={"/create"}>Create Post</Link>

        </div>
  )
}

export default Login