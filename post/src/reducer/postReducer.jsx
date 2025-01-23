import {useReducer} from 'react';

export const postActions = {
 ADD_POST: "ADD_POST",
 CHANGE_POST: "CHANGE_POST",
 DELETE_POST: "DELETE_POST",
}

let id = 0;

const initialPost = {
 id: id++,
 content: ""
}

const initialState = {
 posts: [],
 post: initialPost,
 error: ""
};

const postReducer = (state, action) => {
 switch (action.type) {
  
  case postActions.CHANGE_POST:
   return {
    ...state,
    post: {
     ...state.post,
     content: action.payload
    }
   }
   
  case postActions.ADD_POST:
   return {
    ...state,
    posts: state.posts.concat(state.post),
    post: {
     id: id++,
     content: ""
    }
   }
   
  case postActions.DELETE_POST:
   return {
    ...state,
    posts: state.posts.filter(post => post.id !== action.payload)
   }
  
  default:
   return state;
 }
};

const usePostReducer = () => useReducer(postReducer, initialState);

export default usePostReducer;