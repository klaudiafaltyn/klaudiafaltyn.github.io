import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";
import {
  Card,
  Grid,
  CardContent,
  CardMedia,
  IconButton,
  makeStyles,
  Typography,
  Chip,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    backgroundColor: "rgba(110,110,110,1)",
    color: "white",
    width: 350,
    borderRadius: 16,
    overflow: "visible",
    marginRight: 30,
    marginBottom: 30,
    "& h2": {
      fontWeight: "550",
    },
  },
  chip: {
    marginRight: 5,
  },
  description: {
    marginTop: 10,
  },
  button: {
    color: "white",
    fontWeight: "520",
    backgroundColor: "rgba(50,50,50,1)",
  },
  media: {
    borderRadius: "16px 16px  0 0 ",
    height: 250,
    "&:hover": {
      scale: 1.4,
      transition: "all .2s ease-in-out",
    },
  },
});

const ProjectItem = ({ project }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={
          project?.image ??
          "https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?cs=srgb&dl=pexels-pixabay-270360.jpg&fm=jpg"
        }
        title="Project image"
      />
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5" component="h2">
              {project.title}
              <IconButton
                size="large"
                color="inherit"
                target="_blank"
                rel="noreferrer"
                href={project?.url}
              >
                {project?.url?.includes("github") ? (
                  <GitHubIcon />
                ) : (
                  <LaunchIcon />
                )}
              </IconButton>
            </Typography>
            {project?.tags?.map((tag) => (
              <Chip className={classes.chip} size="small" label={tag} />
            ))}
          </Grid>
          <Grid item xs={12}>
            <Typography
              className={classes.description}
              variant="body1"
              color="white"
              component="p"
            >
              {project.description}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ProjectItem;
