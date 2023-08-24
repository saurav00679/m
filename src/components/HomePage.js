import React, {useState, useEffect} from "react";
import MovieListHeading from "./MovieListHeading";
import MovieList from "./MovieList";
import SearchBox from "./SearchBox";
import AddFavourites from "./AddFavourites";
import RemoveFavourites from "./RemoveFavourites";

const HomePage =()=>{
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favourites, setFavourites] = useState([]);

  const getMovieRequest = async(searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=5c9e7bce`;

    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search){
      setMovies(responseJson.Search);
    }
  }

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const favouriteMovies = JSON.parse(localStorage.getItem('movie-app-favourites'));
    setFavourites(favouriteMovies);
  }, []);

  const saveToLocalStorage = (items) =>{
    localStorage.setItem('movie-app-favourites', JSON.stringify(items))
  }

  const addFavouriteMovie = (movie) =>{
    if (favourites.some((favourite) => favourite.imdbID === movie.imdbID)){
      alert('Its already added to the list.')
    }
    else{
      const newFavouriteList = [...favourites, movie];
      setFavourites(newFavouriteList);
      saveToLocalStorage(newFavouriteList);
      alert('added')
    }
  }

  const removeFavouriteMovie = (movie)=>{
    const newFavouriteList = favourites.filter((favourite)=> favourite.imdbID !== movie.imdbID);
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }

  return (
  <div className='container'>
    <div className='title'>
      <MovieListHeading heading = 'MOVIES' />
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
    </div>
    <div className='movielist'>
      <MovieList movies = {movies} handleFavoriteClick={addFavouriteMovie} favouriteComponent = {AddFavourites}/>
    </div> 

    <div className='title'>
      <MovieListHeading heading = 'FAVOURITES'/>
    </div>
    <div className='movielist'>
      <MovieList movies = {favourites} handleFavoriteClick={removeFavouriteMovie} favouriteComponent = {RemoveFavourites}/>
    </div> 
  </div>
  );
}

export default HomePage;