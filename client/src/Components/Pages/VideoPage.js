/**
 * Page for playing a selected video 
 */

import React from 'react';
import {useState} from 'react';

function VideoPage(props) 
{
    const {path} = props.movie;

    return (
        <div>
            <video>
                <source src={path} type='video/mp4'></source>
            </video>
        </div>
    );
}

export default VideoPage;