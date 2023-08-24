import React from 'react';
// We use this movie component/props to apply all of the movie properties and send it into the main app jsx
const MovieCard = ({movie: {imdbID, Year, Poster, Title, Type}}) => {
    return (
        <div className="movie" key={imdbID}>
        <div>
          <p>{Year}</p>
        </div>
        <div>
          <img src={Poster !== 'N/1' ? Poster : 'https://via.placeholder.com/400'} alt="movie1.Title" />
        </div>
        <div>
          <span>{Type}</span>
          <h3>{Title}</h3>
        </div>
    </div>
);
}


export default MovieCard;