import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import PROFILE from "../../image/logo.png";

const Logo = ({ message }) => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Avatar
          src={PROFILE}
          sx={{ width: 50, height: 50, marginRight: "20px" }}
        />
        <Typography
          variant="h3"
          sx={{
            color: "#eeff00",
            position: "relative",
            marginTop: "8px",
            marginLeft: "10px",
          }}
        >
          Mi LIBRO
        </Typography>
      </Box>
      <br />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography color="rgb(131, 132, 138)" variant="h5">
          {message}
        </Typography>
        <br />
        <br />
      </Box>
    </>
  );
};

export default Logo;
