import React, { useState } from 'react';

export const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or the Description cannot be empty");
    } else {
      props.addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };

  return (
    <div className="container my-3  rounded shadow-sm p-4" style={{ maxWidth: '720px', backgroundColor: 'rgb(186, 193, 198)' }}>
      <h3 className="my-3 text-center" style={{ color: '#1e1e1e' }}>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label"style={{ color: '#1e1e1e' }}>Todo Title</label>
          <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label" style={{ color: '#1e1e1e' }}>Todo Description</label>
          <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" />
        </div>
        <button type="submit" className="btn btn-success w-100">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
