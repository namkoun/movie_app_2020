import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';

function Movie({title, year, summary, poster, genres, rating}){
    return(
     <div className="movie">
   <Link
    to={{pathname: '/movie-detail',
    state:{ year, title, summary, poster, genres, rating},}}>
         <img src={poster} alt={title} title={title} />   
         <div className="movie-data">
         
         <h3 className="movie-title">{title}</h3>
         <h5 className="movie-year">{year}</h5>
         <ul className="movie-genres">
             {genres.map((genres,index)=>{
                 return <li key={index}>{genres}</li>;
             })}
             </ul>
            <p className="movie-summary">{summary.slice(0,180)}</p> 
     </div> 
     </Link>
     </div>
    ); 
}


Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;