import { FETCH_QUESTION } from '../actions/actionTypes';

export const selectedQuestion = (state = {}, action) => {
  switch (action.type) {
    case FETCH_QUESTION:
      return Object.assign({}, state, action.question);
    default:
      return state;
  }
}