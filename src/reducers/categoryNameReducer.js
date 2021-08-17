import * as types from 'actions/actionTypes';
import initialState from './initialState';

export default (
  state = initialState.currentCategoryName,
  { type, payload }
) => {
  switch (type) {
    case types.CATEGORY_NAME:
      console.log('CATEGORY_NAME: ', payload);
      return {
        ...state,
        currentCategory: payload
      };
    default:
      return state;
  }
};
