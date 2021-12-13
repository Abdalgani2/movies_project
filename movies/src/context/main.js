import React, { useState, useContext } from "react";
import axios from "axios";
export const MainContext = React.createContext();

const MainProvider = (prop) => {
    const [movies, setMovies] = useState();
    const state = {
        movies
    };
   
   axios
      .get("https://api.themoviedb.org/3/discover/movie?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=1bfa430aada4409bfa6a3c5528128e8a")
      .then((resul) => {
        //   console.log("result",result.data)
          setMovies(resul.data.results)
      })
      .catch((err) => {
          console.log("err",err)
      });
  
  return (
    <MainContext.Provider value={state}> {prop.children}</MainContext.Provider>
  );

  }
export default MainProvider;