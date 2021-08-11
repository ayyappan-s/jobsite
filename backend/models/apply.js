const mongoose=require("mongoose");
const applyschema=mongoose.Schema({
    job_id:{type:String,required:true},
    name:{type:String,required:true},
    cgpa:{type:String,required:true},
    clg_name:{type:String,required:true},
    major:{type:String,required:true},
    skills:{type:String,required:true},
    email:{type:String,required:true},
    experience:{type:String,required:true},
    hscp:{type:String,required:true},
    sslcp:{type:String,required:true},
    location:{type:String,required:true},
    age:{type:String,required:true},
    yearofpass:{type:String,required:true},
    arrear:{type:String,required:true},
    language:{type:String,required:true},
    phone:{type:String,required:true},
    resume:{type:String,required:true},
});

module.exports=mongoose.model("Applied",applyschema);
