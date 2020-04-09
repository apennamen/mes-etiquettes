import { createStore, combineReducers } from 'redux';
import { reducer as quizz } from './quizzReducer.js';
import { reducer as settings } from './settingsReducer.js';

export const store = createStore(
  combineReducers({ quizz, settings }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
