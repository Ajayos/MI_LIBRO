import React, { useState, useEffect,  } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { useAuth } from "../../contexts/AuthContext";
const UserEditForm = () => {
  const { isAuthenticated, IsPermit, user } = useAuth();
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [dobInputType, setDobInputType] = useState("text");
  useEffect(() => {
    setValues(user);
  }, [user]);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    // Calculate age based on date of birth
    if (name === "dob") {
      const age = calculateAge(value);
      setValues((prevValues) => ({
        ...prevValues,
        age: age,
      }));
    }
  };

  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age.toString();
  };

  const handleDobClick = () => {
    setDobInputType("date");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form validation
    const newErrors = {};
    if (values.name === "") {
      newErrors.name = "Name is required";
    }
    if (values.phone === "") {
      newErrors.phone = "Phone number is required";
    }
    if (values.dob === "") {
      newErrors.dob = "Date of Birth is required";
    }
    if (values.education === "") {
      newErrors.education = "Education is required";
    }
    if (values.address === "") {
      newErrors.address = "Address is required";
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", values);
      // Reset the form to default values
      setValues(user);
      setErrors({});
    }
  };

  const isFormValid = () => {
    const requiredFields = [
      "name",
      "phone",
      "dob",
      "age",
      "education",
      "address",
    ];
    return requiredFields.every((field) => values[field] !== "");
  };

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <Card>
        <CardHeader
          defaultExpanded // Set CardHeader to be expanded by default
          subheader="The information can be edited"
          title="Profile"
        />
        <br />
        <CardContent sx={{ pt: 0 }}>
          <Box>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  onChange={handleChange}
                  required
                  value={values.name}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  disabled
                  value={values.email}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth error={!!errors.phone}>
                  <InputLabel htmlFor="outlined-adornment-phoneNo">
                    Phone Number
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-phoneNo"
                    type="text"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    label="Phone Number"
                    autoFocus
                  />
                  {errors.phone && (
                    <Typography variant="body2" sx={{ color: "#f80202" }}>
                      {errors.phone}
                    </Typography>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                {dobInputType === "text" ? (
                  <TextField
                    fullWidth
                    label="Date of Birth"
                    name="dob"
                    onClick={handleDobClick}
                    required
                    value={values.dob}
                    autoFocus
                  />
                ) : (
                  <TextField
                    fullWidth
                    label="Date of Birth"
                    name="dob"
                    type="date"
                    onChange={handleChange}
                    required
                    value={values.dob}
                    autoFocus
                  />
                )}
                {errors.dob && (
                  <Typography variant="body2" sx={{ color: "#f80202" }}>
                    {errors.dob}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Age"
                  name="age"
                  onChange={handleChange}
                  value={values.age}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Education"
                  name="education"
                  onChange={handleChange}
                  required
                  value={values.education}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Address"
                  name="address"
                  onChange={handleChange}
                  required
                  value={values.address}
                  autoFocus
                />
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button variant="contained" disabled={!isFormValid()} type="submit">
            Save Details
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};

export default UserEditForm;
