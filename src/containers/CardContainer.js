import React from 'react';
import { connect } from 'react-redux';

// Components
import Card from '../components/Card';

// Styles
import '../assets/styles/containers/CardContainer.scss';

const CardContainer = ({ tasks }) => {
  return(
    <div className="card-container">
      {
        tasks.length > 0 &&
              tasks.map(item => <Card key={item.id} id={item.id} title={item.title} description={item.description} />)
      }
    </div>
  );
};

const mapStateToProps = state => {
  return {
    tasks: state.tasks,
  };
};

export default connect(mapStateToProps, null)(CardContainer);