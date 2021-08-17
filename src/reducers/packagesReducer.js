import * as types from 'actions/actionTypes';
import initialState from './initialState';

export default (state = initialState.packages, { type, payload }) => {
  switch (type) {
    case types.ALL_PACKAGES:
      console.log('ALL PACKAGES: ', payload);
      return {
        ...state,
        entries: payload.entries
      };
    default:
      return state;
  }
};
