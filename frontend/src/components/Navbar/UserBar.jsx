import { AccountCircle, Mail, Notifications } from "@mui/icons-material";
import {
  Badge,
  Box,
  Icon,
  IconButton,
  Popover,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import LoginIcon from "@mui/icons-material/Login";

const UserBar = () => {
  const [user, setUser] = useState(false);
  const [showMail, setShowMail] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const handleClose = () => {
    setShowMail(false);
    setShowNotifications(false);
  };
  useEffect(() => {
    // take userinfo from the browser's local storage
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    // if userInfo is not null, then set the user's name to the navbar
    if (userInfo) {
      setUser(userInfo);
    } else {
      setUser(false);
    }
  }, [user]);

  if (user) {
    return (
      <Box>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge color="error">
              <Mail />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge color="error">
              <Notifications />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Box>
      </Box>
    );
  } else {
    return (
      <Box>
        <Box>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
            name={"mail"}
            aria-describedby={"mail-popover"}
            variant="contained"
            onClick={() => setShowMail(true)}
          >
            <Mail />
          </IconButton>
          <IconButton
            name={"Notifications"}
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
            aria-describedby={"Notifications-popover"}
            onClick={() => setShowNotifications(true)}
          >
            <Notifications />
          </IconButton>
          <IconButton
            size="large"
            aria-label="account of current user"
            color="inherit"
            onClick={() => window.location.replace("/login")}
          >
            <LoginIcon />
          </IconButton>

          <Popover
            id={"mail-popover"}
            open={showMail}
            anchorEl={"mail-popover"}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Typography sx={{ p: 2 }}>Login to See Messages</Typography>
          </Popover>
          <Popover
            id={"Notifications-popover"}
            open={showNotifications}
            anchorEl={"Notifications-popover"}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Typography sx={{ p: 2 }}>Login to see Notifications</Typography>
          </Popover>
        </Box>
      </Box>
    );
  }
};

export default UserBar;
