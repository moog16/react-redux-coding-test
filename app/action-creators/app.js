export function fetchStudents() {
  return (dispatch, getState) => {
    fetch('http://andreihelo-restful-api.herokuapp.com/students').then(res => {
      res.json().then(students => {
        console.log(students);
      });
    });
  };
}
