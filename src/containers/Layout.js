import React from 'react';

// Styles
import '../assets/styles/containers/Layout.scss';

const Layout = props => {
  return(
    <>
      <header>
        <span>TODO List</span>
      </header>
      {props.children}
    </>
  );
};

export default Layout;