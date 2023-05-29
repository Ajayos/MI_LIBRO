import React from "react";
import {
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Tooltip,
	Popover,
	Divider,
} from "@mui/material";
import {
	AccountCircle,
	Create,
	Lock,
	Home,
	VpnKey,
	Description,
} from "@mui/icons-material";

const NoLoginDrawer = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handlePopoverOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handlePopoverClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);

	const handleUserLogin = () => {
		window.location.href = "/login";
	};

	const handleCreateAccount = () => {
		window.location.href = "/signup";
	};

	const handleHome = () => {
		window.location.href = "/";
	};

	const handleForgotPassword = () => {
		window.location.href = "/password";
	};

	const handleAdminLogin = () => {
		window.location.href = "/admin";
	};

	const handleTermsConditions = () => {
		window.location.href = "/terms-conditions";
	};

	const currentPage = window.location.pathname;

	return (
		<List>
			<Tooltip title="Home">
				<ListItem button onClick={handleHome} selected={currentPage === "/"}>
					<ListItemIcon sx={{ color: currentPage === "/" ? "#03e9f4" : "white" }}>
						<Home />
					</ListItemIcon>
					<ListItemText
						primaryTypographyProps={{
							color: currentPage === "/" ? "#03e9f4" : "white",
							noWrap: true,
						}}
						primary="Home"
					/>
				</ListItem>
			</Tooltip>
			<Tooltip title="User Login">
				<ListItem button onClick={handleUserLogin} selected={currentPage === "/login"}>
					<ListItemIcon sx={{ color: currentPage === "/login" ? "#03e9f4" : "white" }}>
						<AccountCircle />
					</ListItemIcon>
					<ListItemText
						primaryTypographyProps={{
							color: currentPage === "/login" ? "#03e9f4" : "white",
							noWrap: true,
						}}
						primary="User Login"
					/>
				</ListItem>
			</Tooltip>
			<Tooltip title="Create Account">
				<ListItem button onClick={handleCreateAccount} selected={currentPage === "/signup"}>
					<ListItemIcon sx={{ color: currentPage === "/signup" ? "#03e9f4" : "white" }}>
						<Create />
					</ListItemIcon>
					<ListItemText
						primaryTypographyProps={{
							color: currentPage === "/signup" ? "#03e9f4" : "white",
							noWrap: true,
						}}
						primary="Create Account"
					/>
				</ListItem>
			</Tooltip>
			<Tooltip title="Forgot Password">
				<ListItem
					button
					onClick={handleForgotPassword}
					selected={currentPage === "/password"}
				>
					<ListItemIcon
						sx={{ color: currentPage === "/password" ? "#03e9f4" : "white" }}
					>
						<VpnKey />
					</ListItemIcon>
					<ListItemText
						primaryTypographyProps={{
							color: currentPage === "/password" ? "#03e9f4" : "white",
							noWrap: true,
						}}
						primary="Forgot Password"
					/>
				</ListItem>
			</Tooltip>
			<Divider sx={{ backgroundColor: "lightblue" }} />
			<Tooltip title="Admin Login">
				<ListItem button onClick={handleAdminLogin} selected={currentPage === "/admin"}>
					<ListItemIcon sx={{ color: currentPage === "/admin" ? "#03e9f4" : "white" }}>
						<Lock />
					</ListItemIcon>
					<ListItemText
						primaryTypographyProps={{
							color: currentPage === "/admin" ? "#03e9f4" : "white",
							noWrap: true,
						}}
						primary="Admin Login"
					/>
				</ListItem>
			</Tooltip>
			<Tooltip title="Terms and Conditions">
				<ListItem
					button
					onMouseEnter={handlePopoverOpen}
					onMouseLeave={handlePopoverClose}
					selected={currentPage === "/terms-conditions"}
				>
					<ListItemIcon sx={{ color: currentPage === "/terms-conditions" ? "#03e9f4" : "white" }}>
						<Description />
					</ListItemIcon>
					<ListItemText
						primaryTypographyProps={{
							color: currentPage === "/terms-conditions" ? "#03e9f4" : "white",
							noWrap: true,
						}}
						primary="Terms and Conditions"
					/>
				</ListItem>
			</Tooltip>
			
		</List>
	);
};

export default NoLoginDrawer;
