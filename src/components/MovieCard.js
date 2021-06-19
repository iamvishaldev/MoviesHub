import { Card, CardContent, CardMedia ,Box} from "@material-ui/core";
import React from "react";
import "./MovieCard.css";

const MovieCard = (props) => {
  return (
    <div className="movieCard">
      <Card className="card">
        <CardMedia
        className="movieCard_media"
        image={`https://image.tmdb.org/t/p/original${props.info.poster_path}`}
        />
      <CardContent>
        <div className="movieCard__contain">
          <Box
          fontWeight="fontWeightBold"
          fontSize={18}
          textAlign="left"
          letterSpacing={2}
          m={1}
          >
            {props.info.title}
          </Box>
          <Box 
          textAlign="right"
          fontWeight="fontWeightBold"
          fontSize={16}
          fontFamily="Monospace"
          m={1}
          >
            {props.info.release_date?.slice(0,4)}
          </Box>
        </div>
        <div className="movieCard_overview">
          <div className="movieCard__overview1">
            <Box
            fontWeight="fontWeightRegular"
            fontFamily="Monospace"
            fontSize={18}
            textAlign="center"
            m={1}
            >
            {props.info.overview}
            </Box>
          </div>
        </div>
      </CardContent>
      </Card>
    </div>
  );
};

export default MovieCard;
