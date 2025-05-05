import React, { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import ProjectCard from "../components/ProjectCard";
import { useTitle } from "../context/TitleContext";

function Projects() {
  const { setTitle } = useTitle();
  useEffect(() => setTitle("Projects"), []);

  return (
    <>
      <Typography variant="h4" mb={2}>
        Projects
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <ProjectCard
            title="MyAttorni"
            description="A tool for lawyers to calculate costs & reimbursements in Pakistan."
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ProjectCard
            title="Radical9"
            description="Website for the agency I run."
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Projects;
