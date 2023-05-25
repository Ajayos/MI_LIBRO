import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Grid, Box } from "@mui/material";

const addBook = () => {
  // eslint-disable-next-line
	const { user, isAuthenticated, access } = useAuth();
	if (!isAuthenticated) return window.location.replace("/login");
	if (!access) return window.location.replace("/");

	return (
		<Box
			height='90vh'
			display='flex'
			borderRadius={7}
			boxShadow={21}
			sx={{
				boxSizing: "border-box",
				position: "relative",
        marginTop: 10, marginLeft: 10 ,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<Grid sx={{ }}>
				hi
				<h1>Dashboard</h1>
			</Grid>
		</Box>
	);
};

export default addBook;
