/* eslint-disable default-case */
import React, { useState, useContext, createContext, useEffect } from "react";

import { useAuth } from "./AuthContext";
import { socket } from "../utils/socket";

const SocketContext = createContext("");

export function SocketProvider({ children }) {
	const [isFocused, setIsFocused] = useState(true);
	const { user, access, isAuthenticated, MyToken } = useAuth();
	const [onlineUsers, setOnlineUsers] = useState(1);
	const [userList, setUserList] = useState([]);

	useEffect(() => {
		socket.emit("hehe")
		if (!isAuthenticated)  return;
		if (access)  return;

		socket.emit("userOnline", {
			user: user.id,
			token: MyToken,
			pic: user.pic,
			status: true,
		});

	}, [isFocused, user, isAuthenticated]);

	socket.on("online", (data) => {
		setOnlineUsers(data);
	});
	socket.on("userOnline", (data) => {
		setOnlineUsers(data);
	});
	return (
		<SocketContext.Provider
			value={{
				socket,
				isFocused,
				onlineUsers,
				userList,
				setUserList,
			}}
		>
			{children}
		</SocketContext.Provider>
	);
}

export function useSocket() {
	return useContext(SocketContext);
}
