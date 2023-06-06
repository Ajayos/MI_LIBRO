import React, { useContext, useEffect, useState } from "react";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import { fDate } from "../../utils/formatTime";
import { useAuth } from "../../contexts/AuthContext";
import {
	Box,
	Stack,
	Container,
	Button,
	Divider,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Modal,
	Typography,
	Rating,
} from "@mui/material";
import Toast from "../../Toast";
import { ToastContext } from "../../contexts/Toast";

const BookDetailsTable = ({ bookData }) => {
	return (
		<TableContainer>
			<Table>
				<TableBody>
					<TableRow>
						<TableCell component='th' scope='row'>
							Author
						</TableCell>
						<TableCell>{bookData.author}</TableCell>
					</TableRow>
					<TableRow>
						<TableCell component='th' scope='row'>
							Published Date
						</TableCell>
						<TableCell>{fDate(bookData.publicationDate, "yyyy")}</TableCell>
					</TableRow>
					<TableRow>
						<TableCell component='th' scope='row'>
							ISBN
						</TableCell>
						<TableCell>{bookData.ISBN}</TableCell>
					</TableRow>
					<TableRow>
						<TableCell component='th' scope='row'>
							Genre
						</TableCell>
						<TableCell>{bookData.genre}</TableCell>
					</TableRow>
					<TableRow>
						<TableCell component='th' scope='row'>
							Description
						</TableCell>
						<TableCell>{bookData.description}</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
};

const Book = ({ bookData }) => {
	const { user, LikeBook, sendRequest , returnBook} = useAuth();
	const { showToast } = useContext(ToastContext);
	const [bookStatus_, setBookStatus] = useState();
	const [openModal, setOpenModal] = useState(false);
	const [value, setValue] = React.useState(0);

	useEffect(() => {
		setBookStatus(bookStatus());
	}, []);

	const handleLikeButtonClick = () => {
		LikeBook(bookData._id, IsUserLiked ? false : true);
	};

	const handleActionButtonClick = () => {
		if (bookData.status === "Available") {
			sendRequest({ id: bookData._id });
			return showToast("Requested !", "success");
		} else if (bookStatus() === "Return Book") {
			setOpenModal(true);
		} else {
			return showToast("Book Not Available for rend!", "error");
		}
	};
	const IsUserLiked = () => {
		var is = false;
		for (var i = 0; i < bookData.likes.length; i++) {
			if (bookData.likes[i]._id === user.id) {
				is = true;
			}
		}
		return is;
	};

	const handleOpenModal = () => {
		//window.location.href = `/book/${_id}`;
		setOpenModal(true);
	};
	const handelSubmit = async () => {
		await returnBook(bookData._id, value);
		setOpenModal(false);
		window.location.reload();
    };

	const handleCloseModal = () => {
		setOpenModal(false);
	};

	const bookStatus = () => {
		let status = bookData.status;
		if (status === "Available") {
			return "Available";
		} else if (status === "Rented") {
			if (bookData.rented.user === user.id) {
				return "Return Book";
			}
			return "Rented";
		} else if (status === "Processing") {
			if (bookData.request === user._id) {
				return "Request send";
			} else {
				return "Book on a request";
			}
		} else if (status === "Unavailable") {
			return "Book unavailable";
		} else {
			return "Book not available";
		}
	};

	return (
		<Box>
			<Stack direction='row' spacing={4} sx={{ marginBottom: 2 }}>
				<Stack direction='column' spacing={2} sx={{ width: "30%" }}>
					<Box>
						<img
							src={bookData.pic}
							alt={bookData.title}
							style={{ width: "50%", height: "50%", marginLeft: 30 }}
						/>
						<Container>
							<Box sx={{ marginBottom: 2, padding: 9 }}>
								<Divider component='h1' />
							</Box>
						</Container>
						<Box
							direction='column'
							spacing={2}
							sx={{ display: "flex", alignItems: "center" }}
						>
							<Button
								variant='contained'
								color={IsUserLiked() ? "error" : "primary"}
								onClick={handleLikeButtonClick}
								startIcon={<ThumbUpAltOutlinedIcon />}
							>
								{bookData.likes.length}
							</Button>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<Button
								variant='contained'
								color={"primary"}
								onClick={handleLikeButtonClick}
								startIcon={<CommentOutlinedIcon />}
							>
								{bookData.comments.length}
							</Button>
						</Box>
					</Box>
				</Stack>

				<Divider orientation='vertical' flexItem />

				<Box sx={{ width: "50%" }}>
					<Stack
						direction='row'
						justifyContent='flex-end'
						sx={{ marginTop: 3 }}
					>
						<Button
							color={
								bookStatus_ === "Available" || bookStatus_ === "Return Book"
									? "primary"
									: bookStatus_ === "Request send" ||
									  bookStatus_ === "Book on a request"
									? "warning"
									: "error"
							}
							variant='contained'
							onClick={handleActionButtonClick}
						>
							{bookStatus_}
						</Button>
					</Stack>
					<Stack direction='column' sx={{ marginTop: -5 }}>
						<Box sx={{ display: "flex", alignItems: "center" }}>
							<Box component='h1' sx={{ marginRight: 2 }}>
								{bookData.title}
							</Box>
						</Box>
					</Stack>
					<Container>
						<Box>
							<Box sx={{ marginBottom: 2 }}>
								<BookDetailsTable bookData={bookData} />
							</Box>
						</Box>
					</Container>
				</Box>
			</Stack>
			<Modal
				open={openModal}
				onClose={handleCloseModal}
				aria-labelledby='parent-modal-title'
				aria-describedby='parent-modal-description'
			>
				<Box
					sx={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						height: "50%",
						width: "50%",
						bgcolor: "background.paper",
						border: "2px solid #000",
						boxShadow: 24,
						pt: 2,
						px: 4,
						pb: 3,
					}}
				>
					<Box>
						<Typography>Do you want to Return ?</Typography>
						<br />
						<br />
						<Typography component='legend'>Rate</Typography>
						<Rating
							name='simple-controlled'
							value={value}
							onChange={(event, newValue) => {
								setValue(newValue);
							}}
						/>
						<br />
						<br />
						<br />
						<Button variant='contained' onClick={handleCloseModal}>
							Cancel
						</Button>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<Button variant='contained' onClick={handelSubmit}>
							Yes
						</Button>
					</Box>
				</Box>
			</Modal>
		</Box>
	);
};

export default Book;
