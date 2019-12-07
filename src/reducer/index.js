import { combineReducers } from 'redux';
import { todosReducer } from './todosReducer';
import { notificationReducer } from './notificationReducer';

export default combineReducers({ todosReducer, notificationReducer });