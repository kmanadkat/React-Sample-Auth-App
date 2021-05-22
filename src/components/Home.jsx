import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';

function Home({todos}) {
  return (
    <Fragment>
      <div className="jumbotron">
        <div className="container">
          <h1>Home - Track Todos</h1>
          <hr/>
          <p className="lead mt-4">This is a classic & minimilist Todo app. Todos state is being managed by Redux. Also this is first time I am using hooks, I initially learnt react with Class components for managing state :)</p>
        </div>
      </div>
      <div className="container">
        <AddTodo />
        <ul className="list-group mt-3 pt-3">
          {Object.keys(todos).map(id => <TodoItem key={id} todo={todos[id]} />)}
        </ul>
      </div>
    </Fragment>
  )
}

const mapStateToProps = ({todos}) => ({todos})

export default connect(mapStateToProps)(Home)
