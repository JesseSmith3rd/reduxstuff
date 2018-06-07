<<<<<<< HEAD
import { combinedReducers } from 'react-redux';
import postReducer from './postReducer';

export default combinedReducers({
  posts:postReducer
=======
<<<<<<< HEAD
import { combineReducers } from 'redux';
import postReducer from './postReducers';

export default combineReducers({
  posts: postReducer
=======
import { combineReducers } from "redux";
import postReducer from "./postReducers";

export default combineReducers({
  posts:postReducer
>>>>>>> development
>>>>>>> 139309cac82713bfe71dc3da7d9db5d7cd8fec7c
});
