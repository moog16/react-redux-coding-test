import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchStudents } from './../action-creators/app';


export const App = React.createClass({

  componentWillMount() {
    this.props.fetchStudents();
  },

  render() {
    return (
      <div className='students-component'>
        <table className='students-table'>
          { this.renderStudentHeader() }
          <tbody>
            { this.renderStudents() }
          </tbody>
        </table>
      </div>
    );
  },

  renderStudentHeader() {
    return (
      <thead>
        <tr>
          <th>Id</th>
          <th>Matrícula</th>
          <th>Nombre</th>
          <th>Condición</th>
        </tr>
      </thead>
    );
  },

  renderStudents() {
    const { students } = this.props;

    if(students.isEmpty()) return;

    return (
      students.map(student => {
        return (
          <tr key={student.get('id')}>
            <td>
              { student.get('id') }
            </td>
            <td>
              { student.get('registration_number') }
            </td>
            <td>
              { `${student.get('name')} ${student.get('last_name')}` }
            </td>
            <td>
              { student.get('status') }
            </td>
          </tr>
        );
      })
    );
  }
});


function mapStateToProps(state) {
  return {
    students: state.app.get('students')
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchStudents
  }, dispatch);
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
