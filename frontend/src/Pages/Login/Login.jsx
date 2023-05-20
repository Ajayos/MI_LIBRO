import React, { useState } from "react";
import {
  Button,
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Typography,
  Checkbox,
  Link,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { buttonStyles } from "../../theme/buttonStyles";
import Loginmod from "../../theme/Login";
import axios from "axios";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.email) {
      isValid = false;
      errors.email = "Email/Username is required";
    }

    if (!formData.password) {
      isValid = false;
      errors.password = "Password is required";
    }

    setErrors(errors);

    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      try {
        setLoading(true);

        // Send login request to the backend
        const response = await axios.post("/api/login", formData);

        setLoading(false);

        // Wait for a second and then redirect to the '/home' page
        setTimeout(() => {
          window.location.replace("/home");
        }, 1000);
      } catch (error) {
        setLoading(false);

        // Display error message
        setErrors({ email: "Invalid email/username or password" });
      }
    }
  };

  return (
    <Loginmod message="Hi, Welcome Back">
      <form onSubmit={handleSubmit}>
        <div style={{ position: "relative", padding: 12 }}>
          <FormControl fullWidth>
            <InputLabel htmlFor="outlined-adornment-username-login" sx={{ color: "#03e9f4" }}>
              {"Email / Username"}
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-username-login"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              sx={{ color: "#ffffff", backgroundColor: "#000000" }}
              label={"Username"}
              error={!!errors.email}
              helperText={errors.email}
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
              value={formData.password}
              onChange={handleInputChange}
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
              error={!!errors.password}
              helperText={errors.password}
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
            <Box>
              <Link href="/forgotpassword" variant="body1" sx={{ color: "#fff" }}>
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
          }}
          disabled={loading}
        >
          <span /> <span /> <span /><span />
          {loading ? <>Loading...</> : <>Login</>}
        </Button>
      </form>
      <Button
        type="submit"
        fullWidth
        sx={{
          ...buttonStyles,
          width: "30%",
        }}
        onClick={() => window.location.replace("/admin")}
      >
        <span /> <span /> <span /><span />
        ADMIN LOGIN
      </Button>

      <Button
        type="submit"
        fullWidth
        sx={{
          ...buttonStyles,
          width: "30%",
          marginLeft: 26,
        }}
        onClick={() => window.location.replace("/signup")}
      >
        <span /> <span /> <span /><span />
        CREATE ACCOUNT
      </Button>
    </Loginmod>
  );
};

export default Login;
