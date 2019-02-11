import { INCREMENT_QUESTION, DECREMENT_QUESTION } from './actions'
import {questions} from '../../questions';

const initialState = {
  currentPage: 0,
  lastPage: questions.length + 1,
  yes: 0,
};

export default (state = initialState, action) => {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case INCREMENT_QUESTION:
       action.payload === 'yes' ? newState.yes ++ : null;
       newState.currentPage ++;
      return newState;
    case DECREMENT_QUESTION:
      if (newState.currentPage > 0) {
        newState.currentPage --;
      };
      return newState;
    default:
      return state;
  }
};
