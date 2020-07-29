import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createTask } from '../actions'

// Styles
import '../assets/styles/components/TodoListForm.scss';

const TodoListForm = props => {

  const [task, setTask] = useState({});

  const handleCreateTask = () => {
    props.createTask({
      "id": props.tasks.length + 1,
      "title": task.title,
      "description": task.description,
    });
  };

  const handleInputTitle = (e) => {
    setTask({
        ...task,
        title: e.target.value,
      });
  };

  const handleInputDescription = (e) => {
    setTask({
      ...task,
      description: e.target.value,
    })
  };

  return(
    <div className='todo-form'>
        <label htmlFor="title">Title</label>
        <input onChange={handleInputTitle} name="title" type="text"/>

        <label htmlFor="description">Description</label>
        <textarea onChange={handleInputDescription} name="description" cols="30" rows="5"></textarea>

        <button className="form-btn" onClick={() => handleCreateTask()}>Add</button>
    </div>
  );
};

const mapDispatchToProps = {
  createTask,
};

const mapStateToProps = state => {
  return {
    tasks: state.tasks,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListForm);