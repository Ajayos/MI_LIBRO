import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import Logo from "../image/logo.png";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "rgb(27, 29, 36)",
      minHeight: "110vh",
    },
  }));

const Login = ({ message, children, classes: cls }) => {
    const classes = useStyles();
  return (
    <Box
      className={cls ? cls : classes.root}
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      width={1}
      background="linear-gradient(#78a5f8, #d6d9dd)"
    >
      <Box
        width={600}
        padding={4}
        bgcolor="rgb(21, 21, 26)"
        boxShadow="0px 10px 25px rgb(60, 60, 255)"
        borderRadius={7}
        sx={{ boxSizing: "border-box", position: "relative" }}
      >
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Avatar
            src={Logo}
            sx={{ width: 60, height: 60, marginRight: "20px" }}
          />
          <Typography
            variant="h3"
            sx={{
              color: "#eeff00",
              position: "relative",
              marginTop: "10px",
              marginLeft: "10px",
            }}
          >
            Mi LIBRO
          </Typography>
        </Box>
        <br /><br />
        <Box padding={1} sx={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: 1 }}>
          <Typography color="rgb(131, 132, 138)" variant="h3" >
            {message}
          </Typography>
          <br /><br />
        </Box>

        {children}
      </Box>
    </Box>
  );
};

export default Login;
