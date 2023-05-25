import axios from "axios";
import { BACKEND_URL, TOKEN_KEY } from "./handleAuth";

// Create an instance of Axios
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

// Define your API methods
const API = {
	post: (url, data) => api.post(url, data),
	put: (url, data) => api.put(url, data),
	get: (url, data = null) => api.get(url, { params: data }),
	delete: (url, data = null) => api.delete(url, { data }),
};

export default API;
