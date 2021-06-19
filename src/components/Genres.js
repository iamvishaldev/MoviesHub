import React, { useState, useEffect } from "react";
import "./Genres.css";
import axios from "axios";
import { Grid ,Button} from "@material-ui/core";
import MovieCard from './MovieCard'

const Genres = () => {
    const [token, setToken] = useState("878");
    const [movieData, setMovieData] = useState([]);
    
  useEffect(() => {
    const fetchData = async () => {
        try{
            const response = await axios.get(
                `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=${token}`
              );
              console.log(response)
              setMovieData(response.data.results)
        }
     catch(error){
        console.log(error)
     }
    }
    fetchData();
  }, [token]);

  return (
    <div className="genres">
      <div className="genres_cate">
        <Button variant="outlined" onClick={(e) => setToken("28")}>
          Action
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={(e) => setToken("16")}
        >
          Animation
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={(e) => setToken("36")}
        >
          History
        </Button>
        <Button variant="outlined" onClick={(e) => setToken("27")}>
          Horror
        </Button>
        <Button
          variant="outlined"
          color="primary"
          href="#outlined-buttons"
          onClick={(e) => setToken("878")}
        >
          Science Fiction
        </Button>
      </div>
      <Grid justify="space-evenly" container spacing={0}>
        {movieData.map((data) => (
          <Grid item xs={12} sm={5} md={4} lg={3}>
            <MovieCard key={data.id} info={data} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default Genres;
