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
//import { Visibility, VisibilityOff } from "@mui/icons-material";
import { buttonStyles } from "../../theme/buttonStyles";
import Loginmod from "../../theme/Login"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgb(10, 22, 66)", // Replace with your desired background color
    minHeight: "170vh",
  },
}));

const Signup = () => {
  const classes = useStyles();
  const [iferror, setiferror] = useState(false)

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
    var cpassword = document.getElementsByName("cpassword")[0].value
    var data = { username: username, password: password };
    if (!username || !password) {

    }
    if (password !== cpassword) {
      setiferror(true)
      alert("Passwords do not match");
      return;
    }

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
    <Loginmod message="Hi, Welcome" classes={classes.root}>
      <Stack alignItems="center" justifyContent="center" spacing={3}>
        <form onSubmit={handleSubmit}>
          <div style={{ position: "relative", padding: 12 }}>
            <FormControl fullWidth className={classes.formControl}>
              <InputLabel sx={{ color: "#03e9f4" }} >Name</InputLabel>
              <OutlinedInput
                error={iferror}
                type="text"
                name="name"
                sx={{ color: "#ffffff", backgroundColor: "#000000" }}
                label="Name"
              />
            </FormControl>
            <br />
            <br />
            <FormControl fullWidth className={classes.formControl}>
              <InputLabel sx={{ color: "#03e9f4" }}>Place</InputLabel>
              <OutlinedInput
                type="text"
                name="place"
                sx={{ color: "#ffffff", backgroundColor: "#000000" }}
                label="Place"
              />
            </FormControl>
            <br />
            <br />
            <FormControl fullWidth className={classes.formControl}>
              <InputLabel sx={{ color: "#03e9f4" }}>Age</InputLabel>
              <OutlinedInput
                type="number"
                name="age"
                sx={{ color: "#ffffff", backgroundColor: "#000000" }}
                label="Age"
              />
            </FormControl>
            <br />
            <br />
            <FormControl fullWidth className={classes.formControl}>
              <InputLabel sx={{ color: "#03e9f4" }}>Email ID</InputLabel>
              <OutlinedInput
                type="email"
                name="email"
                sx={{ color: "#ffffff", backgroundColor: "#000000" }}
                label="Email ID"
              />
            </FormControl>
            <br />
            <br />
            <FormControl fullWidth className={classes.formControl}>
              <InputLabel sx={{ color: "#03e9f4" }}>Education</InputLabel>
              <OutlinedInput
                type="text"
                name="education"
                sx={{ color: "#ffffff", backgroundColor: "#000000" }}
                label="Education"
              />
            </FormControl>
            <br />
            <br />
            <FormControl fullWidth className={classes.formControl}>
              <InputLabel sx={{ color: "#03e9f4" }}>Contact Details</InputLabel>
              <OutlinedInput
                type="tel"
                name="phoneNumber"
                sx={{ color: "#ffffff", backgroundColor: "#000000" }}
                label="Phone Number"
              />
              <OutlinedInput
                type="email"
                name="email"
                sx={{ color: "#ffffff", backgroundColor: "#000000" }}
                label="Email ID"
              />
            </FormControl>
            <br />
            <br />
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
                  I agree to the terms and conditions (if the book is not
                  returned or damaged, a fine will be charged).
                </Typography>
              </Box>
            </Box>
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
            </Box>
          </div>
          <Button
            type="submit"
            fullWidth
            sx={{
              ...buttonStyles,
            }}
          >
            <span /> <span /> <span /><span />
            SUBMIT
          </Button>
        </form>
      </Stack>
      <Button
        type="submit"
        fullWidth
        sx={{
          ...buttonStyles,
          width: "30%",
        }}
        onClick={() => window.location.replace("/login")}
      >
        <span /> <span /> <span /><span />
        USER LOGIN
      </Button>

      <Button
        type="submit"
        fullWidth
        sx={{
          ...buttonStyles,
          width: "30%",
          marginLeft: 26,
        }}
        onClick={() => window.location.replace("/admin")}
      >
        <span /> <span /> <span /><span />
        ADMIN LOGIN
      </Button>
    </Loginmod>
  );
};

export default Signup;
