import { combinedReducers } from 'react-redux';
import postReducer from './postReducer';

export default combinedReducers({
  posts:postReducer
});
