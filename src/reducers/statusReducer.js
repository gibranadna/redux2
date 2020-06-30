import { SET_STATUS } from "../actions/type";

const initilaState = "";
function rootReducer(state = initilaState, actions) {
  switch (actions.type) {
    case SET_STATUS:
      return actions.payload;

    default:
      return state;
  }
}
export default rootReducer;