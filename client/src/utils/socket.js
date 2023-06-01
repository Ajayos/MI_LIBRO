import { io } from "socket.io-client";

const connectionOptions = {
	reconnectionAttempts: "Infinity",
	timeout: 10000,
};
export const socket = io("/", connectionOptions);
