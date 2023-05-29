import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Box } from "@mui/system";
import CustomButton from "../../components/Button/CustomButton";
import LoginBox from "../../components/Login/LoginBox";
import UserHome from "../../components/User/UserHome";
const Home = () => {
	const { user, isAuthenticated, access } = useAuth();
	if (access) return window.location.replace("/dashboard");
	return (
		<>
			
			{isAuthenticated && <UserHome />}
			{!isAuthenticated && (
				<Box sx={{ marginTop: "3%", marginLeft: 5 }}>
					<LoginBox message={"LOGIN TO SEE PAGE"}>
						<Box sx={{ width: "50%", marginLeft: 12, padding: 5 }}>
							<CustomButton
								message='&nbsp;User Login'
								onClick={() => window.location.replace("/login")}
								sx={{ width: "50%", marginLeft: -15 }}
							/>
							<CustomButton
								message='Admin Login'
								onClick={() => window.location.replace("/admin")}
								sx={{ width: "50%", marginLeft: 15 }}
							/>
						</Box>
					</LoginBox>
				</Box>
			)}
		</>
	);
};

export default Home;
