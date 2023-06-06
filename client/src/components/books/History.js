import React, { useEffect, useState } from "react";
import { Box, Container, Avatar, Card, Rating } from "@mui/material";
import { fDate, fDateTime } from "../../utils/formatTime";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useAuth } from "../../contexts/AuthContext";
const History = ({ bookData }) => {
	const [bookData_, setBookData] = useState([]);
const { user } = useAuth();

useEffect(() => {
  if (bookData && bookData.buyers && Array.isArray(bookData.buyers)) {
    const updatedBookData = bookData.buyers.map((buyer) => ({
      id: buyer.id,
      name: buyer.user.name,
      pic: buyer.user.pic,
      rentDate: fDateTime(buyer.rentDate),
      returnDate: fDateTime(buyer.returnDate),
      stars: buyer.stars,
      itsYou: buyer.user._id === user.id ? true : false,
    }));
    setBookData((prev) => [...updatedBookData]);
  }
}, []);


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
			field: "name",
			headerName: "Name",
			flex: 1,
      valueGetter: (params) => params.row.itsYou ? params.row.name + " (You)" : params.row.name
		},
		{
			field: "rentDate",
			headerName: "Rent Date",
			flex: 1,
			valueGetter: (params) => fDate(params.row.rentDate),
		},
		{
			field: "returnDate",
			headerName: "Return Date",
			flex: 1,
			valueGetter: (params) => fDate(params.row.returnDate),
		},
		{
			field: "stars",
			headerName: "stars",
			flex: 1,
			renderCell: (params) => (
				<Rating name="read-only" value={params.row.stars} readOnly />
			),
		},
	]; //

	return (
		<Box>
			<Container>
				<Card>
					<DataGrid
						rows={bookData_}
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
