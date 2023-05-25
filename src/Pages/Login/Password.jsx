import React, { useState } from "react";
import LoginBox from "../../components/Login/LoginBox";
import {
  Box,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import CustomButton from "./../../components/Button/CustomButton";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect } from "react";
import { useSnackbar } from "notistack";
import Navbar from "../../components/Navbar/Navbar";

const Login = () => {
  const { enqueueSnackbar } = useSnackbar();
  // eslint-disable-next-line 
  const { isAuthenticated, SignIn } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      window.location.replace("/");
    }
  }, [isAuthenticated]);

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    dob: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleDateFocus = () => {
    setShowDatePicker(true);
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

    if (!formData.dob) {
        isValid = false;
        errors.dob = "Date of Birth is required";
      }

    if (!formData.newPassword) {
      isValid = false;
      errors.newPassword = "New Password is required";
    }

    if (!formData.confirmPassword) {
      isValid = false;
      errors.confirmPassword = "Confirm Password is required";
    }

    if (formData.newPassword !== formData.confirmPassword) {
      isValid = false;
      errors.confirmPassword = "Passwords do not match";
    }

    setErrors(errors);

    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      try {
        setLoading(true);
        // Change password logic
        // ...
        setLoading(false);
        enqueueSnackbar("Password changed successfully", { variant: "success" });
      } catch (error) {
        setLoading(false);
        setErrors({ email: "Invalid email/username or password" });
      }
    }
  };

  return (
    <div>
      
      <Navbar />
      <LoginBox message={"Change Your Password"}>
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
                {errors.dob}
              </Typography>
              <FormControl fullWidth>
                <InputLabel
                  htmlFor="outlined-adornment-dob-login"
                  sx={{ color: "#03e9f4" }}
                >
                  {"Date of Birth"}
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-dob-login"
                  type={showDatePicker ? "date" : "text"}
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                  onFocus={handleDateFocus}
                  onBlur={() => setShowDatePicker(false)}
                  sx={{ color: "#ffffff", backgroundColor: "#000000" }}
                  label={"Date of Birth"}
                  error={!!errors.dob}
                  helperText={errors.dob}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" sx={{ color: "#f80202" }}>
                {errors.newPassword}
              </Typography>
              <FormControl fullWidth>
                <InputLabel
                  htmlFor="outlined-adornment-newpassword-login"
                  sx={{ color: "#03e9f4" }}
                >
                  {"New Password"}
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-newpassword-login"
                  type={showPassword ? "text" : "password"}
                  name="newPassword"
                  value={formData.newPassword}
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
                  label={"New Password"}
                  error={!!errors.newPassword}
                  helperText={errors.newPassword}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" sx={{ color: "#f80202" }}>
                {errors.confirmPassword}
              </Typography>
              <FormControl fullWidth>
                <InputLabel
                  htmlFor="outlined-adornment-confirmpassword-login"
                  sx={{ color: "#03e9f4" }}
                >
                  {"Confirm Password"}
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-confirmpassword-login"
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
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
                  label={"Confirm Password"}
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword}
                />
              </FormControl>
            </Grid>
           
          </Grid>
          <CustomButton
            type="submit"
            text="Change Password"
            fullWidth
            disabled={loading}
            onClick={handleSubmit}
          >
            {loading && <>{"Loading..."}</>}
            {!loading && <>{"SUBMIT"}</>}
          </CustomButton>
          <CustomButton
            sx={{ width: "30%" }}
            onClick={() => window.location.replace("/login")}
            disabled={loading}
          >
            {loading && <>{"Loading..."}</>}
            {!loading && <>{"USER LOGIN"}</>}
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
