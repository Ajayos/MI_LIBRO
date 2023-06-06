import React, { useState, useEffect } from "react";
import { Avatar, IconButton, Popover, Card, Tabs, Tab, Modal, Box } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Helmet } from "react-helmet-async";
import Container from "@mui/material/Container";
import { useAuth } from "../../contexts/AuthContext";
import API from "../../utils/api"; 
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { fDate } from "../../utils/formatTime";

import Details from "../../components/books/Details";
import Review from "../../components/books/Reviews";
import History from "../../components/books/History";

const UserFetcher = () => {
  const { GetDashboradData, adminHomeData } = useAuth();
  const [users, setUsers] = useState([]);
  const [popoverContent, setPopoverContent] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
	const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await API.post("/users/mybooks");
        const users = response.data.rentedBooks.map((user) => ({ id: user._id, ...user }));
        setUsers(users);
        setLoading(false);
      } catch (error) {
        console.log("Error: ", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);
  const handleTabChange = (event, newValue) => {
		setSelectedTab(newValue);
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


  const handleViewDetails = (user) => {
    setPopoverContent(user);
    setOpenModal(true);
  };

 const handleCloseModal = () => {
		setOpenModal(false);
    setPopoverContent(null);
	};


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

      <Modal
					open={openModal}
					onClose={handleCloseModal}
					aria-labelledby='parent-modal-title'
					aria-describedby='parent-modal-description'
				>
					<Box
						sx={{
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							height: "90%",
							width: "90%",
							bgcolor: "background.paper",
							border: "2px solid #000",
							boxShadow: 24,
							pt: 2,
							px: 4,
							pb: 3,
						}}
					>
						<Box>
							<Tabs value={selectedTab} onChange={handleTabChange} centered>
								<Tab label='Details' />
								<Tab label='Review' />
								<Tab label='History' />
							</Tabs>
							{selectedTab === 0 && (
								<Container sx={{ marginTop: 5, marginBlockEnd: 10 }}>
									<Details bookData={popoverContent} />
								</Container>
							)}
							{selectedTab === 1 && (
								<Container>
									<Review bookData={popoverContent} />
								</Container>
							)}
							{selectedTab === 2 && (
								<Container>
									<History bookData={popoverContent} />
								</Container>
							)}
						</Box>
					</Box>
				</Modal>
    </>
  );
};

export default UserFetcher;
