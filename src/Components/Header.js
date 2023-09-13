import React from "react";
import "../styles/Header.css";
import PosterH from "../images/PosterH.png";
import tv from "../images/tv.png";
import search from "../images/search.png";
import Menu from "../images/Menu.png";
import IMDB from "../images/IMDB.png";
import tomato from "../images/tomato.png";
import play from "../images/Play.png";

function Header() {
  return (
    <div
      style={{ backgroundImage: `url(${PosterH})` }}
      className="header-fluid"
    >
      <div className="navbar">
        <div className="logo">
          <img src={tv} alt="imTv" className="tv" />
          <h4 className="movie">MovieBox</h4>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="What do you want to watch?"
            className="input"
          />
          <img src={search} alt="/" className="sLogo" />
        </div>
        <div className="signIn">
          <h4 className="sign">Sign in</h4>
          <img src={Menu} alt="/" className="menu" />
        </div>
      </div>

      <div className="navBody">
        <h1 className="john">
          John Wick 3 :<br /> Parabellum
        </h1>
        <div className="wrapper">
          <div imdb>
            <img src={IMDB} alt="/" />
            <span>86.0 / 100</span>
          </div>
          <div className="tomato">
            <img src={tomato} alt="/" />
            <span>90%</span>
          </div>
        </div>
        <h4 className="jWick">
          John Wick is on the run after killing a member
          <br />
          of the international assassins' guild, and with
          <br />
          a $14 million price tag on his head, he is the
          <br />
          target of hit men and women everywhere.
        </h4>
        
          {/* <div className="play">
            
          </div> */}
          <div >
            <button className="watchBtn" >
            <img src={play} alt="play" className="play" />Watch Trailer</button>
          </div>
        </div>
      </div>
    
  );
}

export default Header;
