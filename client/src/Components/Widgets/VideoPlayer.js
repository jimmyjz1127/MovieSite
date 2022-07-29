import React from 'react';
import {useState} from 'react';

function VideoPlayer() {
    return (
        <div>
            <video controls muted>
                <source src="http://localhost:5000/movie" type='video/mp4'/>
            </video> 
        </div>
    )
}

export default VideoPlayer;