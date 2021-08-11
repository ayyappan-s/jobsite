import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
const BACKEND_URL="http://localhost:3000";
@Component({
    selector:"app-post-create",
    templateUrl:"./post-create.component.html",
    styleUrls:['./post-create.component.css'],
})
export class PostCreateComponent{
   
    constructor(private http:HttpClient){}
    postForm={
        position_name:"",
        skills_needed:"",
        experience_needed:"",
        salary_min:"",
        salary_max:"",
        company_name:"",
        location:"",
        email:""
    }
    error=""
    onPostJob(postForm:NgForm){
        if(postForm.invalid){
            return;
        }
        console.log(postForm.controls.position_name.value);
        const post= {
            id:null,
            position:postForm.controls.position_name.value,
            company_name:postForm.controls.company_name.value,
            minsalary:postForm.controls.salary_min.value,
            maxsalary:postForm.controls.salary_max.value,
            skills:postForm.controls.skills_needed.value,
            experience:postForm.controls.experience_needed.value,
            location:postForm.controls.location.value,
            email:postForm.controls.email.value
        }
        console.log(post);
        console.log("POST FORM")
        console.log(postForm);
        
        this.http.post<{message:string}>(BACKEND_URL+"/post",post).subscribe(data=>{
            
        });
       postForm.resetForm();
    }
}