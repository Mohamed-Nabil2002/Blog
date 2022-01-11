import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postId: any;
  post:any;
  constructor(private activatedRoute: ActivatedRoute, private postService:PostService) { }

  ngOnInit(): void {
    this.postId = this.activatedRoute.snapshot.paramMap.get("id")
    this.getPostById();
  }

  getPostById(){
    this.postService.getPostById(this.postId).subscribe(response =>{
      console.log(response);
      this.post = response;
    })
  }


}
