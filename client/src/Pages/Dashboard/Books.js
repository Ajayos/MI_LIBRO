import React, { useState, useEffect } from "react";
import {
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
	TableContainer,
	Paper,
	Avatar,
	TextField,
	Checkbox,
	Stack,
	Typography,
	IconButton,
	TablePagination,
	Card,
	Popover,
	MenuItem,
	Skeleton,
	CardMedia,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	DialogActions,
	Button
} from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Label from "../../components/label";
import Scrollbar from "../../components/scrollbar";
import UserListHead from "./User/UserListHead";
import UserListToolbar from "./User/UserListToolbar";
import { Helmet } from "react-helmet-async";
import Container from "@mui/material/Container";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PopoverContent from "./User/PopoverContent";
import { useAuth } from "../../contexts/AuthContext";
import API from "../../utils/api";
import { fDate } from "../../utils/formatTime";

const TABLE_HEAD = [
	{ id: "image", label: "Image", alignRight: false },
	{ id: "title", label: "Title", alignRight: false },
	{ id: "author", label: "Author", alignRight: false },
	{ id: "publishedDate", label: "Published Date", alignRight: false },
	{ id: "genre", label: "Genre", alignRight: false },
	{ id: "actions", label: "Actions", alignRight: false },
];

function UserFetcher() {
	const { GetDashboardData, adminHomeData } = useAuth();
	const [users, setUsers] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [selected, setSelected] = useState([]);
	const [order, setOrder] = useState("asc");
	const [orderBy, setOrderBy] = useState("");
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);
	const [open, setOpen] = useState(null);
	const [popoverContent, setPopoverContent] = useState(null);
	const [isLoading, setLoading] = useState(true);
	const [openM, setOpenM] = React.useState(true);
  const handleClose = () => {
    setOpenM(false);
  };

 

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await API.get("/Books");
				setUsers(response.data);
				setLoading(false);
			} catch (error) {
				console.log("Error: ", error);
				setLoading(false);
			}
		};

		fetchUsers();
	}, []);

	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
	};

	const handleClick = (event, name) => {
		const selectedIndex = selected.indexOf(name);
		let newSelected = [];

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, name);
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(
				selected.slice(0, selectedIndex),
				selected.slice(selectedIndex + 1)
			);
		}

		setSelected(newSelected);
	};

	const handleRequestSort = (property) => {
		const isAsc = orderBy === property && order === "asc";
		setOrder(isAsc ? "desc" : "asc");
		setOrderBy(property);
	};

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};
	const handleDeleted = async (id) => {
		//await API.delete(`/books/${id}`);
		window.location.reload()
	  };

	const handleDelete = (id) => {
		return (
			<>
			  <Dialog
				open={true}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			  >
				<DialogTitle id="alert-dialog-title">
				  {"Do you Want to delete ?"}
				</DialogTitle>
				<DialogContent>
				  <DialogContentText id="alert-dialog-description">
					Rno 
					<br />
				  </DialogContentText>
				</DialogContent>
				<DialogActions>
				  <Button onClick={handleClose}>Cancel</Button>
				  <Button
					startIcon={<DeleteIcon />}
					onClick={() => handleDeleted('')}
					autoFocus
				  >
					DELETE
				  </Button>
				</DialogActions>
			  </Dialog>
			</>
		  );
	};

	const handleView = (id) => {
		// Implement the view logic here
		handleDelete('')
	};

	const handlePopoverOpen = (event, id) => {
		//setPopoverContent(id);
		//setOpen(event.currentTarget);
	};

	const handlePopoverClose = () => {
		setPopoverContent(null);
		setOpen(null);
	};

	const emptyRows =
		rowsPerPage - Math.min(rowsPerPage, users.length - page * rowsPerPage);

	const filteredUsers = users.filter((user) =>
		user.title.toLowerCase().includes(searchTerm?.toLowerCase() ?? "")
	);

	const sortedUsers = filteredUsers.sort((a, b) => {
		if (orderBy === "title") {
			return order === "asc"
				? a.title.localeCompare(b.title)
				: b.title.localeCompare(a.title);
		}
		if (orderBy === "author") {
			return order === "asc"
				? a.author.localeCompare(b.author)
				: b.author.localeCompare(a.author);
		}
		if (orderBy === "publishedDate") {
			return order === "asc"
				? a.publishedDate.localeCompare(b.publishedDate)
				: b.publishedDate.localeCompare(a.publishedDate);
		}
		if (orderBy === "genre") {
			return order === "asc"
				? a.genre.localeCompare(b.genre)
				: b.genre.localeCompare(a.genre);
		}
		return 0;
	});

	return (
		<>
			<Helmet>
				<title>Books | Dashboard</title>
			</Helmet>

			<Container>
				<Typography variant='h4' sx={{ mb: 5 }}>
					Books
				</Typography>

				<Stack direction='row' spacing={2} sx={{ mb: 3 }}>
					<TextField
						label='Search'
						variant='outlined'
						size='small'
						onChange={handleSearch}
					/>
				</Stack>

				<Card sx={{ boxShadow: 3 }}>
					<Scrollbar>
						<TableContainer component={Paper}>
							<Table>
								<TableHead>
									<TableRow>
										{TABLE_HEAD.map((headCell) => (
											<TableCell
												key={headCell.id}
												align={headCell.alignRight ? "right" : "left"}
											>
												{headCell.label}
											</TableCell>
										))}
									</TableRow>
								</TableHead>
								<TableBody>
									{isLoading ? (
										<TableRow>
											<TableCell colSpan={TABLE_HEAD.length}>
												<Skeleton animation='wave' />
												<Skeleton animation='wave' />
												<Skeleton animation='wave' />
											</TableCell>
										</TableRow>
									) : sortedUsers.length === 0 ? (
										<TableRow>
											<TableCell colSpan={TABLE_HEAD.length}>
												No Book found.
											</TableCell>
										</TableRow>
									) : (
										sortedUsers
											.slice(
												page * rowsPerPage,
												page * rowsPerPage + rowsPerPage
											)
											.map((row) => {
												const {
													_id,
													pic,
													title,
													author,
													publicationDate,
													genre,
												} = row;
												const id = _id;
												const isItemSelected = selected.indexOf(id) !== -1;

												return (
													<TableRow
														hover
														key={id}
														tabIndex={-1}
														selected={isItemSelected}
													>
														<TableCell>
															<Avatar alt={title} src={pic} />
														</TableCell>
														<TableCell>{title}</TableCell>
														<TableCell>{author}</TableCell>
														<TableCell> {fDate(publicationDate)}</TableCell>
														<TableCell>{genre}</TableCell>
														<TableCell align='right'>
															<Stack direction='row' spacing={1}>
																<IconButton
																	size='small'
																	onClick={() => handleView(id)}
																>
																	<RemoveRedEyeIcon />
																</IconButton>
																<IconButton
																	size='small'
																	onClick={() =>
																		(window.location.href = "/editbook/" + id)
																	}
																>
																	<EditIcon />
																</IconButton>
																<IconButton
																	size='small'
																	onClick={(event) =>
																		handlePopoverOpen(event, id)
																	}
																>
																	<DeleteIcon />
																</IconButton>
															</Stack>
														</TableCell>
													</TableRow>
												);
											})
									)}
									{emptyRows > 0 && (
										<TableRow style={{ height: 53 * emptyRows }}>
											<TableCell colSpan={TABLE_HEAD.length} />
										</TableRow>
									)}
								</TableBody>
							</Table>
						</TableContainer>
					</Scrollbar>
					<TablePagination
						rowsPerPageOptions={[5, 10, 25]}
						component='div'
						count={users.length}
						rowsPerPage={rowsPerPage}
						page={page}
						onPageChange={handleChangePage}
						onRowsPerPageChange={handleChangeRowsPerPage}
					/>
				</Card>
			</Container>

			<Popover
				open={Boolean(open)}
				anchorEl={open}
				onClose={handlePopoverClose}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "center",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "center",
				}}
			>
				<PopoverContent
					handleDelete={() => handleDelete(popoverContent)}
					handlePopoverClose={handlePopoverClose}
				/>
			</Popover>
		</>
	);
}

export default UserFetcher;
