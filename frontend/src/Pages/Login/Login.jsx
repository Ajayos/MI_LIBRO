import React, { useState } from "react";
import {
  Button,
  Box,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Avatar,
  Typography,
  Grid,
  Stack,
  Divider,
  Checkbox,
  Link,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Logo from "../../image/logo.png";
import { buttonStyles } from "../../theme/buttonStyles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgb(10, 22, 66)", // Replace with your desired background color
    minHeight: "120vh",
  },
}));
const Login = () => {
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  function handleSubmit(event) {
    event.preventDefault();
    var username = document.getElementsByName("username")[0].value;
    var password = document.getElementsByName("password")[0].value;
    var data = { username: username, password: password };

    // send the POST request
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((dat) => {
        if (dat.status === "ok") {
          document.cookie = "username=" + data.username;
          document.cookie = "password=" + data.password;
          localStorage.setItem("username", data.username);
          localStorage.setItem("password", data.password);
          // redirect the user to the home page
          window.location.href = "/admin";
        } else {
          alert("Wrong username or password");
        }
      })
      .catch((error) => console.error(error));
  }

  return (
    <Box
      className={classes.root}
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
        boxShadow="0px 10px 25px rgba(255, 253, 253, 0.6)"
        borderRadius={5}
        sx={{ boxSizing: "border-box", position: "relative" }}
      >
        <Box
          width={800}
          padding={5}
          marginLeft={7}
          sx={{
            position: "relative",
            display: "flex",
          }}
        >
          <Avatar
            src={Logo}
            sx={{ width: 80, height: 80, marginRight: "20px" }}
          />
          <Typography
            variant="h2"
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
        <Grid item>
          <Stack alignItems="center" justifyContent="center" spacing={1}>
            <Typography
              color={"rgb(131, 132, 138)"}
              gutterBottom
              variant={"h3"}
            >
              {"Hi, Welcome Back"}
            </Typography>
          </Stack>
        </Grid>

        <form onSubmit={handleSubmit}>
          <div style={{ position: "relative", padding: 12 }}>
            <FormControl fullWidth>
              <InputLabel
                htmlFor="outlined-adornment-password-login"
                sx={{ color: "#03e9f4"  }}
              >
                {"Email / Username"}
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-username-login"
                type="text"
                name="password"
                sx={{ color: "#ffffff", backgroundColor: "#000000" }}
                label={"Username"}
              />
            </FormControl>
            <br />
            <br />

            <FormControl fullWidth>
              <InputLabel
                htmlFor="outlined-adornment-password-login"
                sx={{ color: "#03e9f4"  }}
              >
                {"Enter Password"}
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password-login"
                type={showPassword ? "text" : "password"}
                name="password"
                sx={{ color: "#ffffff", backgroundColor: "#000000" }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="large"
                    >
                      {showPassword ? (
                        <Visibility sx={{ color: "#03e9f4"  }} />
                      ) : (
                        <VisibilityOff sx={{ color: "#03e9f4"  }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label={"password"}
              />
            </FormControl>

            <Box
              padding={1}
              sx={{
                boxSizing: "border-box",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{ display: "flex", alignItems: "center", marginLeft: -2 }}
              >
                <Checkbox color="primary" />
                <Typography variant="body1" sx={{ color: "#fff" }}>
                  Keep me logged in
                </Typography>
              </Box>
              <Box>
                <Link href="/forgotpassword" variant="body1" sx={{ color: "#fff" }} >
                  Forgot password
                </Link>
              </Box>
            </Box>
          </div>
          <Button
            type="submit"
            fullWidth
            sx={{
              ...buttonStyles,
              // Add or modify items in the sx prop
              margin: "10px", // Add margin
              padding: "5px", // Modify padding
            }}
            >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      LOGIN
    </Button>
        </form>
        <Divider />
        <Divider sx={{ color: "white" }} />
        <Divider />
        <Button
          type="submit"
          fullWidth
          sx={{
            position: "relative",
            display: "inline-block",
            padding: "10px 20px",
            color: "#03e9f4",
            fontSize: 16,
            textDecoration: "none",
            textTransform: "uppercase",
            overflow: "hidden",
            transition: "0.5s",
            marginTop: 4,
            letterSpacing: 4,
            width: "30%", // Added width of 30%
            "&:hover": {
              background: "#03e9f4",
              color: "#fff",
              borderRadius: 5,
              boxShadow:
                "0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 100px #03e9f4",
            },
            "& span": { position: "absolute", display: "block" },
            "& span:nth-child(1)": {
              top: 0,
              left: "-100%",
              width: "100%",
              height: 2,
              background: "linear-gradient(90deg, transparent, #03e9f4)",
              animation: "btnAnim1 1s linear infinite",
            },
            "@keyframes btnAnim1": {
              "0%": { left: "-100%" },
              "50%, 100%": { left: "100%" },
            },
            "& span:nth-child(2)": {
              top: "-100%",
              right: 0,
              width: 2,
              height: "100%",
              background: "linear-gradient(180deg, transparent, #03e9f4)",
              animation: "btnAnim2 1s linear infinite",
              animationDelay: "0.25s",
            },
            "@keyframes btnAnim2": {
              "0%": { top: "-100%" },
              "50%, 100%": { top: "100%" },
            },
            "& span:nth-child(3)": {
              bottom: 0,
              right: "-100%",
              width: "100%",
              height: 2,
              background: "linear-gradient(270deg, transparent, #03e9f4)",
              animation: "btnAnim3 1s linear infinite",
              animationDelay: "0.5s",
            },
            "@keyframes btnAnim3": {
              "0%": { right: "-100%" },
              "50%, 100%": { right: "100%" },
            },
            "& span:nth-child(4)": {
              bottom: "-100%",
              left: 0,
              width: 2,
              height: "100%",
              background: "linear-gradient(360deg, transparent, #03e9f4)",
              animation: "btnAnim4 1s linear infinite",
              animationDelay: "0.75s",
            },
            "@keyframes btnAnim4": {
              "0%": { bottom: "-100%" },
              "50%, 100%": { bottom: "100%" },
            },
          }}
          onClick={() => window.location.replace("/admin")}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          ADMIN LOGIN
        </Button>

        <Button
          type="submit"
          fullWidth
          sx={{
            position: "relative",
            display: "inline-block",
            padding: "10px 20px",
            color: "#03e9f4",
            fontSize: 16,
            textDecoration: "none",
            textTransform: "uppercase",
            overflow: "hidden",
            transition: "0.5s",
            marginTop: 4,
            marginLeft: 26,
            letterSpacing: 4,
            width: "30%", // Added width of 30%
            "&:hover": {
              background: "#03e9f4",
              color: "#fff",
              borderRadius: 5,
              boxShadow:
                "0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 100px #03e9f4",
            },
            "& span": { position: "absolute", display: "block" },
            "& span:nth-child(1)": {
              top: 0,
              left: "-100%",
              width: "100%",
              height: 2,
              background: "linear-gradient(90deg, transparent, #03e9f4)",
              animation: "btnAnim1 1s linear infinite",
            },
            "@keyframes btnAnim1": {
              "0%": { left: "-100%" },
              "50%, 100%": { left: "100%" },
            },
            "& span:nth-child(2)": {
              top: "-100%",
              right: 0,
              width: 2,
              height: "100%",
              background: "linear-gradient(180deg, transparent, #03e9f4)",
              animation: "btnAnim2 1s linear infinite",
              animationDelay: "0.25s",
            },
            "@keyframes btnAnim2": {
              "0%": { top: "-100%" },
              "50%, 100%": { top: "100%" },
            },
            "& span:nth-child(3)": {
              bottom: 0,
              right: "-100%",
              width: "100%",
              height: 2,
              background: "linear-gradient(270deg, transparent, #03e9f4)",
              animation: "btnAnim3 1s linear infinite",
              animationDelay: "0.5s",
            },
            "@keyframes btnAnim3": {
              "0%": { right: "-100%" },
              "50%, 100%": { right: "100%" },
            },
            "& span:nth-child(4)": {
              bottom: "-100%",
              left: 0,
              width: 2,
              height: "100%",
              background: "linear-gradient(360deg, transparent, #03e9f4)",
              animation: "btnAnim4 1s linear infinite",
              animationDelay: "0.75s",
            },
            "@keyframes btnAnim4": {
              "0%": { bottom: "-100%" },
              "50%, 100%": { bottom: "100%" },
            },
          }}
          onClick={() => window.location.replace("/signup")}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          CREATE ACCOUNT
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
