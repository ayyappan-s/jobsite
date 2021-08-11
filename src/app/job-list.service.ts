import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobListService {
 
  constructor(private http:HttpClient) { }
  posts:any;
  lis=[];
  getPosts(){
    this.posts= this.http.get<any>("http://localhost:3000/posts").subscribe(data=>{
    console.log(data.post)  
    this.posts=data.post;
    })
    console.log("IAM CALLED")
    console.log(this.posts)
    return this.posts
  }
  

}
