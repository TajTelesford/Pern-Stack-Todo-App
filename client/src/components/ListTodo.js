import React, { useState, useEffect } from 'react'
import EditTodos from './EditTodos';


const ListTodo = () => {

  const [ todos, setTodos ] = useState([]);

  const getTodos = async () => {

    try {
      const res = await fetch("http://localhost:5000/todos");
      const jsonData = await res.json();

      setTodos(jsonData);
    } catch (err) {
      console.log(err);
    }

  }

  const deleteTodos = async (id) => {

    try {

      await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      
      setTodos(todos.filter(
        todo => todo.todo_id !== id
      ));
    } catch (err) {
      console.log(err);
    }

  }

  useEffect(() => {
    getTodos();
  }, [])

  return (
    <div>
    <table className="table mt-5 text-center">
      <thead>
        <tr>
          <th>Description</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {todos && todos.map((todo) => {
          return (
            <tr key={todo.todo_id} >
              <td>{todo.description}</td>
              <td>
                <EditTodos todo={todo} />
              </td>
              <td>
                <button 
                  className='btn btn-danger' 
                  onClick={() => deleteTodos(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
              
            </tr>
          )
        })}
      </tbody>
   </table>
  </div>
  )
}

export default ListTodo