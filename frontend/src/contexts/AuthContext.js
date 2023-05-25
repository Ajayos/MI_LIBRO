import { useState, useContext, createContext } from "react";
import {
	getToken,
	login,
	getUserData,
	getAccess,
	logout,
} from "../utils/handleAuth";
import { useEffect } from "react";
import { useSnackbar } from "notistack";
import API from "../utils/api";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
	const { enqueueSnackbar } = useSnackbar();
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [user, setUser] = useState({});
	const [MyToken, setMyToken] = useState("");
	const [access, setAccess] = useState(false);

	useEffect(() => {
		const myToken = getToken();
		if (true) {
			setIsAuthenticated(true);
			setMyToken("jhfghfidsgujgy");
			setUser({ name: "ajayos", email: "ajayos@gmail", id: "sfdghfd68498965", pic: "https://github.com/Ajayos.png", token: "jhgfdbjhfduuygyvu" })//getUserData());
			setAccess(true)//getAccess());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	async function SignIn(email, password) {
		try {
			const response = await API.get("/users", {
				params: { email, password },
			});

			if (response.status === 200) {
				const { token, name, email, id, pic } = response.data;
				login(token, name, email, id, pic, "user");
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

	async function SignUp(name, email, password) {
		try {
			const response = await API.post("/users", {
				name,
				email,
				password,
			});

			if (response.status === 201) {
				const { token, name, email, id, pic } = response.data;
				login(token, name, email, id, pic, "user");
				setIsAuthenticated(true);
				setAccess(false);
				setMyToken(token);
				return { message: "Signed up successfully", status: 201 };
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

	async function AdminLogin(email, password) {
		try {
			const response = await API.get("/admins", {
				params: { email, password },
			});

			if (response.status === 200) {
				const { token, name, email, id, pic } = response.data;
				login(token, name, email, id, pic, "admin");
				setIsAuthenticated(true);
				setMyToken(token);
				setAccess(true);
				return { message: "Signed up successfully", status: 200 };
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

	const LogOutUser = () => {
		enqueueSnackbar("Logout successfully", { variant: "success" });
		setTimeout(() => {
			setIsAuthenticated(false);
			setMyToken("");
			setUser({});
			setAccess(false);
			logout();
		}, 500);
	};

	return (
		<AuthContext.Provider
			value={{
				SignIn,
				SignUp,
        API,
				user,
				logout: LogOutUser,
				AdminLogin,
				isAuthenticated,
				access,
				MyToken,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	return useContext(AuthContext);
}
