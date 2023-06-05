import React, { useState, useEffect } from "react";
import { Avatar, IconButton, Card, Modal, Tabs, Tab, Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Container from "@mui/material/Container";
import API from "../../utils/api";
import { fDateTime } from "../../utils/formatTime";
import { useCome } from "../../contexts/ComeBackContext";
import Details from "../../components/books/Details";
import Review from "../../components/books/Reviews";
import History from "../../components/books/History";

const BookFetcher = () => {
	const { setTitle } = useCome();
	const [books, setBooks] = useState([]);
	const [openBook, setOpenBook] = useState([]);
	const [openModal, setOpenModal] = useState(false);
	const [selectedTab, setSelectedTab] = useState(0);

	useEffect(() => {
		const fetchBook = async () => {
			try {
				const response = await API.get("/admins/books");
				const books_ = response.data.map((book) => ({ id: book._id, ...book }));
				setBooks(books_);
			} catch (error) {
				console.log("Error: ", error);
			}
		};

		fetchBook();
	}, []);
;
	const handleViewDetails = (book) => {
		setOpenBook(book);
		setOpenModal(true);
	};
	const handleTabChange = (event, newValue) => {
		setSelectedTab(newValue);
	};

	const handleOpenModal = () => {
		//window.location.href = `/book/${_id}`;
		setOpenModal(true);
	};

	const handleCloseModal = () => {
		setOpenModal(false);
		setOpenBook(null);
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
			valueGetter: (params) => fDateTime(params.row.publicationDate),
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
						autoHeight
						density='comfortable'
					/>
				</Card>
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
							height: "90%",
							width: "90%",
							bgcolor: "background.paper",
							border: "2px solid #000",
							boxShadow: 24,
							pt: 2,
							px: 4,
							pb: 3,
						}}
					>
						<Box>
							<Tabs value={selectedTab} onChange={handleTabChange} centered>
								<Tab label='Details' />
								<Tab label='Review' />
								<Tab label='History' />
							</Tabs>
							{selectedTab === 0 && (
								<Container sx={{ marginTop: 5, marginBlockEnd: 10 }}>
									<Details bookData={openBook} />
								</Container>
							)}
							{selectedTab === 1 && (
								<Container>
									<Review bookData={openBook} />
								</Container>
							)}
							{selectedTab === 2 && (
								<Container>
									<History bookData={openBook} />
								</Container>
							)}
						</Box>
					</Box>
				</Modal>
			</Container>
		</>
	);
};

export default BookFetcher;
