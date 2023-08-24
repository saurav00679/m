import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
    const {id} = useParams();
    const [detail, setDetail] = useState(null)

    useEffect(() => {
      fetch(`http://www.omdbapi.com/?i=${id}&apikey=5c9e7bce`)
      .then((response) => response.json())
      .then((detail)=> setDetail(detail))
    }, [id])
    
    return (
       <div className="container">
        <div className="title">
            <h1>Movie Detail</h1>
        </div>
         
         {detail && 
            <div className="detail-page">
                <img src = {detail.Poster} alt ='movie' className="image-container" style={{marginRight: '20px'}}/>
                <div className="details">
                    <h3>Title: {detail.Title} </h3>
                    <h3>Year Released: {detail.Year}</h3>
                    <h3>Plot: {detail.Plot}</h3>
                </div>
            </div>}
            <Link to='/'><button className="button">Go Back</button></Link>
       </div>
    );
}

export default MovieDetail;