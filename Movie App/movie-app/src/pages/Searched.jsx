import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "../components/Search";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import './searched.css'

const Searched = ({showDetails, setShowDetails}) => {
  let params = useParams();
  const [Smovies, setSMovies] = useState([])

  useEffect(() => {
    searchedMovies()
  }, [params.search])
  

  const searchedMovies = async ()=>{
      const response = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${params.search}`)
      setSMovies(response.data.results)
  }

  return (
<>
    <Navbar setShowDetails={setShowDetails} showDetails={showDetails}/>
    <Search showDetails={showDetails}/>
    <div className="container">
      <div className="row">
        {Smovies?.map((movie) => (
          <div className="col-lg-3">
            <div className="card mb-4 shadow-sm myCSS">
              <img
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                alt=""
                className="card-img-top"
              />
              <div className="card-body bg-primary">
                <p className="card-text display"><span style={{display:"block", fontSize:'1.2rem', fontWeight:'500'}}>Overview:</span>{movie.overview}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <h6 className="card-title">{movie.title}</h6>
                  <h6>
                    <span className={movie.vote_average > 8 ? "badge bg-success" : movie.vote_average < 6 ? "badge bg-danger" : "badge bg-warning" }>
                      {movie.vote_average}
                    </span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Searched;
