import React, { useState, useEffect } from "react";
import { Avatar, IconButton, Popover, Card } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Helmet } from "react-helmet-async";
import Container from "@mui/material/Container";
import PopoverContent from "./User/PopoverContent";
import { useAuth } from "../../contexts/AuthContext";
import API from "../../utils/api"; 
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { fDate } from "../../utils/formatTime";

const UserFetcher = () => {
  const { GetDashboradData, adminHomeData } = useAuth();
  const [users, setUsers] = useState([]);
  const [popoverContent, setPopoverContent] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await API.post("/users/mybooks");
        console.log("Response: ", response.data)
        const users = response.data.requestedBooks.map((user) => ({ id: user._id, ...user }));
        setUsers(users);
        setLoading(false);
      } catch (error) {
        console.log("Error: ", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleViewDetails = (user) => {
    setPopoverContent(user);
  };

  const handleEditUser = (user) => {
    // Handle edit action here
    console.log("Edit user:", user);
  };

  const handleDeleteUser = (user) => {
    // Handle delete action here
    console.log("Delete user:", user);
  };

  const handlePopoverClose = () => {
    setPopoverContent(null);
  };

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  }; //lastSeen

const TABLE_HEAD = [
	{ id: "image", label: "Image", alignRight: false },
	{ id: "title", label: "Title", alignRight: false },
	{ id: "author", label: "Author", alignRight: false },
	{ id: "publishedDate", label: "Published Date", alignRight: false },
	{ id: "genre", label: "Genre", alignRight: false },
	{ id: "actions", label: "Actions", alignRight: false },
];
const columns = [
    {
      field: "image",
      headerName: "Avatar",
      flex: 0.5,
      renderCell: (params) => (
        <Avatar src={params.row.pic} alt={params.row.name} />
      ),
    },
    {
      field: "title",
      headerName: "Title",
      flex: 1,
    },
    { field: "author", headerName: "Author", flex: 1 },
    { field: "genre", headerName: "Genre", flex: 1 },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
    },
    { field: "publicationDate", headerName: "Published Date", flex: 2, valueGetter: (params) => (fDate(params.row.publicationDate)), },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: (params) => (
        <IconButton
          onClick={() => handleViewDetails(params.row)}
          color="primary"
        >
          <RemoveRedEyeIcon />
        </IconButton>
      ),
    },
  ];

  return (
    <>
      <Helmet>
        <title>User | MI LIBRO</title>
      </Helmet>

      <Container>
        <Card>
          <DataGrid
            rows={users}
            columns={columns}
            components={{
              Toolbar: GridToolbar,
            }}
          />
        </Card>
      </Container>

      <Popover
        open={popoverContent !== null}
        anchorEl={popoverContent}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
      >
        {popoverContent && <PopoverContent user={popoverContent} />}
      </Popover>
    </>
  );
};

export default UserFetcher;
