import React from "react";
import { Grid, Box } from "@mui/material";

const Dashbordtheme = ({ children }) => {
	return (
		<Box
			height='90vh'
			display='flex'
			borderRadius={7}
			boxShadow={21}
			sx={{
				boxSizing: "border-box",
				marginTop: 10,
				marginLeft: 10,
				flexDirection: "column",
			}}
		>
			{children}
		</Box>
	);
};

export default Dashbordtheme;
