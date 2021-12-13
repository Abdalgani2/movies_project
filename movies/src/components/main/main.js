import React, { useContext, useState } from "react";
import { MainContext } from "../../context/main";
import axios from "axios";
import "./main.css"
const Main = () => {
  const [movies, setMovies] = useState([]);
  axios
    .get("https://api.themoviedb.org/3/discover/movie?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=1bfa430aada4409bfa6a3c5528128e8a")
    .then((resul) => {
      setMovies(resul.data.results)
    })
    .catch((err) => {
      console.log("err", err)
    });
  const mainContext = useContext(MainContext);
  return (
    <>
     <div className="mainDiv">
      {movies.map((elem) => {
        return (
          <div
            onClick={() => {
            }}
            className="itemCard"
          >
           
            <div className="img">
              <img  className="imgCard" src={"https://image.tmdb.org/t/p/w500/" + elem.poster_path}></img>
            </div>
            <div>
              <p className="title">{elem.title} </p>
              <p className="info"> {elem.overview}</p>
              {/* <p className="price">Located in : {elem.location}</p> */}
            </div>
          
          </div>
        );
      })}
       </div>
    </>
   
  );
};

export default Main;