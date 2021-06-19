import React from "react";
import "./Navbar.css";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button, Box } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navbar__buttonStyles: {
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  navbar__style:{
    zIndex:1
  },
  navBar_title: {
    cursor: "pointer",
  },
  navbar__button: {
    marginLeft: 15,
    "&:hover": {
      backgroundColor: "white",
      color: "#3f51b5",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.navbar}>
      <AppBar position="fixed" className={classes.navbar__style}>
        <Toolbar>
          <Typography className={classes.navBar_title} variant="h6" onClick={()=>history.push('/')}>
            MovieHub
          </Typography>
          <Box component="div" className={classes.navbar__buttonStyles}>
            <Button
              className="navBar_button"
              color="inherit"
              className={classes.navbar__button}
              onClick={() => history.push("/search")}
            >
              Search
            </Button>
            <Button
              className="navBar_button"
              color="inherit"
              className={classes.navbar__button}
              onClick={(event) => history.push("/genres")}
            >
              Genres
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
