import React, {useState,useEffect}  from "react";
import "../styles/MovieInfo.css";
import tv from "../images/tv.png";
import Home from "../images/Home.png";
import Projector from "../images/Projector.png";
import TVShow from "../images/TVShow.png";
import Calender from "../images/Calendar.png";
import Logout from "../images/Logout.png";
// import next from "../images/next.png";
// import Man from "..images/Man.png";
// import twobtn from "..images/twobtn.png";
import { useParams } from "react-router-dom";

import { FadeLoader } from "react-spinners";


const MovieInfo=()=> {

    const {id}= useParams();
    
    const [moviedetail, setMovieDetail]= useState([]);
    const [error, setError]=useState(null)
    const [loading, setLoading]= useState(false)
    const getMoviesInfo = () => {
        fetch(
          `https://api.themoviedb.org/3/movie/${11}?api_key=140633285692dac7eab648dad2d8a111`
        )
        .then (res=>{
          if (!res.ok){
throw Error("Oops..could not fetch data")
          }
          return res.json()
        })
        .then((data) =>{
           setMovieDetail(data);
           console.log(data);
             
           })
          
          .catch(err=>{
            setError(err.message)
          })
          };
      useEffect(() => {
        getMoviesInfo();
        setLoading(true)
        setTimeout(()=>{
          setLoading(false)
        }, 5000)
        
      },[id]);
      
      

  return (
    <div className="MovieInfo-fluid">
      {
      loading ? 
      <FadeLoader
        color={'#D0021B'}
        loading={loading}
        size={150}
      />
      :

      
      <div class="row">
        <div className="col-sm-4  first-fluid">
          <div className="movieBox">
            <img src={tv} alt="tv" className="tv"/>
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
            <br /></p>
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
{error &&<div>{error}</div>}
<div className="co col-lg-12 col-md-6 col-sm-6">
    <img
              data-testid= "movie-poster"
              alt="movie"
              src={`https://image.tmdb.org/t/p/original${moviedetail.poster_path}`} className="img-fluid"
            />
            <p>{moviedetail.name}</p>
            <p>{moviedetail.realease_date}</p>
            <p>{moviedetail.runtime}</p>
            <p>{moviedetail.overview}</p>
         

</div> 
{/* <img src={Man} alt="hero"/> */}
</div>
<div>
      
</div>






















         
 <div>
  
 
 </div> 




        </div>
      </div>
}
    </div>
      
  );
}

export default MovieInfo;
