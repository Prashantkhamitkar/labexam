const express=require('express')
const cors=require('cors')

const mysql=require('mysql');
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'manager',
    database:'employee'
});
const app=express();
app.use(cors('*'));
app.use((request, response, next)=>{
    response.setHeader('Access-Control-Allow-Origin',"*");
    response.setHeader('Access-Control-Allow-Headers',"*");
    response.setHeader('Access-Control-Allow-Methods', "*")
    next();
})

app.get("/",(req,res)=>{
    var statement='select * from Employeetb;'
    connection.query(statement,(err,result)=>{
        if(err==null){
            console.log(result);
            res.send(result);
        }
        else{

            console.log(err);
            res.send(err);
        }
    })

})
app.post("/",(req,res)=>{
var query  = `insert into Employeetb values(${req.body.id},'${req.body.e_name}','${req.body.email}','${req.body.password}',${req.body.emp_id},'${req.body.dname}','${req.body.doj}')`;
connection.query(query,(err,result)=>{
    if(err==null){
        console.log(result);
        res.send(result);
    }
    else{

        console.log(err);
        res.send(err);
    }
    res.end();
})

})
app.delete("/:doj",(req,res)=>{
    var query  = `delete from Employeetb where doj='${req.params.doj}'`;
    connection.query(query,(err,result)=>{
        if(err==null){
            console.log(result);
            res.send(result);
        }
        else{
    
            console.log(err);
            res.send(err);
        }
        res.end();
    })
    
    })
    app.put("/:id",(req,res)=>{
        var query=`update Employeetb set dname='${req.body.dname}',doj='${req.body.doj} where id=2;`
        connection.query(query,(err,result)=>{
            if(err==null){
                console.log(result);
                res.send(result);
            }
            else{
        
                console.log(err);
                res.send(err);
            }
            res.end();
        })
        

    })
app.listen(5050,'0.0.0.0',()=>{
    console.log("server is running on 5050")
});