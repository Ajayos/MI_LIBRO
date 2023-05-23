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
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import NoLoginDrawer from "./NoLoginDrawer";
import AdminDrawer from "./AdminDrawer";
import UserDrawer from "./UserDrawer";
import { useAuth } from "../../contexts/AuthContext";

const drawerWidth = 170;

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
	...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
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

	backgroundColor: "rgb(28, 29, 33)",
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
		<Box bgcolor={"rgb(28, 29, 33)"} sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				position='absolute'
				open={open}
				sx={{ backgroundColor: "rgb(28, 29, 33)" }}
			>
				<Toolbar>
					<Button
						aria-label='open drawer'
						onClick={() => window.location.replace("/")}
					>
						<Avatar alt='Mi_LIBRO' src={LOGO} />
						<Typography
							variant='h6'
							noWrap
							component='div'
							sx={{ display: { xs: "none", sm: "block" } }}
						>
							&nbsp;&nbsp;{" MI LIBRO "}
						</Typography>
					</Button>

					<Box sx={{ flexGrow: 1 }} />
					<UserBar />
				</Toolbar>
			</AppBar>
			<Drawer variant='' open={open} sx={{ background: "rgb(28, 29, 33)" }}>
				<List sx={{ height: "100%", background: "rgb(28, 29, 33)" }}>
					{/* Render the appropriate drawer content */}
					{renderDrawerContent()}
				</List>
			</Drawer>
		</Box>
	);
}
