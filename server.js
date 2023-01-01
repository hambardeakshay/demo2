const express=require('express');
const path=require('path');
const app=express();
const fs=express('fs');
app.use(express.static(path.join(__dirname,'public')));
app.get('/', (req,res)=>
{
    res.sendFile(path.join(__dirname,'/index.html'));
    

});
app.get('about_us',(req,res)=>
{
    console.log("calling function");
    var person={firstName:"akshay",lastName:"hambarde"};
    res.send(person);

});
app.listen(4000,()=>
{
    console.log("server running at port 4000");

})
