import { useSnackbar } from "notistack";
import API from "../utils/api";

async function SignIn(email, password) {
    try {
        const response = await API.post("/users/login", { email, password });
        if (response.status === 200) {
            const { user, token } = response.data;
            login(token, user.name, user.email, user._id, user.pic, "user");
            setIsAuthenticated(true);
            setMyToken(token);
            setAccess(false);
            return { message: "Logged In successfully", status: 200 };
        } else {
            return { message: response.data.message, status: response.status };
        }
    } catch (error) {
        if (error.response) {
            return {
                message: error.response.data.message,
                status: error.response.status,
            };
        } else {
            return { message: "An error occurred", status: 500 };
        }
    }
}