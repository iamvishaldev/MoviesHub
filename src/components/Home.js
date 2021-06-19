import React, { useState, useEffect } from "react";
import "./Home.css";
import axios from "axios";
import { Grid, Box } from "@material-ui/core";
import MovieCard from './MovieCard'

const Home = () => {

    const [movieData,setMovieData] =  useState([])

    // let API_KEY = "1c5b77d9d54179f3c8aa4f23d544428d"

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response =  await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
        )
        setMovieData(response.data.results)
      } catch (error) {
        console.log(error)
      }
    };
    fetchData();
  }, []);

  return (
    <div className="home">
      <Box
        lineHeight={3}
        textAlign="center"
        fontSize={30}
        fontWeight="fontWeightBold"
        letterSpacing={9}
        m={1}
      >
        Top Popular Movies
      </Box>
      <Grid justify="space-evenly" container spacing={0}>
        {movieData.map((item)=>(
          <Grid item xs={12} sm={5} md={4} lg={3}>
            <MovieCard key={item.id} info={item}/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
