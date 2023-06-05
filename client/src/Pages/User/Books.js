import React, { useState, useEffect } from "react";
import { Avatar, IconButton, Card } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Container from "@mui/material/Container";
import API from "../../utils/api";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { fDate } from "../../utils/formatTime";
import { useCome } from "../../contexts/ComeBackContext";

const BookFetcher = () => {
	const { setTitle } = useCome();
	const [books, setBooks] = useState([]);

	useEffect(() => {
		const fetchBook = async () => {
			try {
				const response = await API.post("/users/books");
				const books_ = response.data.map((book) => ({ id: book._id, ...book }));
				setBooks(books_);
			} catch (error) {
				console.log("Error: ", error);
			}
		};

		fetchBook();
	}, []);

	const handleViewDetails = (book) => {
		console.log(book);
		window.location.href = "/book/" + book._id
	};

	const columns = [
		{
			field: "image",
			headerName: "Avatar",
			flex: 0.5,
			renderCell: (params) => (
				<Avatar src={params.row.pic} alt={params.row.title} />
			),
		},
		{
			field: "title",
			headerName: "Title",
			flex: 1,
		},
		{ field: "author", headerName: "Author", flex: 1 },
		{ field: "genre", headerName: "Genre", flex: 1 },
		{
			field: "status",
			headerName: "Status",
			flex: 1,
		},
		{
			field: "publicationDate",
			headerName: "Published Date",
			flex: 2,
			valueGetter: (params) => fDate(params.row.publicationDate),
		},
		{
			field: "actions",
			headerName: "Actions",
			flex: 1,
			renderCell: (params) => (
				<IconButton
					onClick={() => handleViewDetails(params.row)}
					color='primary'>
					<RemoveRedEyeIcon />
				</IconButton>
			),
		},
	];
	setTitle("Books");
	return (
		<>
			<Container>
				<Card>
					<DataGrid
						rows={books}
						columns={columns}
						components={{
							Toolbar: GridToolbar,
						}}
					/>
				</Card>
			</Container>
		</>
	);
};

export default BookFetcher;
