const express=require('express');
const mysql=require('mysql');
const bodyParser=require('body-parser');
const app=express();
app.get('/',(req,res)=>{
    res.send("HELLO")
});
//parse application/json
app.use(express.json());
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


//connecting mysql
const conn=mysql.createConnection(
    {
        host: "remotemysql.com",
        user:"ydTQLJ2QTo",
        password:"50LyPmyy7z",
        database:"ydTQLJ2QTo",
        port:3306
    }
)
conn.connect((err)=>{
    if(err)throw err;
    console.log("MySql is connected");
});
//POST: 
app.post("/post/post-submit", (req, res) => {
	let data = { company: req.body.company, image_content: req.body.image_content,text_content:req.body.text_content,user_id:req.body.user_id,date_time:req.body.date_time};
	let sql = "INSERT INTO post SET ?";
	let query = conn.query(sql, data, (err, result) => {
		if (err) throw err;
		res.send(JSON.stringify({ status: 200, error: null, response: "Post added successfully" }));
	});
});

//ASK QUESTION:
app.post("/ask/ask-submit",(req,res)=>{
    let data={question:req.body.question,user_id:req.body.user_id};
    let sql="INSERT INTO question SET ?";
    let query=conn.query(sql,data,(err,result)=>{
        if(err) throw err;
        res.send(JSON.stringify({status:200,error:null,response:"Question added successfully"}));
    })
})

//ANSWER:
app.post("/answer/answer-submit",(req,res)=>{
    let data={answer:req.body.answer,question_id:req.body.question_id,user_id:req.body.user_id};
    let sql="INSERT INTO answer SET ?";
    let query=conn.query(sql,data,(err,result)=>{
        if(err) throw err;
        res.send(JSON.stringify({status:200,error:null,response:"Answer added successfully"}));
    })
})


app.listen(3306,(err)=>{
    if(err)throw err;
    console.log("Server started at port 3306....")
})
