import React, { useState, useEffect } from "react";
import "./Search.css";
import { IconButton, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import MovieCard from "./MovieCard";
import { Grid, Box } from "@material-ui/core";

const Search = () => {
  const [movieData, setMovieData] = useState([]);

  const [userInput, setUserInput] = useState("");

  const [userInputTemp, setUserInputTemp] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${userInputTemp}`
        );
        setMovieData(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [userInputTemp]);

  const inputHandler = (event) => {
    setUserInput(event.target.value);
  };

  const searchMovie = (event) => {
    event.preventDefault()
    setUserInputTemp(userInput);
    setUserInput("");
  };

  return (
    <div className="search">
      <form className="search_input" onSubmit={searchMovie}>
        <TextField
          className="search_input1"
          label="Search Movies"
          margin="normal"
          variant="outlined"
          value={userInput}
          onChange={inputHandler}
        />
        <IconButton
          color="primary"
          aria-label="add to shopping cart"
          onClick={searchMovie}
        >
          <SearchIcon />
        </IconButton>
      </form>
      {movieData.length === 0 && (
        <Box
          lineHeight={3}
          textAlign="center"
          fontSize={30}
          fontWeight="fontWeightBold"
          letterSpacing={10}
          m={1}
        >
          NO SEARCH RESULTS
        </Box>
      )}
      {movieData.length > 0 && (
        <Grid container spacing={0}>
          {movieData.map((currentData) => (
            <Grid item xs={12} sm={5} md={4} lg={3}>
              <MovieCard info={currentData} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Search;
