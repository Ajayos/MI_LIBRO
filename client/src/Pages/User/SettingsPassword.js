import { useCallback, useState, useEffect } from "react";
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
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	Divider,
	Skeleton,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useAuth } from "../../contexts/AuthContext";

export default function SettingsPassword() {
	const { isAuthenticated, updateUserPasswordFetch } = useAuth();
	const [errors, setErrors] = useState({});
	const [showPassword, setShowPassword] = useState(false);
	const [loading, setLoading] = useState(true); // Set initial loading state to true
	const [values, setValues] = useState({
		password: "",
		confirmPassword: "",
	});

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleInputChange = (event) => {
		setValues((prevState) => ({
			...prevState,
			[event.target.name]: event.target.value,
		}));
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const validateForm = () => {
		let errors = {};
		let isValid = true;

		if (!values.password) {
			isValid = false;
			errors.newPassword = "New Password is required";
		}

		if (!values.confirmPassword) {
			isValid = false;
			errors.confirmPassword = "Confirm Password is required";
		}

		if (values.password !== values.confirmPassword) {
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
				var { message, status } = updateUserPasswordFetch(values.password);
				if (status === 200) {
					window.location.reload();
				} else {
					setErrors({ password: message });
				}
				setLoading(false);
			} catch (error) {
				setLoading(false);
				setErrors({ email: "Invalid email/username or password" });
			}
		}
	};

	// Simulate loading delay and update the loading state after a delay
	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 2000); // Adjust the delay as needed

		return () => clearTimeout(timer);
	}, []);

	return (
		<form onSubmit={handleSubmit}>
			<Card>
				{loading ? (
					<CardHeader>
						<Skeleton variant='text' width={200} height={40} />
					</CardHeader>
				) : (
					<CardHeader subheader='Update password' title='Password' />
				)}
				<Divider />
				<CardContent>
					<Stack spacing={3} sx={{ maxWidth: 400 }}>
						{loading ? (
							<>
								<Skeleton variant='text' width={200} height={40} />
								<Skeleton variant='rectangular' height={56} />
								<Skeleton variant='rectangular' height={56} />
							</>
						) : (
							<>
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
										name='password'
										value={values.password}
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
										label={"password"}
										error={!!errors.password}
										helperText={errors.password}
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
										value={values.confirmPassword}
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
							</>
						)}
					</Stack>
				</CardContent>
				<Divider />
				{loading ? (
					<CardActions sx={{ justifyContent: "flex-end" }}>
						<Skeleton
							variant='rectangular'
							height={40}
							width={100}
							sx={{ justifyContent: "flex-end" }}
						/>
					</CardActions>
				) : (
					<CardActions sx={{ justifyContent: "flex-end" }}>
						<Button variant='contained' onClick={handleSubmit}>
							Update
						</Button>
					</CardActions>
				)}
			</Card>
		</form>
	);
}
