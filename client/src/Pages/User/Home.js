import { useState, useEffect } from "react";
import { Container, Stack, Typography, Skeleton } from "@mui/material";
import { ProductSort, ProductList } from "../../components/books";
import API from "../../utils/api";
import { useCome } from "../../contexts/ComeBackContext";
import { useAuth } from "../../contexts/AuthContext";

export default function ProductsPage() {
	const [books, setBooks] = useState([]);
	const { setTitle } = useCome();
	const { isAuthenticated, user} = useAuth();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (!isAuthenticated) return (window.location.href = "/login");
		const fetchBooks = async () => {
			try {
				const response = await API.post("/users/books");
				setBooks(response.data);
				setIsLoading(false);
			} catch (error) {
				setIsLoading(false);
			}
		};
		fetchBooks();
	}, [isAuthenticated]);

	setTitle("Books");
	return (
		<>
			<Container>
				<Typography variant='h4' sx={{ mb: 5 }}>
					Welcome {user.name}
				</Typography>

				<Stack
					direction='row'
					flexWrap='wrap-reverse'
					alignItems='center'
					justifyContent='flex-end'
					sx={{ mb: 5 }}
				>
					<Stack direction='row' spacing={1} flexShrink={0} sx={{ my: 1 }}>
						<ProductSort />
					</Stack>
				</Stack>

				{isLoading ? (
					<>
						<Skeleton variant='rectangular' height={300} sx={{ mb: 2 }} />
						<Skeleton variant='rectangular' height={300} sx={{ mb: 2 }} />
						<Skeleton variant='rectangular' height={300} sx={{ mb: 2 }} />
					</>
				) : (
					<ProductList products={books} />
				)}
			</Container>
		</>
	);
}
