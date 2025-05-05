import React, { useEffect } from "react";
import { Typography, Box, Avatar, Paper, Stack } from "@mui/material";
import { useTitle } from "../context/TitleContext";

function Home() {
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle("Home");
  }, [setTitle]);

  return (
    <Paper elevation={3} sx={{ p: 4, textAlign: "center" }}>
      <Stack spacing={2} alignItems="center">
        <Avatar
          src="/profile.png"
          alt="Muhammad Mubeen Amir"
          sx={{ width: 150, height: 150 }}
        />
        <Typography variant="h4">Muhammad Mubeen Amir</Typography>
        <Typography variant="h6" color="error">
          UI/UX Designer
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 600 }}>
          I have 1.5 years of experience in UI/UX design. I work as a freelancer
          and collaborate with both companies and individuals on design
          projects. I enjoy crafting intuitive, user-friendly digital
          experiences.
        </Typography>
      </Stack>
    </Paper>
  );
}

export default Home;
