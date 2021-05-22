import React from 'react'
import { connect } from 'react-redux';
import { handleDeleteTodo, handleToggleTodo } from '../actions/todo';

function TodoItem({todo, dispatch}) {
  const {title, completed, id} = todo;
  return (
    <li className="list-group-item p-0 border mt-3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-1 bg-light d-flex align-items-center justify-content-center py-3">
            <div className="form-group form-check m-0" style={{position: "relative", bottom: 6, right: 15}}>
              <input 
                type="checkbox"
                className="form-check-input m-0"
                checked={completed} 
                onChange={(e) => dispatch(handleToggleTodo(id))}/>
            </div>
          </div>
          <div className="col-10 d-flex align-items-cente py-3">
            <p className="m-0 p-0" style={{fontSize: 16}}>{title}</p>
          </div>
          <div className="col-1 bg-light d-flex align-items-center justify-content-center">
            <button className="btn btn-link text-danger" onClick={() => dispatch(handleDeleteTodo(id))} >❌</button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default connect()(TodoItem)
