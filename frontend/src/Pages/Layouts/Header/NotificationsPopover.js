import React, { useState, useRef } from "react";
import { sub } from "date-fns";
import { noCase } from "change-case";
import {
  Box,
  List,
  Badge,
  Button,
  Avatar,
  Tooltip,
  Divider,
  Popover,
  Typography,
  IconButton,
  ListItemText,
  ListSubheader,
  ListItemAvatar,
  ListItemButton,
} from "@mui/material";
import { fToNow } from "../../../utils/formatTime";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Scrollbar from "../../../components/scrollbar";
import { useSocket } from "../../../contexts/SocketContext";

import notificationSound from "../../../audio/ting.mp3"; // Import the notification sound file

const NOTIFICATIONS = [
  {
    title: "Welcome to Mi LIBRO",
    avatar: "https://github.com/Ajayos.png",
    createdAt: sub(new Date(), { hours: 3, minutes: 30 }),
    isUnRead: true,
  },
];

export default function NotificationsPopover() {
  const { socket } = useSocket();
  const [notifications, setNotifications] = useState(NOTIFICATIONS);

  const totalUnRead = notifications.filter(
    (item) => item.isUnRead === true
  ).length;

  const [open, setOpen] = useState(null);
  const notificationAudioRef = useRef(new Audio(notificationSound)); // Create a ref for the notification audio

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
    notificationAudioRef.current.play(); // Play the notification sound from the ref
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleMarkAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        isUnRead: false,
      }))
    );
  };

  socket.on("notification", (data) => {
    NOTIFICATIONS.push(data);
    notificationAudioRef.current.play(); // Play the notification sound from the ref
    setNotifications(NOTIFICATIONS);
  });


	return (
		<>
			<IconButton
				color={open ? "primary" : "default"}
				onClick={handleOpen}
				sx={{ width: 40, height: 40 }}
			>
				<Badge badgeContent={totalUnRead} color='error'>
					<NotificationsIcon />
				</Badge>
			</IconButton>

			<Popover
				open={Boolean(open)}
				anchorEl={open}
				onClose={handleClose}
				anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
				transformOrigin={{ vertical: "top", horizontal: "right" }}
				PaperProps={{
					sx: {
						mt: 1.5,
						ml: 0.75,
						width: 360,
					},
				}}
			>
				<Divider sx={{ borderStyle: "dashed" }} />

				<Scrollbar sx={{ height: { xs: 340, sm: "auto" } }}>
					<List
						disablePadding
						subheader={
							<ListSubheader
								disableSticky
								sx={{ py: 1, px: 2.5, typography: "overline" }}
							>
								New
							</ListSubheader>
						}
					>
						{notifications.slice(0, 2).map((notification) => (
							<NotificationItem
								key={notification.id}
								notification={notification}
							/>
						))}
					</List>
				</Scrollbar>

				<Divider sx={{ borderStyle: "dashed" }} />

				<Box sx={{ p: 1 }}>
					<Button
						fullWidth
						disableRipple
						disabled={totalUnRead === 0}
						onClick={handleMarkAllAsRead}
					>
						Mark as Read
					</Button>
				</Box>
			</Popover>
		</>
	);
}

function NotificationItem({ notification }) {
	const { title } = renderContent(notification);

	return (
		<ListItemButton
			sx={{
				py: 1.5,
				px: 2.5,
				mt: "1px",
				...(notification.isUnRead && {
					bgcolor: "action.selected",
				}),
			}}
		>
			{notification.avatar ? (
				<ListItemAvatar>
					<Avatar src={notification.avatar} />
				</ListItemAvatar>
			) : null}

			<ListItemText
				primary={title}
				secondary={
					<Typography
						variant='caption'
						sx={{
							mt: 0.5,
							display: "flex",
							alignItems: "center",
							color: "text.disabled",
						}}
					>
						<AccessTimeIcon />
						{fToNow(notification.createdAt)}
					</Typography>
				}
			/>
		</ListItemButton>
	);
}

function renderContent(notification) {
	const title = (
		<Typography variant='subtitle2'>
			{notification.title}
			{notification.description && (
				<Typography
					component='span'
					variant='body2'
					sx={{ color: "text.secondary" }}
				>
					&nbsp; {noCase(notification.description)}
				</Typography>
			)}
		</Typography>
	);

	return {
		title,
	};
}
