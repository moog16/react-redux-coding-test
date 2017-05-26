export function setStudents(students) {
  return {
    type: 'SET_STUDENTS',
    students
  };
}


export function fetchStudents(locale, clientLpId) {
  return (dispatch, getState) => {
    fetch('http://andreihelo-restful-api.herokuapp.com/students').then(res => {
      res.json().then(data => {
        console.log(data);
        dispatch(setStudents(data));
      });
    });
  };
}
