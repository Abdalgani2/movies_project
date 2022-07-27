import React from "react";
import { useLocation,useNavigate } from "react-router-dom";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Button from '@material-ui/core/Button';
import "./details.css"

const Details = () => {
    const navigate = useNavigate();
    const location = useLocation();
    return(
        <div
        className="itemDetailsCard"
      >

        <div className="imgDetails">
          <img className="imgDetailsCard" src={"https://image.tmdb.org/t/p/w500/" + location.state.poster_path}></img>
        </div>
        <div>
          <p className="titleDetails">{location.state.title} </p>
          <p className="infoDetails"> {location.state.overview}</p>
          <p><strong>Language :</strong> {location.state.original_language}</p>
          <p><strong>Production Date :</strong> {location.state.release_date}</p>
          
          <Stack spacing={1}>
            <Rating name="half-rating-read" defaultValue={location.state.vote_average / 2} precision={0.1} readOnly />
          </Stack>
          <p><strong>Number of Voters :</strong> {location.state.vote_count}</p>
          
          <Button
            variant='contained'
            className="backButton"
            onClick={() => { navigate(`/`) }}
          >
            Back
          </Button>
        </div>


      </div>
    )

}
export default Details