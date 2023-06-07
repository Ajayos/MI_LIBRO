import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useSnackbar } from "notistack";
import { useAuth } from "../../contexts/AuthContext";
import { login } from "../../utils/handleAuth";

export default function LoginForm() {
	const navigate = useNavigate();
	const { enqueueSnackbar } = useSnackbar();
	const { isAuthenticated, user, Forgot } = useAuth();
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
			setLoading(true);
			await Forgot(formData.email, formData.dob, formData.newPassword)
				.then((response) => {
					console.log("h")
					enqueueSnackbar(response.data.message, { variant: "error" });
					setLoading(false);
				})
				.catch((error) => {
					console.log("hv")
					setLoading(false);
					if (error.response) {
						setErrors({
							email: error.response.data.message,
							password: error.response.data.message,
						});
						enqueueSnackbar(error.response.data.message, {
							variant: "error",
						});
					} else {
						setErrors({ email: "An error occurred" });
						enqueueSnackbar("An error occurred", { variant: "error" });
					}
				});
		}
	};

	return (
		<>
			<Stack spacing={1}>
				<Typography variant='body2' sx={{ color: "#f80202" }}>
					{errors.email}
				</Typography>
				<FormControl fullWidth>
					<InputLabel htmlFor='outlined-adornment-username-login'>
						{"Email / Username"}
					</InputLabel>
					<OutlinedInput
						id='outlined-adornment-username-login'
						type='text'
						name='email'
						value={formData.email}
						onChange={handleInputChange}
						label={"Username"}
						error={!!errors.email}
						helperText={errors.email}
					/>
				</FormControl>

				<Typography variant='body2' sx={{ color: "#f80202" }}>
					{errors.dob}
				</Typography>
				<FormControl fullWidth>
					<InputLabel htmlFor='outlined-adornment-dob-login'>
						{"Date of Birth"}
					</InputLabel>
					<OutlinedInput
						id='outlined-adornment-dob-login'
						type={showDatePicker ? "date" : "text"}
						name='dob'
						value={formData.dob}
						onChange={handleInputChange}
						onFocus={handleDateFocus}
						onBlur={() => setShowDatePicker(false)}
						label={"Date of Birth"}
						error={!!errors.dob}
						helperText={errors.dob}
					/>
				</FormControl>

				<Typography variant='body2' sx={{ color: "#f80202" }}>
					{errors.newPassword}
				</Typography>
				<FormControl fullWidth>
					<InputLabel htmlFor='outlined-adornment-newpassword-login'>
						{"New Password"}
					</InputLabel>
					<OutlinedInput
						id='outlined-adornment-newpassword-login'
						type={showPassword ? "text" : "password"}
						name='newPassword'
						value={formData.newPassword}
						onChange={handleInputChange}
						endAdornment={
							<InputAdornment position='end'>
								<IconButton
									aria-label='toggle password visibility'
									onClick={handleClickShowPassword}
									onMouseDown={handleMouseDownPassword}
									edge='end'
									size='large'
								>
									{showPassword ? <Visibility /> : <VisibilityOff />}
								</IconButton>
							</InputAdornment>
						}
						label={"New Password"}
						error={!!errors.newPassword}
						helperText={errors.newPassword}
					/>
				</FormControl>

				<Typography variant='body2' sx={{ color: "#f80202" }}>
					{errors.confirmPassword}
				</Typography>
				<FormControl fullWidth>
					<InputLabel htmlFor='outlined-adornment-confirmpassword-login'>
						{"Confirm Password"}
					</InputLabel>
					<OutlinedInput
						id='outlined-adornment-confirmpassword-login'
						type={showPassword ? "text" : "password"}
						name='confirmPassword'
						value={formData.confirmPassword}
						onChange={handleInputChange}
						endAdornment={
							<InputAdornment position='end'>
								<IconButton
									aria-label='toggle password visibility'
									onClick={handleClickShowPassword}
									onMouseDown={handleMouseDownPassword}
									edge='end'
									size='large'
								>
									{showPassword ? <Visibility /> : <VisibilityOff />}
								</IconButton>
							</InputAdornment>
						}
						label={"Confirm Password"}
						error={!!errors.confirmPassword}
						helperText={errors.confirmPassword}
					/>
				</FormControl>

				<LoadingButton
					fullWidth
					size='large'
					type='submit'
					variant='contained'
					disabled={loading}
					onClick={handleSubmit}
				>
					{loading && <>{"Loading..."}</>}
					{!loading && <>{"CHANGE PASSWORD"}</>}
				</LoadingButton>
			</Stack>
		</>
	);
}
