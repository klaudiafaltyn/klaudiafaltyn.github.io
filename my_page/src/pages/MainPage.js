import React, { useState } from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import GetAppIcon from "@material-ui/icons/GetApp";
import DoneIcon from "@material-ui/icons/Done";
import InstagramIcon from "@material-ui/icons/Instagram";
import LoopIcon from "@material-ui/icons/Loop";
import { Grid, Typography, Card, Button, makeStyles } from "@material-ui/core";
import CustomSnackbar from "../components/CustomSnackbar";
import cv from "../assets/CV_Klaudia_Faltyn.pdf";
import me from "../assets/me.jpg";
import { Instagram } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    maxWidth: 900,
    marginTop: 50,
    marginLeft: "auto",
    marginRight: "auto",
    padding: "0 16px",
    borderRadius: 16,
    backgroundImage: `linear-gradient(to left,  rgba(0,0, 0, 0.4) 0%,rgba(0, 0, 0, 0.95) 70%), url(${me})`,
    backgroundPosition: "right",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  titleItem: {
    marginTop: 10,
  },
  alignedRow: {
    display: "flex",
    alignItems: "center",
  },
  "@keyframes spin-animation": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(359deg)",
    },
  },
  iconRotate: {
    animation: "$spin-animation 0.5s infinite",
    display: "inline-block",
  },
  italicText: {
    fontSize: 17,
    fontStyle: "italic",
  },
});

const MainPage = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const classes = useStyles();

  const onCopy = () => {
    const textField = document.createElement("textarea");
    textField.innerText = "kfaltyn97@gmail.com";
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
    setOpenSnackbar(true);
  };

  return (
    <Grid container spacing={2} className={classes.root}>
      <CustomSnackbar
        message="Mail copied to clipboard"
        open={openSnackbar}
        setOpen={setOpenSnackbar}
      />
      <Grid item xs={12} className={classes.titleItem}>
        <Typography variant="h2">Klaudia Faltyn</Typography>
        <div className={classes.alignedRow}>
          <Typography variant="body1">kfaltyn97(at)gmail(dot)com</Typography>
          <Button variant="text" onClick={onCopy} size="large" color="inherit">
            Copy
          </Button>
        </div>
      </Grid>
      <Grid item xs={1}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/klaudia-faltyn-a2a94b1a5/"
        >
          <LinkedInIcon fontSize="large" />
        </a>
      </Grid>
      <Grid item xs={1}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/klaudiafaltyn"
        >
          <GitHubIcon fontSize="large" />
        </a>
      </Grid>
      <Grid item xs={1}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/kllauddia/"
        >
          <InstagramIcon fontSize="large" />
        </a>
      </Grid>
      <Grid item xs={1}>
        <Button color="inherit" href={cv} download="CV_Klaudia_Faltyn.pdf">
          <Typography variant="h5">CV</Typography>
          <GetAppIcon />
        </Button>
      </Grid>
      <Grid item xs={12} className={classes.alignedRow}>
        <DoneIcon />
        &nbsp;
        <Typography variant="h6">
          IT technician,
          <br />
          <span className={classes.italicText}>TEB Edukacja</span>
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.alignedRow}>
        <DoneIcon />
        &nbsp;
        <Typography variant="h6">
          Bachelor degree in Bioinformatics,
          <br />
          <span className={classes.italicText}>
            Wrocław University of Environmental and Life Sciences
          </span>
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.alignedRow}>
        <LoopIcon className={classes.iconRotate} /> &nbsp;
        <Typography variant="h6">
          Master of Science degree in Bioinformatics,
          <br />
          <span className={classes.italicText}>
            Wrocław University of Environmental and Life Sciences
          </span>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default MainPage;
