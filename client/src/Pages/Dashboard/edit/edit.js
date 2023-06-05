import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useTheme } from "@mui/material/styles";
import {
	Grid,
	Container,
	Typography,
	Stack,
	Box,
	Skeleton,
	Button,
	Card,
	CardContent,
	Avatar,
	Divider,
	CardActions,
	TextField,
	CardHeader,
	FormControl,
	OutlinedInput,
} from "@mui/material";
import { useAuth } from "../../../contexts/AuthContext";
import { useCome } from "../../../contexts/ComeBackContext";
import API from "../../../utils/api";

export default function Account({ userData }) {
	const theme = useTheme();
	const { setTitle } = useCome();
    const { UpdateUserAdmin } = useAuth();
	const [isLoading, setIsLoading] = useState(true);
	const [profilePic, setProfilePic] = useState();
	const [newProfilePic, setNewProfilePic] = useState(null);
	const [isSaving, setIsSaving] = useState(false);
	const [values, setValues] = useState({});
	const [errors, setErrors] = useState({});
	const [dobInputType, setDobInputType] = useState("text");
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 1000);

		return () => clearTimeout(timer);
	}, []);

	const handleImageChange = (event) => {
		const file = event.target.files[0];
		const reader = new FileReader();

		reader.onloadend = () => {
			setProfilePic(reader.result);
			setNewProfilePic(file);
		};

		if (file) {
			reader.readAsDataURL(file);
		}
	};

	const handleCancel = () => {
		setNewProfilePic(null);
	};

	const handleSave = () => {
		if (newProfilePic) {
			setIsSaving(true);
			const reader = new FileReader();

			reader.onloadend = () => {
				setTimeout(() => {
					setIsSaving(false);
					setProfilePic(reader.result);
					setNewProfilePic(null);
					setValues((prev) => ({
						...prev,
						["pic"]: reader.result,
					}));
				}, 1000);
			};

			reader.readAsDataURL(newProfilePic);
		}
	};

	useEffect(() => {
		async function getData() {
			setValues(userData);
            setProfilePic(userData.pic)
			var ret = await convertDate(userData.dob);
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
    const submitData = async (data) => {
        await API.put("/admins/user", JSON.stringify(data));
    }

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

	const handleSubmit = async(event) => {
		event.preventDefault();
		// Perform form validation
		const newErrors = {};
		if (values.name === "") {
			newErrors.name = "Name is required";
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
            UpdateUserAdmin(JSON.stringify(values));
			setErrors({});
            window.location.reload();
		}
	};

	const isFormValid = () => {
		const requiredFields = [
			"name",
			"dob",
			"age",
			"education",
			"address",
			"place",
			"contactDetails",
		];
		return requiredFields.every((field) => values[field] !== "");
	};
	setTitle("Add Book");
	return (
		<>
			<Box
				component='main'
			>
				<Container maxWidth='lg'>
					<Stack>
						{isLoading ? (
							<Skeleton variant='text' width={200}  />
						) : (
							<Typography variant='h4'>Account</Typography>
						)}
						<br />
						<Grid container spacing={5}>
							<Grid item xs={12} md={6} lg={4}>
								{isLoading ? (
									<Skeleton variant='rectangular' height={400} />
								) : (
									<Card>
										<CardContent>
											<Box
												sx={{
													alignItems: "center",
													display: "flex",
													flexDirection: "column",
												}}
											>
												<Avatar
													src={
														profilePic
															? profilePic
															: "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
													}
													sx={{
														height: 80,
														mb: 2,
														width: 80,
													}}
												/>
											</Box>
										</CardContent>
										<Divider />
										<CardActions>
											{!newProfilePic && (
												<Button
													fullWidth
													variant='text'
													component='label'
													disabled={isSaving}
												>
													{isSaving ? "Saving..." : "Update Picture"}
													<input
														type='file'
														accept='image/*'
														style={{ display: "none" }}
														onChange={handleImageChange}
													/>
												</Button>
											)}
											{newProfilePic && (
												<>
													<Button
														fullWidth
														variant='text'
														onClick={handleSave}
														disabled={isSaving}
													>
														Save
													</Button>
													<Button
														fullWidth
														variant='text'
														onClick={handleCancel}
														disabled={isSaving}
													>
														Cancel
													</Button>
												</>
											)}
										</CardActions>
									</Card>
								)}
							</Grid>
							<Grid item xs={12} md={6} lg={8}>
								{isLoading ? (
									<Skeleton variant='rectangular' height={400} />
								) : (
									<form autoComplete='off' noValidate onSubmit={handleSubmit}>
										<Card>
											
											<br />
											<CardContent sx={{ pt: 0 }}>
												<Box>
													<Grid container spacing={1}>
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
																<Typography
																	variant='body2'
																	sx={{ color: "#f80202" }}
																>
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
												<Button variant='contained' type='submit'>
													Save Details
												</Button>
											</CardActions>
										</Card>
									</form>
								)}
							</Grid>
						</Grid>
					</Stack>
				</Container>
			</Box>
		</>
	);
}
