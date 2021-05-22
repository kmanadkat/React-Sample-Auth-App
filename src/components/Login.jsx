import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleLogin } from '../actions/auth'

function Login({dispatch, auth}) {
  if(auth === undefined)
    return <p>Loading...</p>
  else if (auth === true)
    return <Redirect to="/" />
  return (
    <div className="jumbotron">
      <div className="container">
        <h1>Welcome To Delta Auth</h1>
        <hr/>
        <p className="lead mt-4">This application is essentially a Redux State Management Todo app wrapped with protected route. Auth state in redux store will be marked as true when you click below button & you'll be redirected to Home route.</p>
        <p className="lead">Also if you have Redux Devtools installed in your browser then feel free to monitor dispatch actions & store's state.</p>
        <button type="button" className="btn btn-primary mt-3 px-4" onClick={() => dispatch(handleLogin())}>Sign In</button>
      </div>
    </div>
  )
}

const mapStateToProps = ({auth}) => ({auth})

export default connect(mapStateToProps)(Login)
