import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import {
	Grid,
	Box,
	Paper,
	styled,
	FormControl,
	FormLabel,
} from "@mui/material";
import DashboardBox from "../../components/Dashboard/DashboardBox";

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
}));
const Dashboard = () => {
	// eslint-disable-next-line
	const { user, isAuthenticated, access } = useAuth();
	if (!isAuthenticated) return window.location.replace("/login");
	if (!access) return window.location.replace("/");

	return (
		<DashboardBox />
	);
};

export default Dashboard;
