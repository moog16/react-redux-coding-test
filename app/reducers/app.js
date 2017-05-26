import { Map, fromJS } from 'immutable';

const initialData = fromJS({
});

export default function (state = initialData, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}
