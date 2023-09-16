import React, { useState, useEffect } from "react";
import "../styles/MovieInfo.css";
import tv from "../images/tv.png";
import Home from "../images/Home.png";
import Projector from "../images/Projector.png";
import TVShow from "../images/TVShow.png";
import Calender from "../images/Calendar.png";
import Logout from "../images/Logout.png";
// import next from "../images/next.png";

// import twobtn from "..images/twobtn.png";
import { useParams } from "react-router-dom";

import { FadeLoader } from "react-spinners";

const MovieInfo = () => {
  const { id } = useParams();

  const [moviedetail, setMovieDetail] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const getMoviesInfo = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=140633285692dac7eab648dad2d8a111`
    )
      .then((res) => {
        if (!res.ok) {
          throw Error("Oops..could not fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setMovieDetail(data);
        console.log(data);
      })

      .catch((err) => {
        setError(err.message);
      });
  };

  useEffect(() => {
    getMoviesInfo();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="MovieInfo-fluid">
      {loading ? (
        <FadeLoader color={"#D0021B"} loading={loading} size={150} />
      ) : (
        <div class="row">
          <div className="col-sm-4  first-fluid">
            <div className="movieBox">
              <img src={tv} alt="tv" className="tv" />
              <h4 className="movieBox2">MovieBox</h4>
            </div>
            <div className="movieHome">
              <img src={Home} alt="home" className="sideLogo" />
              <h5 className="barText">Home</h5>
            </div>
            <div className="movieH">
              <img src={Projector} alt="home" className="sideLogo" />
              <h5 className="barT">Movies</h5>
            </div>
            <div className="movieHome">
              <img src={TVShow} alt="home" className="sideLogo" />
              <h5 className="barText">TV Series</h5>
            </div>
            <div className="movieHome">
              <img src={Calender} alt="home" className="sideLogo" />
              <h5 className="barText">Upcoming</h5>
            </div>

            <button className="sideBtn">
              <p className="btnText">
                Play movie quizes
                <br />
                and earn
                <br />
                free tickets
                <br />
              </p>
              <p className="btnT">
                50k people are playing
                <br />
                now
              </p>
              <button className="innerBtn">Start Playing</button>
            </button>

            <div className="movieHome2">
              <img src={Logout} alt="home" className="sideLogo" />
              <h5 className="barText">Log out</h5>
            </div>
          </div>

          <div className="col-8 second">
            <div>
              {error && <div>{error}</div>}
              <div className="co col-lg-8 col-md-6 col-sm-6">
                <img
                  data-testid="movie-poster"
                  alt="movie"
                  src={`https://image.tmdb.org/t/p/original${moviedetail.poster_path}`}
                  className="img-fluid"
                />
                <p data-testid="movie-title">{moviedetail.title}</p>
                <p data-testid="movie-release-date">
                  {moviedetail.release_date}
                </p>
                <p data-testid="movie-runtime">{moviedetail.runtime}</p>
                <p data-testid="movie-overview">{moviedetail.overview}</p>
              </div>
            </div>
            <div></div>

            <div></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieInfo;
