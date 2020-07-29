import React from 'react';

// Styles
import '../assets/styles/components/Home.scss';

// Components
import TodoListForm from './TodoListForm';
import CardContainer from '../containers/CardContainer';

const Home = () => {
  return(
    <main>
      <TodoListForm />
      <CardContainer />
    </main>
  );
};

export default Home;