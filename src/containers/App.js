import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components
import Layout from './Layout';
import Home from '../components/Home';
import NotFound from '../components/NotFound';

const App = () => {
  return(
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;