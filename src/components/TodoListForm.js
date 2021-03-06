import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createTask } from '../actions'

// Styles
import '../assets/styles/components/TodoListForm.scss';

const TodoListForm = props => {

  const [task, setTask] = useState({});

  const handleCreateTask = () => {
    const $input = document.querySelectorAll('.input');

    if ($input[0].value == "" || $input[1].value == "") {
      return alert('You need to fill the inputs');
    };
    let counter = 0;
    let id = 0;
    props.tasks.map( item => {
      counter++;
      if (counter >= props.tasks.length) {
        return id = item.id + 1;
      };
    });
    props.createTask({
      "id": id,
      "title": task.title,
      "description": task.description,
      "completed": false,
    });
    $input[0].value = "";
    $input[1].value = "";
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
        <input id="input-title" className="input" onChange={handleInputTitle} name="title" type="text"/>

        <label htmlFor="description">Description</label>
        <textarea id="input-textarea" className="input" onChange={handleInputDescription} name="description" cols="30" rows="3"></textarea>

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