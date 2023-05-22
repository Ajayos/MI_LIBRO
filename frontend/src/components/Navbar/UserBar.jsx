import { Mail, Notifications } from "@mui/icons-material";
import {
  Badge,
  Box,
  Fade,
  IconButton,
  Paper,
  Popper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import { useAuth } from "../../contexts/AuthContext";
import ProflleBar from "./ProflleBar";

const UserBar = () => {
  const { isAuthenticated } = useAuth();
  const [showMail, setShowMail] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const handleClose = () => {
    setShowMail(false);
    setShowNotifications(false);
  };

  if (isAuthenticated) {
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
            <ProflleBar />
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
            id="Notifications"
            aria-describedby={"Notifications"}
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
          <Popper
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            open={showMail}
            anchorEl={"mail-popover"}
            placement={"bottom"}
            transition
            sx={{ zIndex: 1000, marginLeft: 210, marginTop: 8 }}
          >
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Paper>
                  <Typography sx={{ p: 2 }}>
                    Login to see
                    Mail&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </Typography>
                </Paper>
              </Fade>
            )}
          </Popper>
          <Popper
            onClose={handleClose}
            onClick={() => setShowNotifications(!showNotifications)}
            open={showNotifications}
            anchorEl={"Notifications"}
            placement={"bottom"}
            sx={{ zIndex: 1000, marginLeft: 210, marginTop: 8 }}
          >
            <Typography sx={{ p: 2 }}>Login to see Notification</Typography>
          </Popper>
        </Box>
      </Box>
    );
  }
};

export default UserBar;
