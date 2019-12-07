import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from "../actions/actions";

export const notificationReducer = function (state = {
  showing: false,
  notifyText: ''
}, action) {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return { ...state, showing: true, notifyText: action.text }
    case HIDE_NOTIFICATION:
      return { ...state, showing: false, notifyText: '' }
    default:
      return state;
  }

};