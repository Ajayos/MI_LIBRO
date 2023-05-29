import { useState } from "react";
import {
  Link,
  Stack,
  IconButton,
  InputAdornment,
  TextField,
  Checkbox,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormHelperText,
  Avatar,
  Button,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useSnackbar } from "notistack";
import { useAuth } from "../../contexts/AuthContext";

export default function LoginForm() {
  const { enqueueSnackbar } = useSnackbar();
  const { isAuthenticated, user, SignUp } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    dob: "",
    age: "",
    education: "",
    address: "",
    newPassword: "",
    confirmPassword: "",
    pic: null,
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [avatarImage, setAvatarImage] = useState(null);

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
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    if (name === "dob") {
      const age = calculateAge(value);
      setFormData((prevFormData) => ({
        ...prevFormData,
        age: age.toString(),
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
    return age;
  };

  const handleTermsAcceptedChange = (event) => {
    setTermsAccepted(event.target.checked);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarImage(reader.result);
        setFormData((prevFormData) => ({
          ...prevFormData,
          pic: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.name) {
      isValid = false;
      errors.name = "Name is required";
    }

    if (!formData.email) {
      isValid = false;
      errors.email = "Email is required";
    }

    if (!formData.phoneNo) {
      isValid = false;
      errors.phoneNo = "Phone number is required";
    }

    if (!formData.dob) {
      isValid = false;
      errors.dob = "Date of Birth is required";
    }

    if (!formData.age) {
      isValid = false;
      errors.age = "Age is required";
    }

    if (!formData.education) {
      isValid = false;
      errors.education = "Education is required";
    }

    if (!formData.address) {
      isValid = false;
      errors.address = "Address is required";
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

    if (!termsAccepted) {
      isValid = false;
      errors.termsAccepted = "Please accept the terms and conditions";
    }

    if (!formData.pic) {
      isValid = false;
      errors.pic = "NO avatar found";
    }

    setErrors(errors);

    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      try {
        setLoading(true);
        const { message, status } = SignUp(formData);
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
    <>
      <form onSubmit={handleSubmit}>
        <Stack spacing={1} alignItems="center">
          <Typography variant="h5">Create an Account</Typography>
          <Typography variant="body2" sx={{ color: "#f80202" }}>
            {errors.name}
          </Typography>
          <FormControl fullWidth>
            <InputLabel htmlFor="outlined-adornment-name">Name</InputLabel>
            <OutlinedInput
              id="outlined-adornment-name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              label="Name"
              error={!!errors.name}
              helperText={errors.name}
            />
          </FormControl>

          <Typography variant="body2" sx={{ color: "#f80202" }}>
            {errors.email}
          </Typography>
          <FormControl fullWidth>
            <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
            <OutlinedInput
              id="outlined-adornment-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              label="Email"
              error={!!errors.email}
              helperText={errors.email}
            />
          </FormControl>

          <Typography variant="body2" sx={{ color: "#f80202" }}>
            {errors.phoneNo}
          </Typography>
          <FormControl fullWidth>
            <InputLabel htmlFor="outlined-adornment-phoneNo">
              Phone Number
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-phoneNo"
              type="text"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleInputChange}
              label="Phone Number"
              error={!!errors.phoneNo}
              helperText={errors.phoneNo}
            />
          </FormControl>

          <Stack direction="row" spacing={1}>
            <Typography variant="body2" sx={{ color: "#f80202" }}>
              {errors.dob}
            </Typography>
            <Typography variant="body2" sx={{ color: "#f80202" }}>
              {errors.age}
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            <FormControl fullWidth>
              <InputLabel htmlFor="outlined-adornment-dob">
                Date of Birth
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-dob"
                type={showDatePicker ? "date" : "text"}
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                onFocus={handleDateFocus}
                onBlur={() => setShowDatePicker(false)}
                label="Date of Birth"
                error={!!errors.dob}
                helperText={errors.dob}
              />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="outlined-adornment-age">Age</InputLabel>
              <OutlinedInput
                id="outlined-adornment-age"
                type="text"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                label="Age"
                error={!!errors.age}
                helperText={errors.age}
              />
            </FormControl>
          </Stack>

          <Typography variant="body2" sx={{ color: "#f80202" }}>
            {errors.education}
          </Typography>
          <FormControl fullWidth>
            <InputLabel htmlFor="outlined-adornment-education">
              Education
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-education"
              type="text"
              name="education"
              value={formData.education}
              onChange={handleInputChange}
              label="Education"
              error={!!errors.education}
              helperText={errors.education}
            />
          </FormControl>

          <Typography variant="body2" sx={{ color: "#f80202" }}>
            {errors.address}
          </Typography>
          <FormControl fullWidth>
            <InputLabel htmlFor="outlined-adornment-address">
              Address
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-address"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              label="Address"
              error={!!errors.address}
              helperText={errors.address}
            />
          </FormControl>

          <Typography variant="body2" sx={{ color: "#f80202" }}>
            {errors.newPassword}
          </Typography>
          <FormControl fullWidth>
            <InputLabel htmlFor="outlined-adornment-newpassword">
              New Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-newpassword"
              type={showPassword ? "text" : "password"}
              name="newPassword"
              value={formData.newPassword}
              onChange={handleInputChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    size="large"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              label="New Password"
              error={!!errors.newPassword}
              helperText={errors.newPassword}
            />
          </FormControl>

          <Typography variant="body2" sx={{ color: "#f80202" }}>
            {errors.confirmPassword}
          </Typography>
          <FormControl fullWidth>
            <InputLabel htmlFor="outlined-adornment-confirmpassword">
              Confirm Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-confirmpassword"
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    size="large"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              label="Confirm Password"
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
            />
          </FormControl>

          <input
            accept="image/*"
            id="outlined-button-file"
            type="file"
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />

          <label htmlFor="avatar">
            <input
              id="avatar"
              name="avatar"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageUpload}
            />
            <LoadingButton
              variant="contained"
              component="span"
              loading={loading}
              loadingPosition="start"
              startIcon={<Avatar alt="Avatar" src={formData.pic} />}
            >
              Upload Avatar
            </LoadingButton>
          </label>
          <Typography variant="body2" sx={{ color: "#f80202" }}>
            {errors.pic}
          </Typography>

          <Stack direction="row" alignItems="center" spacing={1}>
            <Checkbox
              checked={termsAccepted}
              onChange={handleTermsAcceptedChange}
              color="primary"
              sx={{ padding: 0 }}
            />
            <Typography variant="body2" color="textSecondary">
              I accept the{" "}
              <Link href="/terms" target="_blank" rel="noopener noreferrer">
                Terms and Conditions
              </Link>
            </Typography>
          </Stack>
          <FormHelperText sx={{ color: "#f80202" }}>
            {errors.termsAccepted}
          </FormHelperText>
          <LoadingButton
            variant="contained"
            fullWidth
            loading={loading}
            onClick={handleSubmit}
          >
            Sign Up
          </LoadingButton>
          <Typography variant="body2">
            Already have an account? <Link href="/login">Log In</Link>
          </Typography>
        </Stack>
      </form>
    </>
  );
}
