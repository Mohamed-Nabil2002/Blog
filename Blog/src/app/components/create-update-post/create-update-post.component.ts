import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-update-post',
  templateUrl: './create-update-post.component.html',
  styleUrls: ['./create-update-post.component.css']
})
export class CreateUpdatePostComponent implements OnInit {

  post = {
    title: "",
    description: ""
  }
  postId:any;
  updateMode:any = false;
  constructor(private postService:PostService,private activatedRoute:ActivatedRoute, private fb:FormBuilder) { }

  formGroup: any = this.fb.group({
    password: ['', [
      Validators.required,
      
    ]],
    username: ['', [
      Validators.required,
    ]]
  });


  ngOnInit(): void {
    this.postId = this.activatedRoute.snapshot.paramMap.get("id");
    if(this.postId)
    {
      this.updateMode = true;
      this.getPostById();
    }
  }

  getPostById(){
    this.postService.getPostById(this.postId).subscribe((response:any) =>{
      this.post.title = response.title;
      this.post.description = response.description;
    })
  }

  createPost(){
    this.postService.createPost(this.post).subscribe(response => {
     console.log(response);
    })
  }

  editPost(){
    this.postService.updatePost(this.postId,this.post).subscribe(response=>{
      console.log(response); 
     })
  }
}
