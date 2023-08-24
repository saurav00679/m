import React from "react";
import { Link } from "react-router-dom";
import MovieDetail from "./MovieDetail";

const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;
    return(<>
        {props?.movies?.map((movie)=> (
        <div className="image-container d-flex justify-content-start m-3 " onClick={()=> <MovieDetail movie={movie} />}>
            <Link to={`/${movie.imdbID}`}><img src={movie.Poster} alt='movie' ></img></Link>
            <div onClick={()=>props.handleFavoriteClick(movie)} className="overlay d-flex align-items-center justify-content-center">
                <FavouriteComponent/>
            </div>
        </div>
        ))}
        </>)
    
}
export default MovieList;