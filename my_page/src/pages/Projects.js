import React from "react";
import { makeStyles } from "@material-ui/core";
import ProjectItem from "../components/ProjectItem";
import projects from "../containers/projects";

const useStyles = makeStyles({
  root: {
    maxWidth: 1200,
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexShrink: "0",
    flexWrap: "wrap",
  },
});

const Projects = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {projects.map((item) => (
        <ProjectItem project={item} key={item.title} />
      ))}
    </div>
  );
};

export default Projects;
