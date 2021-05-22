import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

function ProtectRoute(props) {
  if(props.auth === undefined)
    return <p>Loading...</p>
  else if(props.auth === true) 
    return <Fragment>{props.children}</Fragment>
  return <Redirect to="/login" />
}

const mapStateToProps = ({auth}) => ({auth})

export default connect(mapStateToProps)(ProtectRoute)
