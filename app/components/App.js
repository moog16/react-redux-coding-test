import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export const App = React.createClass({

  render() {
    return (
      <div className='students-component'>
        Hello World!
      </div>
    );
  }
});


function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch);
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
