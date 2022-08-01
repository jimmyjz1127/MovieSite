import React from 'react';

import MovieItem from '../SubComponents/MovieItem/MovieItem';




function ContentBelt(props) {
    /** Props */
    const {query, movies} = props;

    return (
        <div className='contentBelt'>
            {movies.map((movie) => (
                <MovieItem movie={movie}/>
            ))}
        </div>
    );
}

export default ContentBelt;