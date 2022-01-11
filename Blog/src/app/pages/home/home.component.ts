import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts = []
  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts(){
    this.postService.getAllPosts().subscribe((items:any) =>{
      this.posts = items;
    })
  }

  onDeletionHandler(event:any)
  {
    if(event){
      this.getAllPosts();
    }
  }
}
