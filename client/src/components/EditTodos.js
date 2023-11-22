import React, { useState } from 'react'

const EditTodos = ({ todo }) => {

  const [ description, setUpdatedTodo ] = useState(todo.description);

  const updateTodo = async (e) => {
    e.preventDefault();
    try {
      
     

      const body = { description };
      console.log(body);
      await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      })

      window.location = "/";
    } catch (err) {
      console.log(err);
    }

  }

  const changeDescription = (e) => {
    e.preventDefault();
    setUpdatedTodo(e.target.value);
    console.log(description);

  }

  return (
    <>
      <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${todo.todo_id}`}>
        Edit
      </button>


      <div className="modal" id={`id${todo.todo_id}`}
        onClick={() => setUpdatedTodo(todo.description)}
      >
      <div className="modal-dialog">
        <div className="modal-content">
        
          
          <div className="modal-header">
            <h4 className="modal-title">Edit Todo</h4>
            <button type="button" className="close" data-dismiss="modal" 
              onClick={() => setUpdatedTodo(todo.description)}
            >&times;</button>
          </div>
          
          
          <div className="modal-body">
            <input 
              type='text' 
              className='form-control'
              value={description} 
              onChange={changeDescription}
            />
          </div>
          
          
          <div className="modal-footer">
          <button
            type="button" 
            className="btn btn-warning" 
            data-dismiss="modal"
            onClick={e => updateTodo(e)}
           >
            Edit
          </button>
            <button type="button" className="btn btn-danger" data-dismiss="modal"
              onClick={() => setUpdatedTodo(todo.description)}
            >
            Close</button>
          </div>
          
        </div>
      </div>
    </div>
  </>
  )
}

export default EditTodos