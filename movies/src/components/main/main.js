import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router-dom';
import "./main.css"
const Main = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/discover/movie?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=1bfa430aada4409bfa6a3c5528128e8a")
      .then((resul) => {
        console.log(resul.data.results);
        setMovies(resul.data.results)
      })
      .catch((err) => {
        console.log("err", err)
      });
  }, []);

  return (
    <>
      <h1 className="nav">Movies Website</h1>
      <div className="mainDiv">
        {movies.map((elem) => {
          return (
            <div
              onClick={() => {
              }}
              className="itemCard"
            >

              <div className="img">
                <img className="imgCard" src={"https://image.tmdb.org/t/p/w500/" + elem.poster_path}></img>
              </div>
              <div>
                <p className="title">{elem.title} </p>
                <p className="info"> {elem.overview}</p>
                <Stack spacing={1}>
                  <Rating name="half-rating-read" defaultValue={elem.vote_average / 2} precision={0.1} readOnly />
                </Stack>
                <div className="detalisButton">
                  <Button
                    className={"detalisButton1"}
                    variant='contained'
                    onClick={() => { navigate(`/details`, { state: elem }); }}
                  >
                    details
                  </Button></div>
              </div>


            </div>
          );
        })}
      </div>
    </>

  );
};

export default Main;