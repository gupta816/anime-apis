const mongoose =require('mongoose');
mongoose.connect("mongodb://0.0.0.0:27017/animelist",{
                useNewUrlParser:true,
                useUnifiedTopology:true})
                .then(()=>console.log("connection successfull"))
                .catch((err)=>console.log("errotr occured no connection: ", err))