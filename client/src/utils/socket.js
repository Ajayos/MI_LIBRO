import io from "socket.io-client";
import { BACKEND_URL } from "./handleAuth";

const connectionOptions = {
	"force new connection": true,
	reconnectionAttempts: "Infinity",
	timeout: 10000,
	transports: ["websocket"],
};
export const socket = io.connect(BACKEND_URL, connectionOptions);
