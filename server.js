const express = require('express');
const mongoose = require('mongoose');
const users = require('./models/user');
const multer = require('multer');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded());

mongoose.connect('mongodb://localhost:27017/user_db').then((result)=>console.log(result)).catch((err)=>console.log(err));

// const storage = multer.diskStorage({
//     destination: function(req , file,callback){
//         callback(null,'./public/uploads/images');
//     },
//     filename:function(req,file,callback){
//         callback(null,Date.now() + file.originalname);
//     },
// });

// const upload = multer({

//     storage:storage,
//     limits:{
//         fieldSize:600*800*3,
//     }
// })
app.get(['/', '/home'], auth, (req, res)=>{
    res.render('index');
});
app.post('/add_user', async (req, res)=>{
    // console.log(req.file)
    const user = new users({
        full_name: req.body.full_name,
        user_name: req.body.user_name,
        age: req.body.age,
        email: req.body.email,
        address: req.body.address,
        image: req.body.image,
        user_cv: req.body.user_cv
    })
    try{
        user = await user.save();
        res.render('user_info', {info: req.body});
        res.end();
    }
   catch{
       console.log("err");
   }
});
function auth(req, res, next){
    next();
}
app.listen(33000, console.log('listening on port 8000'));