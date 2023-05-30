import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import { Container, Stack, Typography, Skeleton } from '@mui/material';
import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../../components/books';
import API from "../../utils/api";

export default function ProductsPage() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
        try {
          const response = await API.get("/Books");
          console.log("Books: ", response.data)
          setBooks(response.data);
          setIsLoading(false);
        } catch (error) {
          console.log("Error: ", error);
          setIsLoading(false);
        }
      };
    fetchBooks();
  }, []);

  

  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <>
      <Helmet>
        <title>Dashboard: Products | Minimal UI</title>
      </Helmet>

      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Products
        </Typography>

        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <ProductSort />
          </Stack>
        </Stack>

        {isLoading ? (
          <>
            <Skeleton variant="rectangular" height={300} sx={{ mb: 2 }} />
            <Skeleton variant="rectangular" height={300} sx={{ mb: 2 }} />
            <Skeleton variant="rectangular" height={300} sx={{ mb: 2 }} />
          </>
        ) : (
          <ProductList products={books} />
        )}
      </Container>
    </>
  );
}
