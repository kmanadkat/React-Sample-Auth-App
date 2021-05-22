import React, { useState } from 'react'
import { connect } from 'react-redux';
import { handleAddTodo } from '../actions/todo';

function AddTodo({dispatch}) {
  const [inputTitle, setTitle] = useState('');
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      dispatch(handleAddTodo(inputTitle));
      setTitle('');
    }}>
      <div className="row">
        <div className="col-2">
          <button className="btn btn-primary px-4" type="submit">Add Todo</button>
        </div>
        <div className="col-10">
          <input 
            type="text" 
            value={inputTitle} 
            onChange={(e) => setTitle(e.target.value)} 
            className="form-control" 
            placeholder="Add your todos here" required/>
        </div>
      </div>
    </form>
  )
}

export default connect()(AddTodo)
