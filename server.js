let express=require('express');
let app=express();
const middle=function (req, res, next){
    const d = new Date();
    let day = d.getDay();
    let hour=d.getHours();
    if(day===0||day===6 && hour<1||hour>20){
        res.send("error");
    }else{
        next();
    };}
    
    app.use(middle);
    app.use(express.static('my_app'));

app.listen(5000,(err)=>err?console.log(err):console.log('server is running on port 5000'));








