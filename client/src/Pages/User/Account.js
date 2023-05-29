import { Helmet } from "react-helmet-async";
import { useTheme } from "@mui/material/styles";
import { Grid, Container, Typography, Stack, Box } from "@mui/material";
import { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import AccountProfile from "./AccountProfile";
import AccountProfileDetails from "./AccountProfileDetails";

export default function Account() {
  const theme = useTheme();
  const { isAuthenticated, IsPermit, user } = useAuth();

  useEffect(() => {
    //IsPermit(false);
  }, [isAuthenticated]);

  return (
    <>
      <Helmet>
        <title>Account | MI LIBRO</title>
      </Helmet>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={3}>
            <div>
              <Typography variant="h4">Account</Typography>
            </div>
            <br />
            <div>
              <Grid container spacing={5}>
                <Grid xs={12} md={6} lg={4}>
                  <AccountProfile />
                </Grid>
                <Grid xs={12} md={6} lg={8}>
                  <AccountProfileDetails />
                </Grid>
              </Grid>
            </div>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
