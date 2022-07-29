const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();


function runServer(){
    
    app.get('/movie', (req,res)=> {
        console.log('/movie');
        res.sendFile(path.join(__dirname, 'movies/test1.mp4'));
    })


    var port = 5000;
    app.listen(port, () => console.log('Server running on port ', port));
}

runServer();