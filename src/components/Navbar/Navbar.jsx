import React, { useState } from "react";
import {
	Box,
	Avatar,
	Button,
	Toolbar,
	Typography,
	List,
	CssBaseline,
	Divider,
} from "@mui/material";
import UserBar from "./UserBar";
import LOGO from "../../image/logo.png";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";

import NoLoginDrawer from "./NoLoginDrawer";
import AdminDrawer from "./AdminDrawer";
import UserDrawer from "./UserDrawer";
import { useAuth } from "../../contexts/AuthContext";

const drawerWidth = 70;

const openedMixin = (theme) => ({
	width: drawerWidth,
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: "hidden",
});
const closedMixin = (theme) => ({
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: "hidden",
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up("sm")]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
});

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	backgroundColor: "rgb(28, 29, 33)",
	transition: theme.transitions.create(["width", "margin"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const Drawer = styled(MuiDrawer, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	width: drawerWidth,
	flexShrink: 0,
	boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
	whiteSpace: "nowrap",
	boxSizing: "border-box",
	...(open && {
		...openedMixin(theme),
		"& .MuiDrawer-paper": openedMixin(theme),
	}),
	...(!open && {
		...closedMixin(theme),
		"& .MuiDrawer-paper": closedMixin(theme),
	}),
}));

export default function Navbar() {
	const theme = useTheme();
	const { isAuthenticated, access } = useAuth();

	const [open, setOpen] = useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const renderDrawerContent = () => {
		if (!isAuthenticated) {
			return <NoLoginDrawer />;
		} else if (access) {
			return <AdminDrawer />;
		} else {
			return <UserDrawer />;
		}
	};

	return (
		<Box bgcolor={"rgb(27, 29, 36)"} sx={{ flexGrow: 1, display: "flex" }}>
			<CssBaseline />
			<AppBar
				position='fixed'
				open={open}
				sx={{ backgroundColor: "rgb(27, 29, 36)" }}>
				<Toolbar>
					<Button
						aria-label='open drawer'
						onClick={() => window.location.replace("/")}>
						<Avatar alt='Mi_LIBRO' src={LOGO} />
					
					<Typography
						variant='h6'
						noWrap
						component='div'
						sx={{ display: { xs: "none", sm: "block" }, color: "#eeff00" }}
						>
						&nbsp;{" MI LIBRO "}
					</Typography>
					</Button>

					<Box sx={{ flexGrow: 1 }} />
					<UserBar />
				</Toolbar>
			</AppBar>
			<Drawer variant='permanent' open={open} sx={{ backgroundColor: "rgb(27, 29, 36)" }}>
				<DrawerHeader sx={{ backgroundColor: "rgb(27, 29, 36)" }}>
					
				</DrawerHeader>
				<Divider />
				<List sx={{ backgroundColor: "rgb(27, 29, 36)", minHeight: "130vh", }}>
					{/* Render the appropriate drawer content */}
					{renderDrawerContent()}
				</List>
			</Drawer>
		</Box>
	);
}
