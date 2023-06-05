import React, { useState, useEffect } from "react";
import { Avatar, IconButton, Card } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import Container from "@mui/material/Container";
import { useCome } from "../../contexts/ComeBackContext";
import { useAuth } from "../../contexts/AuthContext";

const BookFetcher = () => {
  const { setTitle } = useCome();
  const { getRequest, RequestAp,  RequestCn} = useAuth();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const data = await getRequest();
        const filteredBooks = data.map((book) => ({
          id: book.id,
          title: book.title,
          author: book.author,
          description: book.description,
          status: book.status,
          pic: book.pic,
          image: book.image,
          name: book.name,
          email: book.email,
        }));
        setBooks(filteredBooks);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchBook();
  }, []);

  const handleApprove = (bookId) => {
    // Handle approve logic here
    RequestAp(bookId);
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
  };

  const handleReject = (bookId) => {
    // Handle reject logic here
    RequestCn(bookId);
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
  };

  const columns = [
    {
      field: "userAvatar",
      headerName: "User Avatar",
      flex: 0.5,
      renderCell: (params) => (
        <Avatar src={params.row.pic} alt={params.row.name} />
      ),
    },
    {
      field: "userName",
      headerName: "User Name",
      flex: 1,
      valueGetter: (params) => `${params.row.name} (${params.row.email})`,
    },
    {
      field: "bookAvatar",
      headerName: "Book Avatar",
      flex: 0.5,
      renderCell: (params) => (
        <Avatar src={params.row.image} alt={params.row.title} />
      ),
    },
    { field: "title", headerName: "Title", flex: 1 },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: (params) => (
        <>
          <IconButton color="primary" onClick={() => handleApprove(params.row.id)}>
            <CheckCircleIcon />
          </IconButton>
          <IconButton color="secondary" onClick={() => handleReject(params.row.id)}>
            <CancelIcon />
          </IconButton>
        </>
      ),
    },
  ];

  setTitle("Requested Books");

  return (
    <Container>
      <Card>
        <DataGrid
          rows={books}
          columns={columns}
          components={{
            Toolbar: GridToolbar,
          }}
          autoHeight
          density="comfortable"
        />
      </Card>
    </Container>
  );
};

export default BookFetcher;
