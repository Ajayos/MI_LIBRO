import { styled } from "@mui/material/styles";
import {
	Link,
	Container,
	Typography,
	Divider,
	Stack,
	Button,
	Box,
	Avatar,
} from "@mui/material";
import useResponsive from "../../hooks/useResponsive";
import PROFILE from "../../image/logo.png";
import LOGIN_IMG from "../../image/login.png";
import LoginForm from "./LoginForm";
import { useCome } from "../../contexts/ComeBackContext";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect } from "react";

const StyledRoot = styled("div")(({ theme }) => ({
	[theme.breakpoints.up("md")]: {
		display: "flex",
	},
}));

const StyledSection = styled("div")(({ theme }) => ({
	width: "100%",
	maxWidth: 480,
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	boxShadow: theme.customShadows.card,
	backgroundColor: theme.palette.background.default,
}));

const StyledContent = styled("div")(({ theme }) => ({
	maxWidth: 480,
	margin: "auto",
	minHeight: "100vh",
	display: "flex",
	justifyContent: "center",
	flexDirection: "column",
	padding: theme.spacing(12, 0),
}));

export default function LoginPage() {
  const { isAuthenticated } = useAuth();
	const { setTitle } = useCome();
	const mdUp = useResponsive("up", "md");
  useEffect(() => {
    if (isAuthenticated) {
      window.location.href = "/home";
    }
  }, [isAuthenticated]);
	setTitle("Login");
	return (
		<>
			<StyledRoot>
				<Box
					sx={{
						position: "fixed",
						top: { xs: 16, sm: 24, md: 40 },
						left: { xs: 16, sm: 24, md: 40 },
					}}
				>
					<Avatar src={PROFILE} /> {"MI LIBRO"}
				</Box>

				{mdUp && (
					<StyledSection>
						<Typography variant='h3' sx={{ px: 5, mt: 10, mb: 5 }}>
							Hi, Welcome Back
						</Typography>
						<img src={LOGIN_IMG} alt='login' />
					</StyledSection>
				)}

				<Container maxWidth='sm'>
					<StyledContent>
						<Typography variant='h4' gutterBottom>
							{"Sign in to MI LIBRO"}
						</Typography>

						<Typography variant='body2'>
							{"Don’t have an account? "}
							<Button size='medium'>
								<Link href='/create' variant='subtitle2'>
									{" Get started "}
								</Link>
							</Button>
						</Typography>
						<Typography variant='body2'>
							{"Are you an "}
							<Button size='medium'>
								<Link href='/admin' variant='subtitle2'>
									{" Admin ? "}
								</Link>
							</Button>
						</Typography>

						<Divider sx={{ my: 3 }} />

						<LoginForm />
					</StyledContent>
				</Container>
			</StyledRoot>
		</>
	);
}
