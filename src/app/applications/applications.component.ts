import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
    selector:"app-applications",
    templateUrl:"./applications.component.html",
    styleUrls:["./applications.component.css"],
})
export class ApplicationsComponent{
    isShow=false;
    src="";
    display="none";
    applications:any;
    jobs:any;
    selectedValue:any;
    idAttr="";
    constructor(private http:HttpClient){}
    valueChange(){
        this.applications=[]
        this.http.get<any>("http://localhost:3000/applications").subscribe(data=>{
        console.log(this.selectedValue.id);    
        for(let a of data){
                if(this.selectedValue._id===a.job_id){
                    this.applications.push(a);
                }
            }
            
            console.log(this.applications);
           
        })
        console.log(this.selectedValue);
    }
    ngOnInit() {

        this.http.get<any>("http://localhost:3000/jobs").subscribe(data=>{
            this.jobs=data;
            
        })

       
    }
    closeResume(){
        console.log("Running");
        this.display="none";
    }
    viewResume(event:any){
        this.display="block";
        this.isShow=true;
        var target = event.target || event.srcElement || event.currentTarget;
        this.src=target.attributes.id.value;
        var target = event.target || event.srcElement || event.currentTarget;
        this.idAttr=target.attributes.id.value;
        console.log(this.idAttr);
        console.log("Im CAlled");
    }


}