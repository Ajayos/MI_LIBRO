import React, { useState, useEffect } from "react";
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
import { useAuth } from "../../../contexts/AuthContext";
const UserEditForm = () => {
	const { AdminGetUserData_, AdminUpdateUserDataFetch } = useAuth();
	const [values, setValues] = useState({});
	const [errors, setErrors] = useState({});
	const [dobInputType, setDobInputType] = useState("text");
	useEffect(() => {
		async function getData() {
			var data = await AdminGetUserData_();
			setValues(data);
			var ret = await convertDate(data.dob);
			setValues((prevValues) => ({
				...prevValues,
				["dob"]: ret,
			}));
		}
		getData();
	}, []);

	const convertDate = (dateString) => {
		const [day, month, year] = dateString.split("-");
		return `${year}-${month}-${day}`;
	};
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
		if (values.phoneNumber === "") {
			newErrors.phoneNumber = "Phone number is required";
		}
		if (values.dob === "") {
			newErrors.dob = "Date of Birth is required";
		}
		if (values.place === "") {
			newErrors.place = "Date of Birth is required";
		}
		if (values.education === "") {
			newErrors.education = "Education is required";
		}
		if (values.address === "") {
			newErrors.address = "Address is required";
		}
		setErrors(newErrors);

		if (Object.keys(newErrors).length === 0) {
			//setValues(values);
			AdminUpdateUserDataFetch(values);
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
			"place",
			"contactDetails",
		];
		return requiredFields.every((field) => values[field] !== "");
	};

	return (
		<form autoComplete='off' noValidate onSubmit={handleSubmit}>
			<Card>
				<CardHeader
					defaultExpanded
					subheader='The information can be edited'
					title='Profile'
				/>
				<br />
				<CardContent sx={{ pt: 0 }}>
					<Box>
						<Grid container spacing={3}>
							<Grid item xs={12}>
								<Typography>Name</Typography>
								<TextField
									fullWidth
									name='name'
									onChange={handleChange}
									required
									value={values.name}
									autoFocus
								/>
							</Grid>
							<Grid item xs={12}>
								<Typography>Email </Typography>
								<TextField
									fullWidth
									name='email'
									disabled
									value={values.email}
									autoFocus
								/>
							</Grid>
							<Grid item xs={12}>
								<Typography>Phone Number</Typography>
								<FormControl fullWidth error={!!errors.phone}>
									<OutlinedInput
										id='outlined-adornment-phoneNo'
										type='text'
										name='phone'
										value={values.phoneNumber}
										onChange={handleChange}
										disabled
										autoFocus
									/>
									{errors.phoneNumber && (
										<Typography variant='body2' sx={{ color: "#f80202" }}>
											{errors.phoneNumber}
										</Typography>
									)}
								</FormControl>
							</Grid>
							<Grid item xs={12} md={6}>
								<Typography>Date of Birth</Typography>
								{dobInputType === "text" ? (
									<TextField
										fullWidth
										name='dob'
										onClick={handleDobClick}
										required
										value={values.dob}
										autoFocus
									/>
								) : (
									<TextField
										fullWidth
										name='dob'
										type='date'
										onChange={handleChange}
										required
										value={values.dob}
										autoFocus
									/>
								)}
								{errors.dob && (
									<Typography variant='body2' sx={{ color: "#f80202" }}>
										{errors.dob}
									</Typography>
								)}
							</Grid>
							<Grid item xs={12} md={6}>
								<Typography>Age</Typography>
								<TextField
									fullWidth
									name='age'
									onChange={handleChange}
									value={values.age}
									autoFocus
								/>
							</Grid>
							<Grid item xs={12}>
								<Typography>Education</Typography>
								<TextField
									fullWidth
									name='education'
									onChange={handleChange}
									required
									value={values.education}
									autoFocus
								/>
							</Grid>
							<Grid item xs={12}>
								<Typography>Place</Typography>
								<TextField
									fullWidth
									name='place'
									onChange={handleChange}
									required
									value={values.place}
									autoFocus
								/>
							</Grid>
							<Grid item xs={12}>
								<Typography>Address</Typography>
								<TextField
									fullWidth
									name='contactDetails'
									onChange={handleChange}
									required
									value={values.contactDetails}
									autoFocus
								/>
							</Grid>
						</Grid>
					</Box>
				</CardContent>
				<Divider />
				<CardActions sx={{ justifyContent: "flex-end" }}>
					<Button variant='contained' disabled={!isFormValid()} type='submit'>
						Save Details
					</Button>
				</CardActions>
			</Card>
		</form>
	);
};

export default UserEditForm;
