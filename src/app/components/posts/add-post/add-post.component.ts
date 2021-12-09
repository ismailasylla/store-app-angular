import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/posts.model';
import { AppState } from 'src/app/store/app.state';
import { addPost } from '../posts-list/store/posts.actions';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  postForm!: FormGroup

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required, Validators.minLength(6)
      ]),
      description: new FormControl(null, [
        Validators.required, Validators.minLength(10)
      ])
    })
  }

  // titleValidationErrors (){
  //   const titleErrors = this.postForm.get('title')
  //   if(titleErrors?.touched && !titleErrors?.valid){
  //     if(titleErrors?.errors?.required){
  //       return 'Title is required.'
  //     }else if(titleErrors?.errors?.minLength){
  //       return 'Title should be of minimum 3 characters.'
  //     }
  //   }
  // }

  // descriptionValidationErrors(){
  //   const descriptionErrors = this.postForm.get('description')
  //   if(descriptionErrors?.touched && !descriptionErrors.valid){
  //     if(descriptionErrors?.errors?.required){
  //       return 'Description is required'
  //     }else if(descriptionErrors?.errors?.minLength){
  //       return 'Description should be of minimum 10 characters.'
  //     }
  //   }
  // }
  

  addPost(){
    if(!this.postForm.valid){
      return;
    }
    console.log(this.postForm.value)
    const post: Post ={
      title: this.postForm.value.title,
      description: this.postForm.value.description
    }
    this.store.dispatch(addPost({post}))
  }
}
