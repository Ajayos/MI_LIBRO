import { Helmet } from "react-helmet-async";
import { useTheme } from "@mui/material/styles";
import { Box, Container, Stack, Typography, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import SettingsPassword from "./SettingsPassword";
import { useCome } from "../../contexts/ComeBackContext";

export default function Account() {
	const theme = useTheme();
	const { user } = useAuth();
	const { setTitle } = useCome();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	setTitle("Settings");

	return (
		<>
			<Box
				component='main'
				sx={{
					flexGrow: 1,
					py: 8,
				}}>
				<Container maxWidth='lg'>
					<Stack spacing={3}>
						{isLoading ? (
							<Skeleton variant='text' width={200} height={40} />
						) : (
							<Typography variant='h4'>Settings</Typography>
						)}

						<SettingsPassword />
					</Stack>
				</Container>
			</Box>
		</>
	);
}
