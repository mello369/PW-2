const express = require('express');
const app = express();
const mysql = require('mysql');
const axios = require('axios');
app.use(express.json());
////
var cors = require('cors')
app.use(cors()) // Use this after the variable declaration
////
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

const db = mysql.createPool({
    host:'remotemysql.com',
    user:'ydTQLJ2QTo',
    password:'50LyPmyy7z',
    database:'ydTQLJ2QTo',
    port:3306
})
app.get('/',(req,res)=>{
    
    
    res.send('hello worl');
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
/*
app.post('./uploadPost',(req,res)=>{
    
})
*/

app.get('/getUser/:id',(req,res)=>{
    const id = req.params.id;
    var query1 = 'select name from user where user_id = (?)'; 
    db.query(query1,[id],(err,result)=>{
        if(err==null&&result.length!=0)
        {
            res.send(result[0]["name"]);
        }
        else
        {
            res.send({"msg":"error"});
        }

    })

})

app.get('/getPosts',(req,res)=>{
    let i=0;
    const query = 'select * from post order by date_time desc';
    let posts=[];
    db.query(query,[],async (err,result)=>{
        if(err==null)
        {
            
        //   await result.map(element => {
        //         var query1 = 'select name from user where user_id = (?)'; 
        //        db.query(query1,[element["user_id"]],(err1,result1)=>{
                    
        //             element["name"]=result1[0]["name"];
                    
        //             posts.push(element);
        //             console.log(posts)
        //             return element;
        //                     //result[i]["name"]=(result1[0]["name"]);
        //             })
        //     });
            for(i of result)
            {
               await axios.get('http://localhost:3001/getUser/'+i["user_id"])
                .then(response => {
                             i["name"]=response.data;
                             posts.push(i);
                             console.log(response.data)
                             })
                    .catch(error => {
                      console.log(error);
                  });
            }
            console.log(posts);
            // for(i=0;i<result.length;i++)
            // {
            //     var query1 = 'select name from user where user_id = (?)'; 
            //     db.query(query1,[result[i]["user_id"]],(err1,result1)=>{
            //     console.log(result[i]);
            //             //result[i]["name"]=(result1[0]["name"]);
                    
            //     })
            // }
            res.status=200;
            res.header
            res.send({posts});
        
        }
        else
        {
            res.send({"msg":"failed"});
        }
        
    })
})

/********************************************************************/
//POST: 
app.post("/uploadPost", (req, res) => {
	let data = { company: req.body.company, image_content: req.body.image_content,text_content:req.body.text_content,user_id:req.body.user_id,date_time:req.body.date_time};
	let sql = "INSERT INTO post SET ?";
	let query = db.query(sql, data, (err, result) => {
		if (err) throw err;
		res.send(JSON.stringify({ status: 200, error: null, response: "Post added successfully" }));
	});
});

//ASK QUESTION:
app.post("/ask/ask-submit",(req,res)=>{
    let data={question:req.body.question,user_id:req.body.user_id};
    let sql="INSERT INTO question SET ?";
    let query=db.query(sql,data,(err,result)=>{
        if(err) throw err;
        res.send(JSON.stringify({status:200,error:null,response:"Question added successfully"}));
    })
})

//ANSWER:
app.post("/answer/answer-submit",(req,res)=>{
    let data={answer:req.body.answer,question_id:req.body.question_id,user_id:req.body.user_id};
    let sql="INSERT INTO answer SET ?";
    let query=db.query(sql,data,(err,result)=>{
        if(err) throw err;
        res.send(JSON.stringify({status:200,error:null,response:"Answer added successfully"}));
    })
})

//Getting user post in profile:

app.get('/getUserPosts/:id',(req,res)=>{
    let i=0;
    const query = 'select * from post where user_id='+req.params.id;
    let posts=[];
    db.query(query,async (err,result)=>{
        if(err==null)
        {

            for(i of result)
            {
                posts.push(i);

            }
            console.log(posts);
            res.status=200;
            res.header
            res.send({posts});
        
        }
        else
        {
            res.send({"msg":"failed"});
        }
        
    })
})

//getting profile data
app.get('/profile/:id',(req,res)=>{
    const query="select * from user where user_id="+req.params.id;

    db.query(query,async(err,result)=>{
        if(err==null)
        {
            res.status=200;
            res.header
            res.send(result)
        }
        else
        {
            res.send({"msg":"failed"})
        }
    })
})

//EDIT PROFILE:
//NOTE : CANT UPDATE EMAIL HERE AS IT IS FOREIGN KEY OF USER=>FIX 
app.post('/profile-edit/:id',(req,res)=>{
    const sql='Update user set name=\"'+req.body.name+"\",grad_year=\""+req.body.grad_year+"\",user.description=\""+req.body.description+"\",company=\""+req.body.company+"\" where user_id="+req.params.id;
    console.log(sql)
    let query=db.query(sql,(err,result)=>{
        if(err) throw err;
        else
        res.send(JSON.stringify({status:200,error:null,response:"Profile updated successfully"}));
    })
})






















app.listen(3001,(err) =>{
    console.log('Server started at port 3001')
});