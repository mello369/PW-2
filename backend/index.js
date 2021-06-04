const express = require('express');
const app = express();
const mysql = require('mysql');
app.use(express.json());
const db = mysql.createPool({
    host:'remotemysql.com',
    user:'ydTQLJ2QTo',
    password:'50LyPmyy7z',
    database:'ydTQLJ2QTo',
    port:3306
})
app.get('/',(req,res)=>{
    
    
    res.send('hello world');
    //});
})
app.post('/login',(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    const query = "select user_id from login l,user u where(l.email=(?) and password=(?) and l.email=u.email)";
    db.query(query,[email,password],(err,result)=>{
        if(err==null)
        {
            res.send({"msg":"success","user_id":result[0]["user_id"]});
        
        }
        else
        {
            res.send({"msg":"failed"});
        }
        
    })
})

app.post('/signup',(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    
    const query1 = "insert into login values (?,?);";
    const query2 = "insert into user(name,email) values (?,?);";
    db.query(query1,[email,password],(err,result)=>{
    
        if(err!=null)
        {
            res.send('Could not add record');
        }

    })
    db.query(query2,[name,email],(err,result)=>{
        if(err==null)
        {
            res.send('Record added succesfully');
        }
        else
        {
            console.log(err);
            res.send('could not add record');
            const query = "delete from login where email like (?)";
            db.query(query,[email]);
        }
    })
})
app.post('./uploadPost',(req,res)=>{
    
})

app.listen(3001,() =>{
console.log("server started")

});