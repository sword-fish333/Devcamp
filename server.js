const express=require('express');
const dotenv=require('dotenv');

//load config file
dotenv.config({path:'./config/config.env'});

const app=express();
app.get('/api/v1/courses',(req,res)=>{
res.status(200).json({status:true,msg:'Show all courses'})
});
app.get('/api/v1/courses/:id',(req,res)=>{
    res.status(200).json({success:true,msg:`Get course ${req.params.id}`})
});

app.post('/api/v1/courses',(req,res)=>{
   res.status(200).json({success:true,msg:"Course created"})
});


app.put('/api/v1/courses/:id',(req,res)=>{
    res.status(200).json({success:true,msg:`Course updated ${req.params.id}`})
});

app.delete('/api/v1/courses/:id',(req,res)=>{
    res.status(200).json({success:true,msg:`Course deleted ${req.params.id}`})

});
const PORT=process.env.PORT || 5000;

app.listen(PORT,console.log(`Server is running in ${process.env.NODE_ENV} mode   on port ${PORT}`));