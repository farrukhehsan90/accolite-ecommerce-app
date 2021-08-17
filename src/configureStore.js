import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/rootReducer';
import Thunk from 'redux-thunk';

const configureStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(Thunk))
);

export default configureStore;
