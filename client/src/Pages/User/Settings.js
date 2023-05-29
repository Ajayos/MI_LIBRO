import { Helmet } from "react-helmet-async";
import { useTheme } from "@mui/material/styles";
import { Box, Container, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import SettingsPassword from "./SettingsPassword";

export default function Account() {
  const theme = useTheme();
  const { isAuthenticated, IsPermit, user } = useAuth();

  useEffect(() => {
    //IsPermit(false);
  }, [isAuthenticated]);

  return (
    <>
      <Helmet>
        <title>Settings | MI LIBRO</title>
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
            <Typography variant="h4">Settings</Typography>
            <SettingsPassword />
          </Stack>
        </Container>
      </Box>
    </>
  );
}
