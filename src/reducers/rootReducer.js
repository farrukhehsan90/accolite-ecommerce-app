import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import packagesReducer from './packagesReducer';
import categoryNameReducer from './categoryNameReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  packages: packagesReducer,
  currentCategoryName: categoryNameReducer
});

export default rootReducer;
