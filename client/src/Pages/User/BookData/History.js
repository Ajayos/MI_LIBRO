import React from "react";
import { Box, Stack, Container, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from "@mui/material";

const History = () => {
    const history = [
        {
          userPic: "user1.jpg",
          userName: "John Doe",
          rentDate: "2023-05-01",
          returnDate: "2023-05-08",
          stars: 4,
        },
        {
          userPic: "user2.jpg",
          userName: "Jane Smith",
          rentDate: "2023-05-10",
          returnDate: "2023-05-15",
          stars: 5,
        },
        // Add more example data items as needed
      ];
  return (
    <Box>
      <Container>
        <TableContainer component={Paper} sx={{ marginBottom: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>User Pic</TableCell>
                <TableCell>User Name</TableCell>
                <TableCell>Rent Date</TableCell>
                <TableCell>Return Date</TableCell>
                <TableCell>Stars</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {history.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <img src={item.userPic} alt="User Profile" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
                  </TableCell>
                  <TableCell>{item.userName}</TableCell>
                  <TableCell>{item.rentDate}</TableCell>
                  <TableCell>{item.returnDate}</TableCell>
                  <TableCell>{item.stars}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
};

export default History;
