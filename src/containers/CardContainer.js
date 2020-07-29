import React from 'react';
import { connect } from 'react-redux';

// Components
import Card from '../components/Card';

const CardContainer = ({ tasks }) => {
  return(
    <div>
      {
        tasks.length > 0 &&
          <div>
            {
              tasks.map(item => <Card key={item.id} id={item.id} title={item.title} description={item.description} />)
            }
          </div>
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