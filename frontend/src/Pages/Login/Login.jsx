import React, { useState } from "react";
import LoginBox from "../../components/Login/LoginBox";
import {
  Box,
  Checkbox,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import CustomButton from "./../../components/Button/CustomButton";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect } from "react";
import { login } from "../../utils/handleAuth";
import { useSnackbar } from "notistack";
import Navbar from "../../components/Navbar/Navbar";

const Login = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { isAuthenticated, SignIn } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      window.location.replace("/");
    }
  }, [isAuthenticated]);

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
        // Login user
        var { message, status } = SignIn(formData.email, formData.password);
        if (status === 200) {
          enqueueSnackbar(message, { variant: "success" });
        } else {
          enqueueSnackbar(message, { variant: "error" });
          setErrors({ email: message, password: message });
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setErrors({ email: "Invalid email/username or password" });
      }
    }
  };
  return (
    <div>
      
      <Navbar />
      <LoginBox message={"Hi, Welcome Back"}>
        <Box component="form" sx={{ mt: 3 }} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body2" sx={{ color: "#f80202" }}>
                {errors.email}
              </Typography>
              <FormControl fullWidth>
                <InputLabel
                  htmlFor="outlined-adornment-username-login"
                  sx={{ color: "#03e9f4" }}
                >
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
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" sx={{ color: "#f80202" }}>
                {errors.password}
              </Typography>
              <FormControl fullWidth>
                <InputLabel
                  htmlFor="outlined-adornment-password-login"
                  sx={{ color: "#03e9f4" }}
                >
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
                        {showPassword ? (
                          <Visibility sx={{ color: "#03e9f4" }} />
                        ) : (
                          <VisibilityOff sx={{ color: "#03e9f4" }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label={"password"}
                  error={!!errors.password}
                  helperText={errors.password}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
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
                  <Link href="/password" sx={{ color: "#126aee" }}>
                    Forgot password
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <CustomButton
            type="submit"
            text="Login"
            fullWidth
            disabled={loading}
            onClick={handleSubmit}
          >
            {loading && <>{"Loading..."}</>}
            {!loading && <>{"SUBMIT"}</>}
          </CustomButton>
          <CustomButton
            sx={{ width: "30%" }}
            onClick={() => window.location.replace("/signup")}
            disabled={loading}
          >
            {loading && <>{"Loading..."}</>}
            {!loading && <>{"CREATE ACCOUNT"}</>}
          </CustomButton>
          <CustomButton
            sx={{ width: "30%", marginLeft: 26 }}
            onClick={() => window.location.replace("/admin")}
            disabled={loading}
          >
            {loading && <>{"Loading..."}</>}
            {!loading && <>{"ADMIN LOGIN"}</>}
          </CustomButton>
          <br />
          <br />
        </Box>
      </LoginBox>
    </div>
  );
};

export default Login;
