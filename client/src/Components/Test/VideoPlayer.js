import React from 'react';
import {useState} from 'react';
import ReactPlayer from 'react-player'


function VideoPlayer() {
    const [videoFilePath, setVideoFilePath] = useState(null);

    const handleVideoUpload = (e) => {
        console.log('first', e.target.files[0]);
        console.log('second', URL.createObjectURL(e.target.files[0]));
        setVideoFilePath(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <div>
           <input type="file" onChange={handleVideoUpload} />
           <ReactPlayer
             url={URL.createObjectURL()}
             width="100%"
             height="100%"
             controls={true}
           />
        </div>
    );
}

export default VideoPlayer;