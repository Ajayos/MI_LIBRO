/* eslint-disable default-case */
import React, { useState, useContext, createContext, useEffect } from "react";

import { useAuth } from "./AuthContext";
import { socket } from "../utils/socket";

const SocketContext = createContext("");

export function SocketProvider({ children }) {
	const [isFocused, setIsFocused] = useState(true);
	const { user, isAuthenticated, MyToken } = useAuth();
	const [onlineUsers, setOnlineUsers] = useState(0);
	const [userList, setUserList] = useState([]);

	useEffect(() => {
		if (!isAuthenticated) {
			return;
		}
		if (!user) {
			return;
		}

		socket.emit("userOnline", {
			user: user.id,
			token: MyToken,
			pic: user.pic,
			status: true,
		});
		window.onblur = () => {
			socket.emit("imOnline", {
				user: user.id,
				token: MyToken,
				status: false,
			});
			setIsFocused(false);
		};
		window.onfocus = () => {
			socket.emit("imOnline", {
				user: user.id,
				token: MyToken,
				status: true,
			});
			setIsFocused(true);
		};

		return () => socket.removeAllListeners();
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
