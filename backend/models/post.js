const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
   
    position_name:{type:String,required:true},
    skills_needed:{type:String,required:true},
    experience_needed:{type:String,required:true},
    salary_min:{type:Number,required:true},
    salary_max:{type:Number,required:true},
    company_name:{type:String,required:true},
    location:{type:String,required:true},
    email:{type:String,required:true},
});

module.exports=mongoose.model("Post",postSchema);