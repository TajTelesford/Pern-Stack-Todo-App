import React, { useState } from 'react'

const InputTodos = () => {

  const [ description, setDescription ] = useState('');

  const handleInput = (e) => {
    setDescription(e.target.value);
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      setDescription("");
      window.location = "/";
    } catch (err) {
      console.log(err.message);
    }

  }

  return (
    <div>

      <h1 className='text-center mt-5' >
        Todos List
      </h1>

      <form className='d-flex mt-5' onSubmit={onFormSubmit} >
        <input 
          type='text' 
          className='form-control'
          value={description}
          onChange={handleInput}
        />
        <button className='btn btn-success'>Add Todo</button>
      </form>

    </div>
  )
}

export default InputTodos