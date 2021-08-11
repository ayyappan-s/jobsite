import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { JobListComponent } from "./jobList/job-list.component";
import { PostCreateComponent } from "./postJob/post-create.component";
import { ApplicationsComponent } from "./applications/applications.component";
const routes:Routes=[
    { path:'',component:JobListComponent},
    { path:"create",component:PostCreateComponent},
    { path:"applications",component:ApplicationsComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}