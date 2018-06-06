import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
  items: [],
  item: {}
}

export default function(state = initialState, action) {
<<<<<<< HEAD
  switch (action.type) {
=======
  switch(action.type){
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      }
>>>>>>> development
    default:
      return state;
  }
}
