import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


export const App = React.createClass({

  componentWillMount() {
  },

  render() {
    return (
      <div>
        
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
