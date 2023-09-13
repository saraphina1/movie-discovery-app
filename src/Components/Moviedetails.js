import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Moviedetails.css";
import Card from "react-bootstrap/Card";
import Icon from "../images/Icon.png";
const Moviedetails = (props) => {
  const getMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/tv/top_rated?api_key=140633285692dac7eab648dad2d8a111"
    )
      .then((res) => res.json())
      .then((json) => console.log(json.results));
  };

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
      <div className="movieContainer">
        {props.movies.map((movie, index) => (
          <Card className="card border-o sc">
            <Card.Img
              variant="top"
              alt="movie"
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            />
            <Card.Body className="cardBody">
              <Card.Title className="cardTitle">{movie.name}</Card.Title>
              <Card.Title className="cardTitle">{movie.first_air_date}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Moviedetails;
