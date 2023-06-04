import React, { useState, useEffect } from "react";
import { Avatar, IconButton, Card, Popover } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Container from "@mui/material/Container";
import { useCome } from "../../contexts/ComeBackContext";
import API from "../../utils/api";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { fDateTime } from "../../utils/formatTime";
import AddBook from "./AddBook"
const UserFetcher = () => {
	const { setTitle } = useCome();
	const [users, setUsers] = useState([]);
  const [isSet, setIsSet] = useState(false)
	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await API.get("/admins/users");
				const users = response.data.map((user) => ({ id: user._id, ...user }));
				setUsers(users);
			} catch (error) {
				console.log("Error: ", error);
			}
		};

		fetchUsers();
	}, []);

	const handleViewDetails = (user) => {
		console.log(user);
    setIsSet(true)
    
	};

	const columns = [
		{
			field: "image",
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
					color='primary'>
					<RemoveRedEyeIcon />
				</IconButton>
			),
		},
	];
	setTitle("User");

	return (
		<>
			<Container>
				<Card>
					<DataGrid
						rows={users}
						columns={columns}
						components={{
							Toolbar: GridToolbar,
						}}
					/>
				</Card>
			</Container>
      {isSet && (
        <Popover>
        <AddBook />
        </Popover>
      )}
		</>
	);
};

export default UserFetcher;
