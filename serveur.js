const http = require('http');
const mysql = require('mysql');

const database = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'LaethiciaKandolo@14',
    database : 'demo'
  });
database.connect((err)=>{
    if(err){
        console.log(err);
    }
    console.log("connection établie avec succès");
})

const serveur = http.createServer((req,res)=>{
   
    // res.setHeader('Content-Type', 'application/json');
    res.writeHead(200,{"Content-Type":"text/json"})
    switch(req.url){
        case "/":
            res.write('shilo petit nanga')
            res.end()
            break;
        case "/admin":
            database.query("SELECT *  FROM employe limit 2",(err,resultat)=>{
               if (err) throw err
                res.write(JSON.stringify(resultat))
                res.end()
                console.log(JSON.stringify(resultat));
               
            })
            break;
            default:
                res.statusCode = 404;
                res.write('404')
                res.end()
    }


  
})

serveur.listen("3000","localhost",()=>{
 console.log('serveur running');
})