import React from 'react';

const MovieCard = props => {
  return(
    <Link to={`/movie-card/${movie.id}`}>
            <p>{movie.title}</p>
          </Link>
  );
};

export default MovieCard;
