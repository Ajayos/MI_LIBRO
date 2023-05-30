import { Helmet } from "react-helmet-async";
import { useTheme } from "@mui/material/styles";
import { Box, Container, Stack, Typography, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import SettingsPassword from "./SettingsPassword";

export default function Account() {
  const theme = useTheme();
  const { isAuthenticated, IsPermit, user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    IsPermit(false);

    // Simulating loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
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
            {isLoading ? (
              <Skeleton variant="text" width={200} height={40} />
            ) : (
              <Typography variant="h4">Settings</Typography>
            )}
            
            <SettingsPassword />
          </Stack>
        </Container>
      </Box>
    </>
  );
}
