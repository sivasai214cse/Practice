const express=require("express");
const bodyparsesr=require("body-parser");
const http=require("https");
const axios=require("axios");
//using it
const app=express();
app.use(express.static("public"));
app.use(bodyparsesr.urlencoded({extended:true}));



//signup page
app.get("/",function(req,res)
{
    res.sendFile(__dirname+"/Signup.html")
});


//signup page post method
app.post("/",function(req,res)
{
    var fname=req.body.fname;
    var lname=req.body.lname;
    var email=req.body.email;
    console.log(fname+" "+lname+" and the mail id is "+email);

    // axios.post('/user', {
    //     firstName: 'Fred',
    //     lastName: 'Flintstone'
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    var datam={
         
            members:[
                {
                email_address:email,
                status:"Subcribed",
                merge_feilds:
                {
                    FNAME:fname,
                    LNAME:lname
                }
                }
            ]   
    }

    

});


app.listen(3000,function()
{
    console.log("server is Running");
})

//API 7d8f56a50558a064de28c62ba9e03193-us21
// uid  4a598d03ef