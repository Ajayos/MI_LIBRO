import React, { useEffect, useState } from "react";
import { Box, Container, Avatar, Card } from "@mui/material";
import { fDate, fDateTime } from "../../../utils/formatTime";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useAuth } from "../../../contexts/AuthContext";
const History = ({ bookData }) => {
	const [bookData_, setBookData] = useState([]);
	const { user } = useAuth();

	useEffect(() => {
		bookData.buyers.map((buyer, i) => {
			var his = {
				id: buyer.id,
				name: buyer.user.name,
				pic: buyer.user.pic,
				rentDate: fDateTime(buyer.rentDate),
				returnDate: fDateTime(buyer.returnDate),
				stars: buyer.stars,
				itsYou: buyer.user._id === user.id ? true : false,
			};
			return setBookData((prev) => [...prev, his]);
		});
    return 
    //return setBookData((prev) => [...prev, {id: bookData.rented.id, name: bookData.rented.user.name, pic: bookData.rented.user.pic, rentDate:fDateTime(bookData.rented.rentDate), returnDate: "...."}]);
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
		},
	];

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
