import React, { useState, useEffect } from "react";
import {
	Avatar,
	IconButton,
	Card,
	Modal,
	Tabs,
	Tab,
	Box,
	Skeleton,
	Button,
} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Container from "@mui/material/Container";
import { useCome } from "../../contexts/ComeBackContext";
import API from "../../utils/api";
import { fDateTime } from "../../utils/formatTime";
import Profile from "./edit/Profile";
import Info from "./edit/info";
import Edit from "./edit/edit";
import Settings from "./edit/settings";

const UserFetcher = () => {
	const { setTitle } = useCome();
	const [users, setUsers] = useState([]);
	const [openBook, setOpenBook] = useState(null);
	const [openModal, setOpenModal] = useState(false);
	const [selectedTab, setSelectedTab] = useState(0);
	const [isLoading, setIsLoading] = useState(true);
	const fetchUsers = async () => {
		try {
			const response = await API.get("/admins/users");
			setIsLoading(false);
			const userData = response.data.map((user) => ({
				id: user._id,
				...user,
			}));
			setUsers(userData);
		} catch (error) {
			console.log("Error: ", error);
		}
	};
	useEffect(() => {
		fetchUsers();
	}, []);

	const handleViewDetails = (book) => {
		setOpenBook(book);
		setOpenModal(true);
	};

	const handleTabChange = (event, newValue) => {
		setSelectedTab(newValue);
	};

	const handleOpenModal = () => {
		setOpenModal(true);
	};

	const handleCloseModal = () => {
		setOpenModal(false);
		setOpenBook(null);
	};

	const handleRefresh = () => {
		setIsLoading(true);
		fetchUsers();
	};

	const columns = [
		{
			field: "pic",
			headerName: "Avatar",
			flex: 0.5,
			renderCell: (params) => (
				<Avatar src={params.row.pic} alt={params.row.name} />
			),
		},
		{
			field: "name",
			headerName: "Name",
			flex: 1,
		},
		{ field: "email", headerName: "Email", flex: 1.5 },
		{ field: "phoneNumber", headerName: "Phone", flex: 1 },
		{
			field: "status",
			headerName: "Status",
			flex: 0.5,
			valueGetter: (params) =>
				params.row.delete
					? "deleted"
					: params.row.access
					? "Access"
					: "Blocked",
		},
		{
			field: "updated",
			headerName: "Seen",
			flex: 2,
			valueGetter: (params) => fDateTime(params.row.updated),
		},
		{
			field: "actions",
			headerName: "Actions",
			flex: 1,
			renderCell: (params) => (
				<IconButton
					onClick={() => handleViewDetails(params.row)}
					color='primary'
				>
					<RemoveRedEyeIcon />
				</IconButton>
			),
		},
	];

	setTitle("User");

	return (
		<>
			<Button
				variant='outlined'
				color='primary'
				onClick={handleRefresh}
				sx={{ top: 5, right:-900, m: 2 }}
			>
				Refresh
			</Button>
			<Container>
				<Card>
					{isLoading ? (
						<Skeleton variant='rectangular' width='100%' height={400} />
					) : (
						<DataGrid
							rows={users}
							columns={columns}
							components={{
								Toolbar: GridToolbar,
							}}
							autoHeight
							density='comfortable'
						/>
					)}
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
								<Tab label='Profile' />
								<Tab label='Books' />
								<Tab label='Edit' />
								<Tab label='Control' />
							</Tabs>
							{selectedTab === 0 && (
								<Container sx={{ marginTop: 5, marginBlockEnd: 10 }}>
									<Profile userData={openBook} />
								</Container>
							)}
							{selectedTab === 1 && (
								<Container>
									<Info userData={openBook} />
								</Container>
							)}
							{selectedTab === 2 && (
								<Container>
									<Edit userData={openBook} />
								</Container>
							)}
							{selectedTab === 3 && (
								<Container>
									<Settings userData={openBook} />
								</Container>
							)}
						</Box>
					</Box>
				</Modal>
			</Container>
		</>
	);
};

export default UserFetcher;
