const express = require("express")
const bodyParser=require("body-parser")
const Post = require("./models/post");
const Apply = require("./models/apply");
const app = express();
const mongoose=require("mongoose");
mongoose.Promise=global.Promise;
const cors = require('cors')({origin: true});
mongoose.connect("Mongo-DB SERVER LINK")
        .then(()=>{
            console.log("Connected To Database");
        })
        .catch(()=>{
            console.log("Connection Failed");
        })
app.use(bodyParser.json());
app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin',"*");
    res.setHeader('Access-Control-Allow-Headers',"Origin,X-Requested-With,Content-Type,Accept")
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET,POST,PATCH,DELETE,OPTIONS"
    );
    next();
})


app.post("/post",(req,res,next)=>{
    
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    console.log(req.body.position,
        req.body.skills,
        req.body.experience,
      req.body.minsalary,
        req.body.maxsalary,
        req.body.company_name,
        req.body.location,
       req.body.email)
    const post=new Post({
        position_name:req.body.position,
        skills_needed:req.body.skills,
        experience_needed:req.body.experience,
        salary_min:req.body.minsalary,
        salary_max:req.body.maxsalary,
        company_name:req.body.company_name,
        location:req.body.location,
        email:req.body.email,
    });
    post.save()
        .catch((error)=>{
          console.log(error);  
        })
    res.status(201).json({
        message:"Post-Added",
    })
    console.log("Post Added");
})

app.post("/apply",(req,res,next)=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    const apply=new Apply({
        job_id:req.body.job_id,
        name:req.body.name,
        cgpa:req.body.cgpa,
        clg_name:req.body.clg_name,
        major:req.body.major,
        skills:req.body.skills,
        email:req.body.skills,
        experience:req.body.experience,
        hscp:req.body.hscp,
        sslcp:req.body.sslcp,
        location:req.body.location,
        age:req.body.age,
        yearofpass:req.body.yearofpass,
        arrear:req.body.arrear,
        language:req.body.language,
        phone:req.body.phone,
        resume:req.body.resume,
    });
    apply.save()
        .catch(error=>{
            console.log(error);
        })
    res.status(201).json({
        message:"Post-Added",
    })
    console.log("Post Added")
})

app.get("/jobs",(req, res, next)=>{
    Post.find()
        .then(document=>{
            console.log(document)
            res.status(200).json(document);
        })
        .catch(error=>{
            console.log("error")
        })
    
     
    
})
app.get("/applications",(req, res, next)=>{
    Apply.find()
         .then(document=>{
             res.status(200).json(document);
         })
         .catch(error=>{
             console.log(error)
         })
})
app.delete("posts/:id",(res,req,next)=>{
    console.log(req.params.id);
    res.status(200).json({"message":"deleted"});
})

















module.exports=app;
