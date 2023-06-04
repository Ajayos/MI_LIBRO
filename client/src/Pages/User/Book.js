import React, { useEffect, useState } from "react";
import { Box, Tabs, Tab, Container, Skeleton } from "@mui/material";
import Details from "./BookData/Details";
import { useCome } from "../../contexts/ComeBackContext"
import Reviews from "./BookData/Reviews";
import History from "./BookData/History";
import { useParams } from 'react-router-dom';
import API from "../../utils/api";

const Book = () => {
  const { id } = useParams();
	const { setTitle } = useCome();
  const [bookData, setBookData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const response = await API.get(`books/${id}`);
        setBookData(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    if (id) {
      fetchBookData();
    }
  }, [id]);

  const historyData = [
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

  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  setTitle("Book");
  return (
    <Box>
      <Tabs value={selectedTab} onChange={handleTabChange} centered>
        <Tab label="Details" />
        <Tab label="Review" />
        <Tab label="History" />
      </Tabs>
      {selectedTab === 0 && (
        <Container>
          {loading ? (
            <Skeleton variant="rectangular" height={200} />
          ) : (
            <Details bookData={bookData} />
          )}
        </Container>
      )}
      {selectedTab === 1 && (
        <Container>
          {loading ? (
            <Skeleton variant="rectangular" height={200} />
          ) : (
            <Reviews bookData={bookData} />
          )}
        </Container>
      )}
      {selectedTab === 2 && (
        <Container>
          {loading ? (
            <Skeleton variant="rectangular" height={200} />
          ) : (
            <History historyData={historyData} />
          )}
        </Container>
      )}
    </Box>
  );
};

export default Book;
