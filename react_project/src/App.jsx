import { useState, useEffect } from 'react';

import MovieCard from './MovieCard';
import './app.css';
import SearchIcon from './search.svg';

//api key: dabd5e26

//statick variable - string used to apply API 
const API_URL = 'https://www.omdbapi.com?apikey=dabd5e26';

const movie1 = {
  "Title": "Spiderman in Cannes",
  "Year": "2016",
  "imdbID": "tt5978586",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BZDlmMGQwYmItNTNmOS00OTNkLTkxNTYtNDM3ZWVlMWUyZDIzXkEyXkFqcGdeQXVyMTA5Mzk5Mw@@._V1_SX300.jpg"
}

const App = () =>  {
  //We need to map of all  our movies from the API so we can add more movies on our webpage
  //We created a useState hook that stores all of the mapped data into one empty array.
  const [movies, setMovies] = useState([]);
  
  //Now we are creating a function for search button. 
  //First we need to create a useState hook that serves as a search function
  //We pass a empty string to the function because we need to start with empty search string
  const [searchTerm, setSearchTerm] = useState('');

  //searchMovies() - was used to find/fetch movies using the API
  //It simply allows us to write promises-based code as if it was synchronous and it checks that we are not breaking the execution thread. 
  //We accept movie tittles using the searchMovies functionn
  const searchMovies  = async (title) => {
    //response - is a variable that fetches data from the API endpoint by using a template string
    const response = await fetch(`${API_URL}&s=${title}`);
    //after getting the response from the API endpoint we now need to get the data from the API
    const data = await response.json();
    //now we passed all of the mapped data to the setMovies array so we can use all of the values from the api
    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('Superman');
  }, [])


  return (
   <>
   <div className="app">
      <h1>MovieList</h1>
      <div className="search">
        <input   
        value={searchTerm}
        onChange = {(e) => setSearchTerm(e.target.value)}
        placeholder='Search for movies' 
        />

        <img 
        src={SearchIcon} 
        alt="search"
        onClick={() => searchMovies(searchTerm)} 
        />

      </div>
      {movies?.length > 0 ? ( 
        <div className="container">
         {movies.map((movie) => (<MovieCard movie={movie} />))}
        </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )
      }
   </div>
   </>
  );
}

export default App
