const express=require("express");
const mysql=require("mysql");
const cors=require("cors");

const app=express();
app.use(express.json());
app.use(cors());

const con=mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"",
    database:"register"
})
app.post('/register', (req, res) => {
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    con.query("INSERT INTO users (email, username, password) VALUES (?, ?, ?)", [email, username, password], 
        (err, result) => {
            if(result){
                console.log(result)
               
                res.send(result);
            }else{
                res.send({message: "error "})
            }
        }
    )
})

app.listen(5000, () => {
    console.log("running backend server at port 5000");
})
        



