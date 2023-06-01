import { Helmet } from "react-helmet-async";
import { Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Button, Typography, Container, Box } from "@mui/material";

const StyledContent = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));

export default function Page500() {
  return (
    <>
      <Helmet>
        <title> 500 Internal Server Error | MI LIBRO </title>
      </Helmet>

      <Container>
        <StyledContent sx={{ textAlign: "center", alignItems: "center" }}>
          <Typography variant="h3" paragraph>
          There was an error, please try again later
          </Typography>

          <Box
            component="img"
            src={`/public/static/images/500.svg`}
            sx={{ height: 260, mx: "auto",  marginTop: "-25%"}}
          />

          <Button
            to="/"
            size="large"
            variant="contained"
            component={RouterLink}
          >
            Go to Home
          </Button>
          <Button
            to="/"
            size="large"
            variant="contained"
            component={RouterLink}
          >
            Go to Home
          </Button>
        </StyledContent>
      </Container>
    </>
  );
}
