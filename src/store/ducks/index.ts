import { combineReducers } from 'redux';

import todosReducer from './todos.duck';

import exampleReducer from './example.duck';

export default combineReducers({
  exampleReducer,
  todosReducer,
});
