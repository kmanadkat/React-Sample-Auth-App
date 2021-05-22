import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

import {handleLogout} from '../../actions/auth'

function Navbar(props) {
  const {auth, dispatch} = props;
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container px-3 py-2">
        <Link className="navbar-brand" to="/">Delta Auth</Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            {auth === undefined
            ? <span className="text-white">Loading...</span>
            : <Fragment>
                {auth !== true && <NavLink className="nav-link ml-4" exact to="/login">Login</NavLink>}
                {auth === true && <NavLink className="nav-link ml-4" exact to="/">Home</NavLink>}
                <NavLink className="nav-link ml-4" to="/about">About</NavLink>
                {auth === true && <button className="nav-link ml-4 btn py-1" onClick={() => dispatch(handleLogout())}>Logout</button>}
              </Fragment>
            }
          </div>
        </div>
      </div>
    </nav>
  )
}

const mapStateToProps = ({auth}) => ({auth})

export default connect(mapStateToProps)(Navbar);
