import { FormBuilder } from '@angular/forms';
import { PostService } from './../../services/post.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post: any;
  @Output() onDeletion = new EventEmitter();
  
  constructor(private router: Router, private postService: PostService, private fb:FormBuilder) {}

 

  ngOnInit(): void {}

  navigateToPostDetails() {
    this.router.navigateByUrl(`post/details/${this.post._id}`);
  }

  editPost() {
    this.router.navigateByUrl(`create-update-post/${this.post._id}`);
  }

  deletePost() {
    this.postService
      .deletePost(this.post._id, this.post.username)
      .subscribe((response) => {
        this.onDeletion.emit({ id: this.post._id });
      });
  }

  checkUser(post:any) {
    const postAuthor = post?.username?._id?.toString();
    console.log(postAuthor);
    const token: any = localStorage.getItem('token');
    const currentUser = JSON.parse(atob(token.split('.')[1]))._id?.toString();
    return postAuthor === currentUser
  }
}
