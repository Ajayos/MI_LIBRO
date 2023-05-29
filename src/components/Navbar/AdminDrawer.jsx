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
	Dashboard,
  People,
  LibraryBooks,
  AddBox,
  Book,
  Wifi,
  Block,
  Info
} from "@mui/icons-material";

const AdminDrawer = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  
  const open = Boolean(anchorEl);
  
  const handleDashboard = () => {
    window.location.href = "/dashboard";
  };
  
  const handleUsers = () => {
    window.location.href = "/dashboard/users";
  };
  
  const handleManageBooks = () => {
    window.location.href = "/dashboard/manage-books";
  };
  
  const handleAddBook = () => {
    window.location.href = "/dashboard/add-book";
  };
  
  const handleBooks = () => {
    window.location.href = "/dashboard/books";
  };
  
  const handleOnlineUsers = () => {
    window.location.href = "/dashboard/online-users";
  };
  
  const handleBlockedUsers = () => {
    window.location.href = "/dashboard/blocked-users";
  };
  
  const handleInformations = () => {
    window.location.href = "/dashboard/informations";
  };
  
  const currentPage = window.location.pathname;
  
  return (
    <List>
      <Tooltip title="Dashboard">
        <ListItem button onClick={handleDashboard} selected={currentPage === "/dashboard"}>
          <ListItemIcon sx={{ color: currentPage === "/dashboard" ? "#03e9f4" : "white" }}>
            <Dashboard />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{
              color: currentPage === "/dashboard" ? "#03e9f4" : "white",
              noWrap: true,
            }}
            primary="Dashboard"
          />
        </ListItem>
      </Tooltip>
      <Tooltip title="Users">
        <ListItem button onClick={handleUsers} selected={currentPage === "/dashboard/users"}>
          <ListItemIcon sx={{ color: currentPage === "/dashboard/users" ? "#03e9f4" : "white" }}>
            <People />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{
              color: currentPage === "/dashboard/users" ? "#03e9f4" : "white",
              noWrap: true,
            }}
            primary="Users"
          />
        </ListItem>
      </Tooltip>
      <Tooltip title="Manage Books">
        <ListItem button onClick={handleManageBooks} selected={currentPage === "/dashboard/manage-books"}>
          <ListItemIcon sx={{ color: currentPage === "/dashboard/manage-books" ? "#03e9f4" : "white" }}>
            <LibraryBooks />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{
              color: currentPage === "/dashboard/manage-books" ? "#03e9f4" : "white",
              noWrap: true,
            }}
            primary="Manage Books"
          />
        </ListItem>
      </Tooltip>
      <Tooltip title="Add Book">
        <ListItem button onClick={handleAddBook} selected={currentPage === "/dashboard/add-book"}>
          <ListItemIcon sx={{ color: currentPage === "/dashboard/add-book" ? "#03e9f4" : "white" }}>
            <AddBox />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{
              color: currentPage === "/dashboard/add-book" ? "#03e9f4" : "white",
              noWrap: true,
            }}
            primary="Add Book"
          />
        </ListItem>
      </Tooltip>
      <Tooltip title="Books">
        <ListItem button onClick={handleBooks} selected={currentPage === "/dashboard/books"}>
          <ListItemIcon sx={{ color: currentPage === "/dashboard/books" ? "#03e9f4" : "white" }}>
            <Book />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{
              color: currentPage === "/dashboard/books" ? "#03e9f4" : "white",
              noWrap: true,
            }}
            primary="Books"
          />
        </ListItem>
      </Tooltip>
      <Tooltip title="Online Users">
        <ListItem button onClick={handleOnlineUsers} selected={currentPage === "/dashboard/online-users"}>
          <ListItemIcon sx={{ color: currentPage === "/dashboard/online-users" ? "#03e9f4" : "white" }}>
            <Wifi />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{
              color: currentPage === "/dashboard/online-users" ? "#03e9f4" : "white",
              noWrap: true,
            }}
            primary="Online Users"
          />
        </ListItem>
      </Tooltip>
      <Tooltip title="Blocked Users">
        <ListItem button onClick={handleBlockedUsers} selected={currentPage === "/dashboard/blocked-users"}>
          <ListItemIcon sx={{ color: currentPage === "/dashboard/blocked-users" ? "#03e9f4" : "white" }}>
            <Block />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{
              color: currentPage === "/dashboard/blocked-users" ? "#03e9f4" : "white",
              noWrap: true,
            }}
            primary="Blocked Users"
          />
        </ListItem>
      </Tooltip>
      <Tooltip title="Informations">
        <ListItem button onClick={handleInformations} selected={currentPage === "/dashboard/informations"}>
          <ListItemIcon sx={{ color: currentPage === "/dashboard/informations" ? "#03e9f4" : "white" }}>
            <Info />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{
              color: currentPage === "/dashboard/informations" ? "#03e9f4" : "white",
              noWrap: true,
            }}
            primary="Informations"
          />
        </ListItem>
      </Tooltip>
    </List>
  );
  
};

export default AdminDrawer;
