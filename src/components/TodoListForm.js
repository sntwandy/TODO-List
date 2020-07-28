import React from 'react';

// Styles
import '../assets/styles/components/TodoListForm.scss';

const TodoListForm = () => {
  return(
    <div className='todo-form'>
        <label htmlFor="title">Title</label>
        <input name="title" type="text"/>

        <label htmlFor="description">Description</label>
        <textarea name="description" cols="30" rows="5"></textarea>

        <button className="form-btn">Add</button>
    </div>
  );
};

export default TodoListForm;