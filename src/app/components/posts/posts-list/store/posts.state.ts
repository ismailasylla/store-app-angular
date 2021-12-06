import { Post } from "src/app/models/posts.model";

export interface PostsState{
  posts : Post []
}

export const initialState: PostsState = {
  posts: [
    { id: '1', title: 'Crunches', description: 'fasdfasdf' },
    { id: '2', title: 'Touch Toes', description: 'stydyrt'},
    { id: '3', title: 'Side Lunges', description: 'fghjfghj'},
    { id: '4', title: 'Burpees', description: 'fdfghdf'},
  ]
}