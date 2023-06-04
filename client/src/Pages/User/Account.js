import React, { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import {
	Grid,
	Container,
	Typography,
	Stack,
	Box,
	Skeleton,
} from "@mui/material";
import { useAuth } from "../../contexts/AuthContext";
import { useCome } from "../../contexts/ComeBackContext"
import AccountProfile from "./AccountProfile";
import AccountProfileDetails from "./AccountProfileDetails";

export default function Account() {
	const theme = useTheme();
	const { user } = useAuth();
	const { setTitle } = useCome();
	const [isLoading, setIsLoading] = React.useState(true);

	useEffect(() => {
		setTitle("Account");
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 2000);

		return () => clearTimeout(timer);
	}, []);
	return (
		<>
			<Box
				component='main'
				sx={{
					flexGrow: 1,
					py: 8,
				}}
			>
				<Container maxWidth='lg'>
					<Stack spacing={3}>
						<div>
							{isLoading ? (
								<Skeleton variant='text' width={200} height={40} />
							) : (
								<Typography variant='h4'>Account</Typography>
							)}
						</div>
						<br />
						<div>
							<Grid container spacing={5}>
								<Grid item xs={12} md={6} lg={4}>
									{isLoading ? (
										<Skeleton variant='rectangular' height={400} />
									) : (
										<AccountProfile />
									)}
								</Grid>
								<Grid item xs={12} md={6} lg={8}>
									{isLoading ? (
										<Skeleton variant='rectangular' height={400} />
									) : (
										<AccountProfileDetails />
									)}
								</Grid>
							</Grid>
						</div>
					</Stack>
				</Container>
			</Box>
		</>
	);
}
