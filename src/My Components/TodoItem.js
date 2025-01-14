import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ todo, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      onDelete(todo);
    }
  };

  return (
    <>
      <div className="todo-item bg-light p-3 rounded shadow-sm mb-3">
        <h4 className="text-black">{todo.title}</h4>
        <p>{todo.desc}</p>
        <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
      </div>
      <hr />
    </>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TodoItem;
