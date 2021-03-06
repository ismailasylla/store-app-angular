import { Action, createReducer, on } from "@ngrx/store"
import { addPost } from "./posts.actions"
import { initialState, PostsState } from "./posts.state"


const _postReducer = createReducer(initialState, on(addPost, (state, action)=>{

  let post = {...action.post};

  post.id = (state.posts.length + 1).toString();

  return{
    ...state,
    posts: [...state.posts, post]
  }
})
);

export function postsReducer(state: PostsState | undefined, action: Action) {
  return _postReducer(state, action)
}