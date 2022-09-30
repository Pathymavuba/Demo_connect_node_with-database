// const http = require('http');
// const mysql = require('mysql');

// const database = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : 'LaethiciaKandolo@14',
//     database : 'demo'
//   });
// database.connect((err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("connection établie avec succès");
// })

// const serveur = http.createServer((req,res)=>{
   
//     // res.setHeader('Content-Type', 'application/json');
//     res.writeHead(200,{"Content-Type":"text/json"})
//     switch(req.url){
//         case "/":
//             res.write('shilo petit nanga')
//             res.end()
//             break;
//         case "/admin":
//             database.query("SELECT *  FROM employe limit 3",(err,resultat)=>{
//                if (err) throw err
//                 res.write(JSON.stringify(resultat))
//                 res.end()
//                 console.log(JSON.stringify(resultat));
               
//             })
//             break;
//             default:
//                 res.statusCode = 404;
//                 res.write('404')
//                 res.end()
//     }


  
// })

// serveur.listen("4000","localhost",()=>{
//  console.log('serveur running');
// })

//Même chose avec Express


const express = require('express');
 const app = express();
 const mysql = require('mysql');
  

 const database = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'LaethiciaKandolo@14',
        database : 'demo'
      })
database.connect((err=>{
    if(err) throw err;
    console.log("connexion établlie avec succès ");
}))



 app.get('/',(req, res) => {
    res.send('shilo petit nanga')
 })
 app.get('/admin',(req, res) => {
    database.query('SELECT * FROM employe', (err,data)=>{
        if (err) console.log(err);
        res.send(JSON.stringify(data));
        // console.log(JSON.stringify(data));
    })

 })
 app.use((req, res) => {
    res.statusCode = 404;
    res.send('404')
    
 })
 app.listen("4000",()=>{
    console.log('serveur is running');
 })
