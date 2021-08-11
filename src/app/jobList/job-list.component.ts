import { Component,Input,OnInit } from "@angular/core";
import { JobListService } from "../job-list.service";
import { NgForm } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { AngularFireStorage } from "@angular/fire/storage";
import { Observable } from "rxjs";
@Component({
    selector:"app-job-list",
    templateUrl:'./job-list.component.html',
    styleUrls:['./job-list.component.css'],
})
export class JobListComponent{
    

    // posts=[
    //     {position:"SoftWare Engineer",company_name:"Tata Consultancy Services",minsalary:4.5,maxsalary:5.5,skills:["Python","Java","C","C++"],experience:5,location:"PAN India"},
    //     {position:"SoftWare Developer",company_name:"Tata Consultancy Services",minsalary:4.5,maxsalary:5.5,skills:"java",experience:5,location:"PAN India"}

    // ]
    @Input() posts:any;
    
    
    
    constructor(private http:HttpClient,private storage:AngularFireStorage){ 
       
    }
    isFileUploading=false;
    isLoading=true;
    isShow=false;
    display="none";
    currentid="";
    idAttr="";
    phone="";
    downloadlink=""
    state="Upload PDF";
    btnState=true;
    ngOnInit(){
        this.http.get<any>("http://localhost:3000/jobs").subscribe(data=>{
            this.posts=data;
            this.isLoading=false;
            console.log(data);
        })
    }

    OnApply(application:NgForm){
        if(application.invalid){
            return;
        }
        const applyForm={
            job_id:this.idAttr,
            name:application.controls.name.value,
            cgpa:application.controls.cgpa.value,
            clg_name:application.controls.clg_name.value,
            major:application.controls.major.value,
            skills:application.controls.skills.value,
            email:application.controls.email.value,
            experience:application.controls.experience.value,
            hscp:application.controls.hscp.value,
            sslcp:application.controls.sslcp.value,
            location:application.controls.location.value,
            age:application.controls.age.value,
            yearofpass:application.controls.yearofpass.value,
            arrear:application.controls.arrear.value,
            language:application.controls.language.value,
            phone:application.controls.phone.value,
            resume:this.downloadlink,
        }
       
        console.log(applyForm);
        this.http.post<{message:string}>("http://localhost:3000/apply",applyForm).subscribe(data=>{

        });
        this.showForm()
        application.resetForm();
    }
    showForm(){
        this.display="block";
        this.isShow=!this.isShow;
    }
    setId(event:any){
        var target = event.target || event.srcElement || event.currentTarget;
        this.idAttr=target.attributes.id.value;
        console.log(this.idAttr);
        console.log("Im CAlled");
       
    }
    setPhone(event:any){
        var target = event.target || event.srcElement || event.currentTarget;
        console.log(target.value)
        this.phone=target.value;
        this.btnState=false;

    }

    async uploadFile(event:any){
        this.isFileUploading=true;
        console.log("File Uploading");
        const file=event.target.files[0];
        const filePath=this.idAttr+"/"+this.phone+".pdf";
        const task=this.storage.upload(filePath,file);
        const ref=this.storage.ref(filePath);
        await task;
        this.downloadlink=await ref.getDownloadURL().toPromise();
        console.log(this.downloadlink);
        console.log(event)
        this.state="Uploaded"
        this.btnState=true;
        this.isFileUploading=false;
        
    }









}