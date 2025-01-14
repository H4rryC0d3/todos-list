import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto",
  }

  return (
    <div className="container my-3" style={myStyle}>
      <h3 className="my-3 text-center text-white">Todos List</h3>
      {props.todos.length === 0 ? (
        <div className="alert alert-info" role="alert">
          No Todos to display
        </div>
      ) : (
        props.todos.map((todo) => {
          return (
            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
          );
        })
      )}
    </div>
  );
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Todos;
