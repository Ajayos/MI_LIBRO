import { useState, useContext, createContext, useEffect } from "react";
import {
	getToken,
	login,
	getUserData,
	getAccess,
	logout,
} from "../utils/handleAuth";
import { useSnackbar } from "notistack";
import API from "../utils/api";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
	const navigate = useNavigate();
	const { enqueueSnackbar } = useSnackbar();
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [user, setUser] = useState({});
	const [MyToken, setMyToken] = useState("");
	const [access, setAccess] = useState(false);
	const [books, setBooks] = useState({});
	const [error, setError] = useState(false);
	const [userList, setUserList] = useState([
		{
			id: 1,
			name: "Ajay o s ",
			email: "ajayos@gmail.com",
			pic: "https://i.ibb.co/5Y3mJ3Y/john.jpg",
			status: true,
			phone: "7510",
			seen: "online",
		},
		{
			id: 2,
			name: "Ajay o s ",
			email: "ajayos@gmail.com",
			pic: "https://i.ibb.co/5Y3mJ3Y/john.jpg",
			status: true,
			phone: "7510",
			seen: "online",
		},
	]);
	const [adminHomeData, setAdminHomeData] = useState({
		users: 0,
		books: 0,
		rbooks: 0,
		online: 0,
	});

	useEffect(() => {
		const myToken = getToken();
		if (myToken) {
			setIsAuthenticated(true);
			setMyToken(myToken);
			setUser(getUserData()); //);
			setAccess(getAccess()); //getAccess());
		}
	}, []);

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
	async function getUserData_() {
		try {
			const response = await API.get("/users");
			if (response.status === 200) {
				return response.data;
			} else {
				return response.status;
			}
		} catch (e) {
			return { message: e.message };
		}
	}

	async function updateUserProfileFetch(pic) {
		try {
			const response = await API.put("/users/profile", { pic: pic });
			if (response.status === 200) {
				localStorage.setItem("@pic", pic);
				window.location.reload();
				return { message: "Pic Update successfully", status: 200 };
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
	async function updateUserDataFetch(data) {
		try {
			const response = await API.put("/users", JSON.stringify(data));
			if (response.status === 200) {
				window.location.reload();
				return { message: "Pic Update successfully", status: 200 };
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
	async function updateUserPasswordFetch(password) {
		try {
			const response = await API.put(
				"/users/changePassword",
				JSON.stringify({ password: password })
			);
			if (response.status === 200) {
				const { token } = response.data;
				console.log(token);
				localStorage.setItem("@key", token);
				window.location.reload();
				return { message: "Password Update successfully", status: 200 };
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
	async function Forgot(email, dob, password) {
		try {
			const response = await API.put("/users/forgotPassword", {
				dob: "2002-06-03T18:30:00.000+00:00",
				email,
				password,
			});

			if (response.status === 200) {
				const { message } = response.data;
				alert(message);
				return { message: message, status: 201 };
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
	async function SignUp(data) {
		try {
			const response = await API.post("/users", data);

			if (response.status === 201) {
				const { token, name, email, id, pic } = response.data;
				login(token, name, email, id, pic, "user");
				setAccess(false);
				setMyToken(token);
				setIsAuthenticated(true);

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
			const response = await API.post("/admins/login", {
				email,
				password,
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

	async function GetBooks() {
		try {
			const response = await API.get("/books");

			if (response.status === 200) {
				const data = response.data;
				setBooks(data);
			} else {
				setError(response.status);
			}
		} catch (error) {
			if (error.response) {
				setError({
					message: error.response.data.message,
					status: error.response.status,
				});
			} else {
				setError("An error occurred");
			}
		}
	}

	async function GetDashboradData() {
		try {
			const response = await API.post("/admins/dashboard");

			if (response.status === 200) {
				const data = response.data;
				setAdminHomeData(data);
			} else {
				setError(response.status);
			}
		} catch (error) {
			if (error.response) {
				setError({
					message: error.response.data.message,
					status: error.response.status,
				});
			} else {
				setError("An error occurred");
			}
		}
	}
	async function GetUsersData() {
		try {
			const response = await API.get("/admin/users");
			//const response = await API.get("/admins/users");
			//setUsers(response.data);
			//setLoading(false); <Skeleton animation="wave" height={50} />
			return response.data;
		} catch (error) {
			if (error.response) {
				setError({
					message: error.response.data.message,
					status: error.response.status,
				});
			} else {
				setError("An error occurred");
			}
		}
	}

	async function UpdateUserPermition(select) {
		try {
			const response = await API.put(`/user/access:${select.id}`, {
				access: select.access,
			});

			if (response.status === 200) {
				await GetUsersData();
			} else {
				setError(response.status);
			}
		} catch (error) {
			if (error.response) {
				setError({
					message: error.response.data.message,
					status: error.response.status,
				});
			} else {
				setError("An error occurred");
			}
		}
	}

	async function AddNewBook(data) {
		try {
			const response = await API.post(`/books`, data);

			if (response.status === 200) {
				console.log(response.data);
				//await GetUsersData();
			} else {
				setError(response.status);
			}
		} catch (error) {
			if (error.response) {
				setError({
					message: error.response.data.message,
					status: error.response.status,
				});
			} else {
				setError("An error occurred");
			}
		}
	}

	async function IsPermit(user) {
		if (isAuthenticated) {
			if (access) {
				if (!user) {
					navigate("/dashboard", { replace: true });
				}
			} else {
				if (user) {
					navigate("/home", { replace: true });
				}
			}
		} else {
			navigate("/login", { replace: true });
		}
	}

	async function createBook() {}

	const LogOutUser = () => {
		enqueueSnackbar("Logout successfully", { variant: "success" });
		setTimeout(async () => {
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
				Forgot,
				createBook,
				GetDashboradData,
				adminHomeData,
				updateUserProfileFetch,
				updateUserDataFetch,
				updateUserPasswordFetch,
				GetBooks,
				getUserData_,
				AddNewBook,
				IsPermit,
				USERLIST: userList,
				GetUsersData,
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
