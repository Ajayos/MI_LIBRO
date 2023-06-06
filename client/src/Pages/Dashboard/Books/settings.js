import React from "react";
import { Box, Button } from "@mui/material";
import { useAuth } from "../../../contexts/AuthContext";
const Settings = ({ userData }) => {
    const { BlockUser, DeleteUser } = useAuth();
	const handleBlockUser = async() => {
		await BlockUser({ id: userData.id, access: !userData.access})
        window.location.reload()
	};
	const handleDeleteUser = async() => {
		await DeleteUser(userData._id);
        window.location.reload()
	};

	return (
		<Box sx={{ display: "flex", justifyContent: "center", marginTop: 25 }}>
			{/* Render the block user button */}
			<Button
				variant='contained'
				color={!userData.access ? "error" : "success"}
				onClick={handleBlockUser}
				disabled={userData.delete}
			>
				{!userData.access ? "Unblock User" : "Block User"}
			</Button>

			<Box sx={{ padding: 2 }} />

			{/* Render the delete user button */}
			<Button
				variant='contained'
				color={userData.delete ? "error" : "success"}
				onClick={handleDeleteUser}
			>
				Delete User
			</Button>
		</Box>
	);
};

export default Settings;
