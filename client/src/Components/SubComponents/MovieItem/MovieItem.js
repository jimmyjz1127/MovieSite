import React from 'react';

/** Styling */
import './MovieItem.css';

/** Library */
import {FaThumbsDown, FaThumbsUp, FaRegPlayCircle} from 'react-icons/fa';
import {useState} from 'react';
import MoviePopup from '../../Widgets/MoviePopup/MoviePopup.js';
import {Link} from 'react-router-dom';

function MovieItem(props) {
    //props
    const {id, title, poster, wallpaper, duration} = props.movie;

    //state
    const [popupVisibility, setPopupVisibility] = useState(false)

    //main return
    return (
        <div classname='movie-item-wrapper'>
            <MoviePopup 
                        popupVisibility={popupVisibility} 
                        setPopupVisibility={setPopupVisibility}
                        movie = {props.movie}
                    />
            <div className='movie-item' >
                <div className='movie-poster' style={{backgroundImage : `url(${poster})`}}>

                    <a className='movie-poster-btn play-btn'><FaRegPlayCircle/></a>
                
                </div> 
                <div className='movie-poster-btn view-btn-container'>
                    <button className='movie-poster-btn view-btn' onClick={() => setPopupVisibility(true)}>
                        View
                    </button>
                </div>
            </div>
        </div>
    );
}



export default MovieItem;