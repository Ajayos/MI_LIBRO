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
import Toast from "../Toast";
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
			setUser(getUserData());
			setAccess(getAccess());
		}
	}, []);

	async function SignIn(email, password) {
		return await API.post("/users/login", { email, password });
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
	async function AdminGetUserData_(id) {
		try {
			const response = await API.get("/admins/users/" + id);
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
				localStorage.setItem("QHBpYw==", pic);
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
	async function AdminUpdateUserDataFetch(data) {
		try {
			const response = await API.put("/admins/users", JSON.stringify(data));
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
				localStorage.setItem("QGtleQ==", token);
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
		return await API.put("/users/forgotPassword", {
			dob: dob,
			email,
			password,
		});
	}
	async function SignUp(data) {
		return await API.post("/users", data);
	}

	async function AdminLogin(email, password) {
		try {
			const response = await API.post("/admins/login", {
				email,
				password,
			});

			if (response.status === 200) {
				const { token, admin } = response.data;
				const { name, email, _id, pic } = admin;
				login(token, name, email, _id, pic, "admin");
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
			const response = await API.get("/users/books");

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
				setAdminHomeData({
					users: data.user,
					books: data.books,
					rbooks: data.req,
				});
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

	async function CommentBook(data) {
		try {
			const response = await API.post(
				"/users/books/comment",
				JSON.stringify(data)
			);

			if (response.status === 200) {
				console.log(response.data);
				const data = response.data;
				setAdminHomeData({
					users: data.user,
					books: data.books,
					rbooks: data.req,
				});
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
			const response = await API.get("/admins/users");
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
			const response = await API.put(`/admins/access/${select.id}`, {
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
			const response = await API.post(`/admins/books`, data);

			if (response.status === 200) {
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
	async function EditBook(data) {
		try {
			const response = await API.put(`/admins/books`, data);

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

	async function UpdateUserAdmin(data) {
		try {
			const response = await API.put(`/admins/user`, data);
			return response.data;
			//await GetUsersData();
			//setError(response.status);
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

	async function BlockUser(data) {
		try {
			const response = await API.put(`/admins/user/access`, data);
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

	async function DeleteUser(id) {
		try {
			const response = await API.put(`/admins/user/delete/${id}`);
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

	async function IsPermit(user) {
		if (isAuthenticated) {
			//
		} else {
			navigate("/login", { replace: true });
		}
	}
	async function sendRequest(request) {
		try {
			const response = await API.post(
				`/users/book/request`,
				JSON.stringify(request)
			);
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
	async function getRequest() {
		try {
			const response = await API.post(`/admins/books/request`);
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
	async function RequestAp(id) {
		try {
			const response = await API.post(
				`/admins/books/accept`,
				JSON.stringify({ id: id })
			);
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
	async function RequestCn(id) {
		try {
			const response = await API.post(
				`/admins/books/reject`,
				JSON.stringify({ id: id })
			);
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
	async function returnBook(id, star) {
		try {
			const response = await API.post(
				`/users/books/return`,
				JSON.stringify({ id: id, stars: star })
			);
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
	async function DeleteBook(id) {
		try {
			const response = await API.delete(`/admins/books/` + id);
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
	async function LikeBook(id, like) {
		if (like) {
			await API.post(`/users/books/liked`, JSON.stringify({ id: id })).catch(
				(error) => {
					if (error.statusCode === 500) {
						return (
							<Toast open={true} message='Hello, Toast!' severity='success' />
						);
						// Redirect to the 500 error page using your preferred method
					} else if (error.statusCode === 401) {
						return (
							<Toast open={true} message='Hello, Toast!' severity='success' />
						);
						// Redirect to the 401 error page using your preferred method
					} else if (error.statusCode === 404) {
						return (
							<Toast open={true} message='Hello, Toast!' severity='success' />
						);
						// Redirect to the 404 error page using your preferred method
					} else {
						console.error(error);
						// Handle other errors if needed
					}
				}
			);
		} else {
			await API.put(`/users/books/liked`, JSON.stringify({ id: id })).catch(
				(error) => {
					if (error.statusCode === 500) {
						enqueueSnackbar(error.message, { variant: "error" });
						// Redirect to the 500 error page using your preferred method
					} else if (error.statusCode === 401) {
						enqueueSnackbar(error.message, { variant: "error" });
						// Redirect to the 401 error page using your preferred method
					} else if (error.statusCode === 404) {
						enqueueSnackbar(error.message, { variant: "error" });
						// Redirect to the 404 error page using your preferred method
					} else {
						console.error(error);
						// Handle other errors if needed
					}
				}
			);
		}
	}

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
				returnBook,
				DeleteBook,
				GetDashboradData,
				EditBook,
				sendRequest,
				RequestAp,
				RequestCn,
				adminHomeData,
				updateUserProfileFetch,
				updateUserDataFetch,
				updateUserPasswordFetch,
				GetBooks,
				BlockUser,
				DeleteUser,
				getRequest,
				getUserData_,
				AdminGetUserData_,
				UpdateUserAdmin,
				AddNewBook,
				IsPermit,
				CommentBook,
				LikeBook,
				AdminUpdateUserDataFetch,
				USERLIST: userList,
				GetUsersData,
				logout: LogOutUser,
				AdminLogin,
				isAuthenticated,
				access,
				MyToken,
			}}
		>
			{error && enqueueSnackbar(error, { variant: "error" })}
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	return useContext(AuthContext);
}
