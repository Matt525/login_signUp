const express = require('express');
const app = express();



app.get('/',(req, res, err)=> {
    if(!err){
        res.send("index.html");
    }
    alert("Error with call");
});
