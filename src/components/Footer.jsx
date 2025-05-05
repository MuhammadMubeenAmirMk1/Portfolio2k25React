import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        bgcolor: "grey.800",
        p: 2,
      }}
    >
      <Typography variant="body2" color="white" align="center">
        © 2025 Muhammad Mubeen Amir
      </Typography>
    </Box>
  );
}

export default Footer;
