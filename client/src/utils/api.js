import axios from "axios";
import { BACKEND_URL, TOKEN_KEY } from "./handleAuth";
import { Navigate as navigate } from "react-router-dom";
const api = axios.create({
	baseURL: BACKEND_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

const token = atob(localStorage.getItem(TOKEN_KEY));
if (token) {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

const handleErrors = (error) => {
	if (error.response) {
		const { status } = error.response;
		if (status === 500) {
			navigate("/500", { state: { error: error.response.data.message } });
		} else if (status === 401) {
			navigate("/401");
		} else if (status === 404) {
			navigate("/404");
		}
	} else {
		console.error(error);
		// Handle other errors if needed
	}
};

const API = {
	post: (url, data) => api.post(url, data).catch(handleErrors),
	put: (url, data) => api.put(url, data).catch(handleErrors),
	get: (url, data = null) => api.get(url, { params: data }).catch(handleErrors),
	delete: (url, data = null) => api.delete(url, { data }).catch(handleErrors),
};

export default API;
