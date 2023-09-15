import React, {useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Moviedetails.css";
import Card from "react-bootstrap/Card";
import Icon from "../images/Icon.png";

import { Link } from "react-router-dom";
const Moviedetails = () => {
  const [movies, setMovies] = useState([])
  const getMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/tv/top_rated?api_key=140633285692dac7eab648dad2d8a111"
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
      <div className="fWrap">
        <div className="feat">Featured Movie</div>
        <div className="see">
          <div>See more </div>
          <div className="icon">
            <img src={Icon} alt="icon" className="icon" />
          </div>
        </div>
      </div>
      
      <div className="movie-container">
        
        {movies.map((movie, index) => (
      <Link to={`/movies/:id`} class="text-decoration-none"><Card data-testid="movie-card" className="card-container">
            <img
              data-testid= "movie-poster"
              alt="movie"
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            />
            <Card.Body className="cardBody">
              <Card.Title data-testid= "movie-title" className="cardTitle">{movie.name}</Card.Title>
              <Card.Title data-testid= "movie-release-date" className="cardTitle">{movie.first_air_date}</Card.Title>
            </Card.Body>
          </Card></Link>
        ))}
      </div>
  
    </div>
  );
};

export default Moviedetails;
