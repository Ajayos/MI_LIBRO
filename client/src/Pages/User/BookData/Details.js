import React from "react";
import { Box, Stack, Container, Button, Divider } from "@mui/material";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import { fDate } from "../../../utils/formatTime";

const Book = ({ bookData }) => {
	const book = {
		title: "Book Title",
		author: "Author Name",
		publishedDate: "2023-05-22",
		likes: 10,
		liked: false,
		available: true,
		rented: false,
		description: "Book description",
		isbn: "1234567890",
		genre: "Fiction",
	};

	const handleLikeButtonClick = () => {
		// Handle liking the book
	};

	const handleActionButtonClick = () => {
		if (book.available) {
			// Handle getting the book
		} else if (book.rented) {
			// Handle requesting the book
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
							<Box sx={{ marginBottom: 2 }}>
								<br />
								<Box>Title: {bookData.title}</Box>
								<Box>Author: {bookData.author}</Box>
								<Box>Published Date: {fDate(bookData.publicationDate)}</Box>
								<Box>ISBN: {bookData.ISBN}</Box>
								<Box>Genre: {bookData.genre}</Box>
							</Box>
						</Container>
						<Box
							direction='column'
							spacing={2}
							sx={{ display: "flex", alignItems: "center" }}
						>
							<Button
								variant='contained'
								color={book.liked ? "error" : "primary"}
								onClick={handleLikeButtonClick}
								startIcon={<ThumbUpAltOutlinedIcon />}
							>
								{book.likes}
							</Button>{" "}
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<Button
								variant='contained'
								color={book.liked ? "error" : "primary"}
								onClick={handleLikeButtonClick}
								startIcon={<CommentOutlinedIcon />}
							>
								{book.likes}
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
						<Button variant='contained' onClick={handleActionButtonClick}>
							{bookData.available
								? "Get Book"
								: book.rented
								? "Request Book"
								: "Book Unavailable"}
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
						<Stack direction='column' spacing={2}>
							<Box sx={{ marginBottom: 2 }}>
								<Stack direction='column' spacing={2}>
									<Divider component='h1' />
									<Box>Author: {bookData.author}</Box>
									<Box>Published Date: {fDate(bookData.publicationDate)}</Box>
									<Box>ISBN: {bookData.ISBN}</Box>
									<Box>Genre: {bookData.genre}</Box>
									<Box>Description: {bookData.description}</Box>
								</Stack>
							</Box>
						</Stack>
					</Container>
				</Box>
			</Stack>
		</Box>
	);
};

export default Book;
