import './App.css';
import React from 'react';
import {useState} from 'react';
import ReactPlayer from 'react-player'

function Video() {
  const [videoFilePath, setVideoFilePath] = useState(null);

  const handleVideoUpload = (e) => {
    console.log('first', e.target.files[0]);
    console.log('second', URL.createObjectURL(e.target.files[0]));
    setVideoFilePath(URL.createObjectURL(e.target.files[0]));
  }

  return (
    // <div>
    //   <input type="file" onChange={handleVideoUpload} />
    //   <ReactPlayer
    //     url={URL.createObjectURL()}
    //     width="100%"
    //     height="100%"
    //     controls={true}
    //   />
    // </div>
    <div>
      <video controls muted>
        <source src="http://localhost:5000/movie" type='video/mp4'></source>
      </video>
    </div>
  )  
}

function App() {
  return (
    <div className="App">
      <h1>Simple Video Player</h1>
      <Video/>
    </div>
  );
}

export default App;
