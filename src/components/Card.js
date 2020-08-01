import React from 'react';
import { connect } from 'react-redux';
import { deleteTask } from '../actions';

const Card = ({ id, title, description, deleteTask }) => {

  const handleClick = (id) => {
    deleteTask(id);
  };

  return(
    <div>
      <span>ID: {id}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={ () => handleClick(id)}>Delete</button>
    </div>
  );
};

const mapDispatchToProps = {
  deleteTask,
}

export default connect(null, mapDispatchToProps)(Card);