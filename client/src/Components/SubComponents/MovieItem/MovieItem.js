import React from 'react';

/** Styling */
import './MovieItem.css';

/** Library */
import {FaThumbsDown, FaThumbsUp, FaRegPlayCircle} from 'react-icons/fa';
import {useState} from 'react';
import Popup from 'react-animated-popup';
import {Link} from 'react-router-dom';


function MovieInfo(props) {
    const {id, title, poster, wallpaper, duration, date, ageRating, director, cast} = props.movie;

    return (
        <table className='movieInfoTable'>
            <tr>
                <td>{"Released : " + date}</td>
                <td>{"Duration : " + duration}</td>
                <td style={{border:'solid'}}>{ageRating}</td>
            </tr>
            <tr>
                {"Director : " + director}
            </tr>
            <tr>
                {"Cast : " + cast}
            </tr>
        </table>
    )
}

function MovieItem(props) {
    //props
    const {id, title, poster, wallpaper, duration} = props.movie;

    //state
    const [popupVisibility, setPopupVisibility] = useState(false)

    //styling

    //helpter functions
    const favorite = (id) => {
        //need to define once backend is sorted
    }

    const like = (id) => {
        //need to define
    }

    const dislike = (id) => {
        //need to define
    }

    //main return
    return (
        <div className='movieItem' style={{backgroundImage : `url(${poster})`}}>
                
                <button 
                    className='movieItemBtn moviePosterBtn' 
                    onClick={() => setPopupVisibility(true)}
                >
                    View
                </button>

                <br/>
                
                <Link className='moviePosterBtn' to={'/' + id}><FaRegPlayCircle/></Link>
            

                <Popup visible={popupVisibility} onClose={() => setPopupVisibility(false)}>
                    <div className='popup'>
                        <button className='movieItemBtn closeBtn' onClick={() => setPopupVisibility(false)}>Close</button>
                        <br/>

                        <img className='wallpaper' src={wallpaper} />

                        <div className = 'movieInfo'>
                            <MovieInfo movie={props.movie}/>
                        </div>

                        <div>
                            <button className='movieItemBtn' style={{float:'left'} }>
                                <Link to={'/' + id}>Play</Link>
                            </button>

                            <button className='movieItemBtn' onClick={() => favorite(id)}>Favorite</button>

                            <button className='movieItembtn' onClick={() => like(id)}><FaThumbsUp/></button>
                            <button className='movieItembtn' onClick={() => dislike(id)}><FaThumbsDown/></button>
                        </div>
                    </div>
                </Popup>
        </div>
    );
}



export default MovieItem;