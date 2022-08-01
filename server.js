const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();


function runServer(){
    
    app.get('/movie', (req,res)=> {
        console.log('/movie');
        res.sendFile(path.join(__dirname, 'movies/test/test1.mp4'));
    })

    app.get('/moviePoster', (req,res) => {
        console.log('/moviePoster');
        res.sendFile(path.join(__dirname, 'movies/test/americandad-poster.jpg'));
    })

    app.get('/movieWallpaper', (req,res) => {
        console.log('/movieWallpaper');
        res.sendFile(path.join(__dirname, 'movies/test/americandad-wallpaper.jpg'));
    })


    var port = 5000;
    app.listen(port, () => console.log('Server running on port ', port));
}

runServer();