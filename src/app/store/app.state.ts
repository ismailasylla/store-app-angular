import { counterReducer } from "../components/counter/store/counter.reducer";
import { CounterState } from "../components/counter/store/counter.state";
import { postsReducer } from "../components/posts/posts-list/store/posts.reducer";
import { PostsState } from "../components/posts/posts-list/store/posts.state";

export interface AppState{
  counter: CounterState,
  posts: PostsState
}

export const appReducer = {
  counter: counterReducer,
  posts: postsReducer
}