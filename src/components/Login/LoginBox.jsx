import {
  Box,
  CssBaseline,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/system";
import React from "react";
import Logo from "../Logo/Logo";
import bgg from '../../image/login.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgb(90, 91, 92)",
    backgroundImage: `url(https://png.pngtree.com/background/20210710/original/pngtree-black-brick-wall-picture-image_989135.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
    minHeight: "10vh",
  },
}));

const LoginBox = ({ message, children, cls }) => {
  const classes = useStyles();
  return (
    <Box
      className={cls ? cls : classes.root}
      height="100vh"
      display="flex"
      width={1}
      sx={{
        boxSizing: "border-box",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: "''",
          position: "absolute",
          width: "100%",
          height: 2,
          background: "linear-gradient(90deg, transparent, #03e9f4)",
          animation: "loadingAnimation 1s linear infinite",
        },

        "@keyframes loadingAnimation": {
          "0%": { left: "-100%" },
          "50%": { left: "100%" },
          "100%": { left: "100%" },
        },
      }}
    >
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
         width={600}
         padding={3}
         borderRadius={7}
         boxShadow={21}
         backgroundColor={"rgb(36, 38, 41)"}
          sx={{
            boxSizing: "border-box",
            position: "relative",
            marginTop: 10,
            marginLeft: -20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Logo message={message} />
            {children}
        </Box>
      </Container>
    </Box>
  );
};

export default LoginBox;
