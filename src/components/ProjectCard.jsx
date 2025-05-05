import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

function ProjectCard({ title, description }) {
  return (
    <Card
      elevation={3}
      sx={{ transition: "0.3s", "&:hover": { boxShadow: 6 } }}
    >
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
