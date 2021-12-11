import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      const id = params.get('id')
      // console.log(params.get('id'))
    })
  }

  onUpdatePost(){
    // if(!this.postForm.valid){
    //   return;
    // }
    // console.log(this.postForm.value)
    // const post: Post ={
    //   title: this.postForm.value.title,
    //   description: this.postForm.value.description
    // }
    // this.store.dispatch(addPost({post}))
  }
}
