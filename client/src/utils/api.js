import axios from "axios";
import { BACKEND_URL, TOKEN_KEY } from "./handleAuth";
import { useSnackbar } from "notistack";
import Toast from "../Toast";

const api = axios.create({
	baseURL: BACKEND_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

const token = localStorage.getItem(TOKEN_KEY);
if (token) {
	api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

const API = {
	post: (url, data) => api.post(url, data).catch(handleErrors),
	put: (url, data) => api.put(url, data).catch(handleErrors),
	get: (url, data = null) => api.get(url, { params: data }).catch(handleErrors),
	delete: (url, data = null) => api.delete(url, { data }).catch(handleErrors),
};

const handleErrors = (error) => {
	return new Promise((resolve, reject) => {
		if (error.response) {
			const { status } = error.response;
			if (status === 500) {
				reject({ message: error.response.data.message, statusCode: 500 });
				return <Toast open={true} message='Hello, Toast!' severity='success' />;
			} else if (status === 401) {
				return <Toast open={true} message='Hello, Toast!' severity='success' />;
				//reject({ message: "Unauthorized", statusCode: 401 });
			} else if (status === 404) {
				reject({ message: "Page not found", statusCode: 404 });
				return <Toast open={true} message='Hello, Toast!' severity='success' />;
			}
		} else {
			console.error(error);
			reject({ message: "An error occurred", statusCode: 0 });
			return <Toast open={true} message='Hello, Toast!' severity='success' />;
		}
	});
};

export default API;
