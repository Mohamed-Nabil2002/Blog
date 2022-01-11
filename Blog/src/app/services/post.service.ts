import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseURL = "http://localhost:3000/api"
  constructor(private http:HttpClient) { }

  getAllPosts(){
    return this.http.get(this.baseURL+"/posts")
  }

  getPostById(id:any  ) {
    return this.http.get(this.baseURL+`/posts/${id}`)
  }

  createPost(requestBody:any) {
    return this.http.post(this.baseURL+`/posts`,requestBody);
  }
  updatePost(id:any,requestBody:any) {
    return this.http.put(this.baseURL+`/posts/${id}`,requestBody);
  }
  deletePost (id:any,username:any) {
    const options = {
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      }),
      
    }
    return this.http.delete(this.baseURL+`/posts/${id}`,options);
    // return this.http.request("DELETE",this.baseURL+`/posts/${id}`,options)
  }
}
