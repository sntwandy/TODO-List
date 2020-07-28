import React from 'react';

// Styles
import '../assets/styles/components/Home.scss';

// Components
import TodoListForm from './TodoListForm';


const Home = () => {
  return(
    <main>
      <TodoListForm />
    </main>
  );
};

export default Home;