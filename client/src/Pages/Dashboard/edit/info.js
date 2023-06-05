import React, { useEffect, useState } from "react";
import { Box, Container, Avatar, Card, IconButton } from "@mui/material";
import { fDate, fDateTime } from "../../../utils/formatTime";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useAuth } from "../../../contexts/AuthContext";
import { v4 as uuidv4 } from "uuid";

const History = ({ userData }) => {
  const [bookData, setBookData] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const updatedBookData = userData.requestedBooks.map((buyer) => ({
      ...buyer,
      id: uuidv4(),
    }));
    setBookData(updatedBookData);
  }, [userData.requestedBooks]);

  const columns = [
    {
      field: "image",
      headerName: "Avatar",
      flex: 0.5,
      renderCell: (params) => (
        <Avatar src={params.row.pic} alt={params.row.title} />
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
    {
      field: "publicationDate",
      headerName: "Published Date",
      flex: 2,
      valueGetter: (params) => fDate(params.row.publicationDate, "yyyy"),
    },
  ];

  return (
    <Box>
      <Container>
        <Card>
          <DataGrid
            rows={bookData}
            columns={columns}
            components={{
              Toolbar: GridToolbar,
            }}
          />
        </Card>
      </Container>
    </Box>
  );
};

export default History;
