import { FETCH_POST, NEW_POST } from './types';

export function fetchPost() {
  return function(dispatch){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => dispatch({
      type: FETCH_POST,
      payload: post
    }));
  }
  }
}
