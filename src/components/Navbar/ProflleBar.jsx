import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import CustomButton from "../Button/CustomButton";
import { CopyToClipboard } from "react-copy-to-clipboard";

const handleCopy = () => {
  //
};
const ProflleBar = () => {
  const { user, logout } = useAuth();
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
 
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt={user.name} src={user.pic} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{
          mt: "45px",
          backgroundColor: "transparent",
          color: "transparent",
        }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <Box
          sx={{
            width: "200px",
            height: 290,
            background: "rgb(28, 29, 33)",
            marginTop: -1,
          }}
        >
          <MenuItem>
            <CopyToClipboard text={user.name} onCopy={handleCopy}>
              <Box
                sx={{
                  width: "100%",
                  height: "auto",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 2,
                }}
              >
                <Avatar
                  alt={user.name}
                  src={user.pic}
                  sx={{ width: 70, height: 70 }}
                />
              </Box>
            </CopyToClipboard>
          </MenuItem>
          <br />
          <MenuItem>
            <CopyToClipboard text={user.name} onCopy={handleCopy}>
              <Box
                sx={{
                  width: "100%",
                  height: "auto",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Typography textAlign="center" color={"white"}>
                  {user.name}
                </Typography>
              </Box>
            </CopyToClipboard>
          </MenuItem>
          <MenuItem>
            <CopyToClipboard text={user.email} onCopy={handleCopy}>
              <Box
                sx={{
                  width: "100%",
                  height: "auto",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Typography textAlign="center" color={"white"}>
                  {user.email}
                </Typography>
              </Box>
            </CopyToClipboard>
          </MenuItem>

          <MenuItem>
            <Box
              sx={{
                width: "100%",
                marginTop: -2,
                height: "auto",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <CustomButton message="Logout" onClick={logout} />
            </Box>
          </MenuItem>
        </Box>
      </Menu>
    </Box>
  );
};

export default ProflleBar;
