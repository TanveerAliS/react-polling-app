import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { questions, questionsHaveError, questionsLoading } from '../src/reducers/Questions';
import { selectedQuestion } from '../src/reducers/SelectedQuestion';

const configureStore = initialState => {
  const enhancersComposition = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    })
    : compose;
  const rootReducers = combineReducers({
    questions, questionsHaveError, questionsLoading, selectedQuestion
  })
  const enhancer = enhancersComposition(applyMiddleware(thunk));
  return createStore(rootReducers, initialState, enhancer);
}

export default configureStore;