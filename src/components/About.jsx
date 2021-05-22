import React from 'react'

function About({history}) {
  return (
    <div className="jumbotron">
      <div className="container">
        <h1>About</h1>
        <hr/>
        <p className="lead mt-4">This application is essentially a TODO app wrapped with dummy auth or protected route. I have built this for medium blog post where I explain How to deploy React Redux Projects on Google Firebase.</p>
        <p className="lead mt-3">To save some time & remain more focused on the topic, this application can be downloaded from github url shared in blog post for following along.</p>
        <button type="button" className="btn btn-primary mt-3" onClick={() => history.push("/")}>Awesome!</button>
      </div>
    </div>
  )
}

export default About
