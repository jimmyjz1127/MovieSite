import React from "react";

// styling
import './MoviePopup.css';

//external 
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {FaThumbsDown, FaThumbsUp, FaRegPlayCircle} from 'react-icons/fa';

function MovieInfo(props) {
    const {id, title, poster, wallpaper, duration, released, ageRating, director, cast} = props.movie;

    return (
        <div className="movie-info">
            <div className='basic-info'>
                <div>{released}</div>
                <div>{duration}</div>
                <div>{ageRating}</div>
            </div>

            <p>{title}</p>
            <p>Director : {director}</p>
            <p>Cast : {cast}</p>
            
        </div>
    )
}

function MoviePopup(props) {
    //props
    const {popupVisibility, setPopupVisibility} = props;
    const {id, title, poster, wallpaper, duration} = props.movie;

    //auxiliary function
    const getPopupStyle = () => {
        return {
            display : popupVisibility ? 'flex' : 'none',
        }
    }

    const getWallpaperStyle = () => {
        return {
            backgroundImage:`url(${wallpaper})`
        }
    }


    return (
        <div className='popup' style={getPopupStyle()}>

            <div className='wallpaper' style={getWallpaperStyle()}>
                <button className='movieItemBtn' onClick={() => setPopupVisibility(false)}>Close</button>
            </div>

            
            <MovieInfo movie={props.movie}/>
            

            <div className="popup-btns">
                <button className='popup-btn' style={{float:'left'} }>
                    <Link to={'/' + id}>Play</Link>
                </button>

                <button className='popup-btn'>Favorite</button>
                <button className='popup-btn'><FaThumbsUp/></button>
                <button className='popup-btn'><FaThumbsDown/></button>
            </div>

        </div>
    )
}

export default MoviePopup;