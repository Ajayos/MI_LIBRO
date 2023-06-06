import React from "react";
import { Box, Button } from "@mui/material";
import { useAuth } from "../../../contexts/AuthContext";
const Settings = ({ userData }) => {
    const { DeleteBook } = useAuth();
	
	const handleDelete = async() => {
		await DeleteBook(userData._id);
        window.location.reload()
	};

	return (
		<Box sx={{ display: "flex", justifyContent: "center", marginTop: 25 }}>
			{/* Render the block user button */}
			<Button
				variant='contained'
				color={"success"}
				onClick={handleDelete}
			>
				{"Delete Book"}
			</Button>

			<Box sx={{ padding: 2 }} />
		</Box>
	);
};

export default Settings;
