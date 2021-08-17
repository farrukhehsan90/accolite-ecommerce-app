import * as types from 'actions/actionTypes';
import produce from 'immer';
import initialState from './initialState';

export default produce((draft, { type, payload }) => {
  switch (type) {
    case types.LOGIN:
      return (draft = { payload });
  }
}, initialState.loginUser);

// export default (state = initialState.loginUser, { type, payload }) => {
//   switch (type) {
//     case types.LOGIN:
//       return {
//         ...state,
//         payload
//       };
//     case types.LOGOUT:
//       return {};
//     default:
//       return state;
//   }
// };
