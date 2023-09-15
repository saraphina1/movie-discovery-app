import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
 import Home from "./pages/Home";
 import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import MovieInfo from "./pages/MovieInfo";

function App() {
  return (
    <div>
      <Router>
       
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie/:id" element={<MovieInfo/>}/>
        
      </Routes>
      </Router >
    </div>
  );
}

export default App;
