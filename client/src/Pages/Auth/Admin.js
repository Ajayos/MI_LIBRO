import { Helmet } from "react-helmet-async";
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
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import useResponsive from "../../hooks/useResponsive";
import PROFILE from "../../image/logo.png";
import LOGIN_IMG from "../../image/login.png";
import LoginForm from "./AdminForm";

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
  const mdUp = useResponsive("up", "md");

  return (
    <>
      <Helmet>
        <title> Login | MI LIBRO </title>
      </Helmet>

      <StyledRoot>
        <Box
          sx={{
            position: "fixed",
            top: { xs: 16, sm: 24, md: 40 },
            left: { xs: 16, sm: 24, md: 40 },
          }}
        >
          <Avatar src={PROFILE} />  {"MI LIBRO"}
        </Box>

        {mdUp && (
          <StyledSection>
            <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
              Hi, Welcome Back
            </Typography>
            <img src={LOGIN_IMG} alt="login" />
          </StyledSection>
        )}

        <Container maxWidth="sm">
          <StyledContent>
            <Typography variant="h4" gutterBottom>
              {"Sign in to MI LIBRO"}
            </Typography>

            <Divider sx={{ my: 3 }} />
            <Typography variant="body2">
              <Button
                size="medium"
                onClick={() => window.location.replace("/login")}
              >
                <ArrowBackIcon /> {" Go Back"}
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
