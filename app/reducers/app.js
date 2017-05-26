import { Map, fromJS } from 'immutable';

const initialData = fromJS({
  students: []
});

export default function (state = initialData, action = {}) {
  switch (action.type) {
    case 'SET_STUDENTS':
      return state.set('students', fromJS(action.students));
    default:
      return state;
  }
}
