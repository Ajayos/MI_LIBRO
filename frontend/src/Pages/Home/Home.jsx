import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useAuth } from "../../contexts/AuthContext";
import { Box } from "@mui/system";
import CustomButton from "../../components/Button/CustomButton";
import Logo from "../../components/Logo/Logo";

const Home = () => {
  const { user, isAuthenticated, access } = useAuth();
  if (access) return window.location.replace("/dashboard");
  return (
    <>
      <Navbar />
      {isAuthenticated && <h1>Welcome! {user.username}</h1>}
      {!isAuthenticated && (
        <>
          <Box
            height="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            width={1}
            background="linear-gradient(#78a5f8, #d6d9dd)"
          >
            <Box
              flexDirection="column"
              alignItems="center"
              sx={{ marginTop: -50, marginLeft: 5 }}
            >
              <Logo message={"LOGIN TO SEE PAGE"} />
            </Box>

            <CustomButton
              message="User Login"
              onClick={() => window.location.replace("/login")}
              sx={{ width: "10%", marginLeft: -45 }}
            />
            <CustomButton
              message="Admin Login"
              onClick={() => window.location.replace("/admin")}
              sx={{ width: "10%", marginLeft: 10 }}
            />
          </Box>
        </>
      )}
    </>
  );
};

export default Home;
