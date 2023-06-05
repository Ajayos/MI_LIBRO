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
} from "@mui/material";
import { useAuth } from "../../contexts/AuthContext";
import { useCome } from "../../contexts/ComeBackContext";

export default function Account() {
	const theme = useTheme();
	const { setTitle } = useCome();
	const { AddNewBook } = useAuth();
	const [isLoading, setIsLoading] = useState(true);
	const [profilePic, setProfilePic] = useState();
	const [newProfilePic, setNewProfilePic] = useState(null);
	const [isSaving, setIsSaving] = useState(false);
	const [book, setBook] = useState({
		pic: null,
		title: "",
		author: "",
		publicationDate: "",
		genre: "",
		isbn: "",
		description: "",
	});
	const [errors, setErrors] = useState({});
	const [isFormValid, setIsFormValid] = useState(false);

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
					setBook((prevBook) => ({
						...prevBook,
						["pic"]: reader.result,
					}));
				}, 1000);
			};

			reader.readAsDataURL(newProfilePic);
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (validateForm) {
			await AddNewBook(JSON.stringify(book));

			setBook({
				pic: null,
				title: "",
				author: "",
				publicationDate: "",
				genre: "",
				isbn: "",
				description: "",
			});
			setErrors({});
			return true;
		} else {
			console.log("Form contains errors. Please fill in all fields.");
			return false;
		}
	};

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setBook((prevBook) => ({
			...prevBook,
			[name]: value,
		}));
	};

	const validateForm = () => {
		let isValid = true;
		const newErrors = {};

		if (book.title.trim() === "") {
			isValid = false;
			newErrors.title = "Title is required";
		}

		if (book.author.trim() === "") {
			isValid = false;
			newErrors.author = "Author is required";
		}

		if (book.publicationDate.trim() === "") {
			isValid = false;
			newErrors.publicationDate = "Publication date is required";
		}

		if (book.genre.trim() === "") {
			isValid = false;
			newErrors.genre = "Genre is required";
		}

		if (book.isbn.trim() === "") {
			isValid = false;
			newErrors.isbn = "ISBN is required";
		}

		if (book.description.trim() === "") {
			isValid = false;
			newErrors.description = "Description is required";
		}

		setErrors(newErrors);
		setIsFormValid(Object.keys(newErrors).length === 0);
		return isValid;
	};

	const handleIsbnCheck = () => {
		//if (book.isbn.trim() !== "") {
		// Perform ISBN check logic here
		//  console.log("Checking ISBN:", book.isbn);
		//}
		return true;
	};
	setTitle("Add Book");
	return (
		<>
			<Box
				component='main'
				sx={{
					flexGrow: 1,
					py: 8,
				}}>
				<Container maxWidth='lg'>
					<Stack spacing={3}>
						{isLoading ? (
							<Skeleton variant='text' width={200} height={40} />
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
												}}>
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
													disabled={isSaving}>
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
														disabled={isSaving}>
														Save
													</Button>
													<Button
														fullWidth
														variant='text'
														onClick={handleCancel}
														disabled={isSaving}>
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
											<CardHeader
												defaultExpanded
												subheader='Enter book details'
												title='Book Data Inserter'
											/>
											<br />
											<CardContent sx={{ pt: 0 }}>
												<Box>
													<Grid container spacing={3}>
														<Grid item xs={12}>
															<Typography>Title</Typography>
															<TextField
																fullWidth
																name='title'
																value={book.title}
																onChange={handleInputChange}
																error={!!errors.title}
																helperText={errors.title}
															/>
														</Grid>
														<Grid item xs={12}>
															<Typography>Author</Typography>
															<TextField
																fullWidth
																name='author'
																value={book.author}
																onChange={handleInputChange}
																error={!!errors.author}
																helperText={errors.author}
															/>
														</Grid>
														<Grid item xs={12}>
															<Typography>
																{errors.publicationDate
																	? errors.publicationDate
																	: "Publication Date"}
															</Typography>
															<TextField
																fullWidth
																type='date'
																name='publicationDate'
																value={book.publicationDate}
																onChange={handleInputChange}
																error={!!errors.publicationDate}
																helperText={errors.publicationDate}
															/>
														</Grid>
														<Grid item xs={12}>
															<Typography>
																{errors.genre ? errors.genre : "Genre"}
															</Typography>
															<TextField
																fullWidth
																name='genre'
																value={book.genre}
																onChange={handleInputChange}
																error={!!errors.genre}
																helperText={errors.genre}
															/>
														</Grid>
														<Grid item xs={12}>
															<Typography>
																{errors.isbn ? errors.isbn : "ISBN"}
															</Typography>
															<TextField
																fullWidth
																name='isbn'
																value={book.isbn}
																onChange={handleInputChange}
																onBlur={handleIsbnCheck}
																error={!!errors.isbn}
																helperText={errors.isbn}
															/>
														</Grid>
														<Grid item xs={12}>
															<Typography>
																{errors.description
																	? errors.description
																	: "Description"}
															</Typography>
															<TextField
																fullWidth
																name='description'
																value={book.description}
																onChange={handleInputChange}
																error={!!errors.description}
																helperText={errors.description}
															/>
														</Grid>
													</Grid>
												</Box>
											</CardContent>
											<Divider />
											<CardActions sx={{ justifyContent: "flex-end" }}>
												<Button variant='contained' type='submit'>
													Save Book
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
