import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useLocation } from "react-router-dom";
import bg from "../assets/bg.jpg";

const useStyles = makeStyles({
  root: {
    background: "black",
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
  },
  navigationContainer: {
    display: "flex",
    justifyContent: "flex-end",
    height: 100,
    opacity: "0.6",
    marginBottom: 50,
  },
  navigation: {
    padding: 10,
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    "& a": {
      color: "white",
      textDecoration: "none",
      marginRight: 25,
      "&:hover": {
        color: "gray",
        transition: "all .2s ease-in-out",
      },
    },
  },
  content: {
    height: "100%",
    marginLeft: "auto",
    marginRight: "auto",
  },
});
const Navigation = ({ children }) => {
  console.log(bg);
  const location = useLocation();
  console.log(location);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.navigationContainer}>
        <div className={classes.navigation}>
          <Link to="/">
            <Typography variant="h3">About</Typography>
          </Link>
          <Link to="/projects">
            <Typography variant="h3">All projects</Typography>
          </Link>
        </div>
      </div>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default Navigation;
