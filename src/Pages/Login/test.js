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
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loginmod from "../../theme/Login";
import { buttonStyles } from "../../theme/buttonStyles";

const Admin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Frontend validations
    if (!username || !password) {
      toast.error("Please enter both username and password.");
      return;
    }

    // Prepare data to be sent to the backend
    const userData = {
      username,
      password,
    };

    // Send data to the backend
    axios
      .post("/api/v1/admin/login", userData)
      .then((response) => {
        // Successful login
        toast.success("Login successful!");

        // Wait for a second and then redirect to /home page
        setTimeout(() => {
          window.location.replace("/home");
        }, 1000);
      })
      .catch((error) => {
        // Error handling
        if (error.response) {
          // Request made and server responded with an error status
          toast.error(error.response.data.message);
        } else if (error.request) {
          // The request was made but no response was received
          toast.error("No response received from the server.");
        } else {
          // Something else happened in making the request
          toast.error("An error occurred while processing the request.");
        }
      });
  };

  return (
    <Loginmod message="ADMIN DASHBOARD LOGIN">
      <form onSubmit={handleSubmit}>
        <div style={{ position: "relative", padding: 12 }}>
          <FormControl fullWidth>
            <InputLabel htmlFor="outlined-adornment-username-login" sx={{ color: "#03e9f4" }}>
              {"Email / Username"}
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-username-login"
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              sx={{ color: "#ffffff", backgroundColor: "#000000" }}
              label={"Username"}
            />
          </FormControl>
          <br />
          <br />

          <FormControl fullWidth>
            <InputLabel htmlFor="outlined-adornment-password-login" sx={{ color: "#03e9f4" }}>
              {"Enter Password"}
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password-login"
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
                    {showPassword ? <Visibility sx={{ color: "#03e9f4" }} /> : <VisibilityOff sx={{ color: "#03e9f4" }} />}
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
            <Box sx={{ display: "flex", alignItems: "center", marginLeft: -2 }}>
              <Checkbox color="primary" />
              <Typography variant="body1" sx={{ color: "#fff" }}>
                Keep me logged in
              </Typography>
            </Box>
            <Box></Box>
          </Box>
        </div>
        <Button onClick={handleSubmit} type="submit" fullWidth sx={{ ...buttonStyles }}>
          <span /> <span /> <span />
          LOGIN
        </Button>
      </form>
      <Button
        type="submit"
        fullWidth
        sx={{
          ...buttonStyles,
          width: "30%",
        }}
        onClick={() => window.location.replace("/login")}
      >
        <span /> <span /> <span />
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
        onClick={() => toast.success("Login successful!")}
      >
        <span /> <span /> <span />
        CREATE ACCOUNT
      </Button>
    </Loginmod>
  );
};

export default Admin;
