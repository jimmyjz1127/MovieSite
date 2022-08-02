
import './App.css';
import React from 'react';
import {useState} from 'react';

/** Third party components */
import {BrowserRouter, Routes, Route} from 'react-router-dom';


/** Components */
import MovieItem from './Components/SubComponents/MovieItem/MovieItem.js'
import ContentBelt from './Components/Widgets/ContentBelt';


function App() {
  const movie = {
    title:'American Dad',
    released:'September 22, 2002',
    duration:'20 min',
    ageRating:'PG-13',
    genre:'Comedy',
    type:'tv',
    rating:90,
    poster:'http://localhost:5000/moviePoster',
    wallpaper:'http://localhost:5000/movieWallpaper',
    path:'http://localhost:5000/movie',
    director:'Seth Macfarlane',
    cast: 'Seth Macfarlane, John Doe, Amy Adams'
  }

  const movies = [
    movie, movie,movie,movie,movie,movie,movie,movie,movie,movie
  ]

  return (
    <BrowserRouter>
      <div className="App">
        <h1>TESTESTETEST</h1>
        <br/>
        <div className='container'>
          <ContentBelt movies={movies}/>
        </div>
        
      </div>
    </BrowserRouter>
   
  );
}

export default App;