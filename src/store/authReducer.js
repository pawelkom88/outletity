import {actionObj} from "./actions";

export default function authReducer(state, action) {
  switch (action.type) {
    case actionObj.login:
      return {...state, user: action.payload};

    case actionObj.logout:
      return {...state, user: null};

    case actionObj.authIsReady:
      return {user: action.payload, authIsReady: true};

    default:
      return state;
  }
}
