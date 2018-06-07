import { combinedReducers } from 'react-redux';
import postReducer from './postReducer';

export default combineReducers({
  posts: postReducer
});
