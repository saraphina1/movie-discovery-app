import React, {useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Moviedetails.css";
import Card from "react-bootstrap/Card";
import Icon from "../images/Icon.png";
import Favorite from "../images/Favorite.png";


import { Link } from "react-router-dom";
const Moviedetails = () => {
  const [movies, setMovies] = useState([])
  const getMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=140633285692dac7eab648dad2d8a111"
    )
      .then((res) => res.json())
      .then((data) => {
        let slicedData = data.results;
        slicedData = slicedData.slice(0, 10);
        console.log(slicedData);
        setMovies(slicedData);
      } 
       
       );
  };
  console.log(movies);
        

  useEffect(() => {
    getMovies();
  }, []);
  

  return (
    <div className="movieCont">
      
        <div className="feat">Featured Movie</div>
        <div className="see">
          <p>See more </p>
          <span className="icon">
            <img src={Icon} alt="icon" className="icon" />
          </span>
        
      </div>
      
      <div className="movie-container">
        
        {movies ? (movies.map(movie=>
      <Link to={`/movie/${movie.id}`} class="text-decoration-none"><Card data-testid="movie-card" className="card-container">
            <img src={Favorite} alt="fav" className="fav"/>
            <img
              data-testid= "movie-poster"
              alt="movie"
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            />
            <Card.Body className="cardBody">
              <Card.Title data-testid= "movie-title" className="cardTitle">{movie.title}</Card.Title>
              <Card.Title data-testid= "movie-release-date" className="cardTitle">{movie.release_date}</Card.Title>
            </Card.Body>
          </Card></Link>
        )):(("please wait"))}
      </div>
  
    </div>
  );
};

export default Moviedetails;
