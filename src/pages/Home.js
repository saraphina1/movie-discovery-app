 import React from "react";
import Header from "../Components/Header";
import Moviedetails from "../Components/Moviedetails";
import Footer from "../Components/Footer";


function Home() {
  
  return (
    <div fluid>
      <Header />
      
      <div>
         <Moviedetails/> 
      </div>
      { <Footer/> }
    </div>
  );
}

export default Home;
