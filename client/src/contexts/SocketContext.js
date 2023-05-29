/* eslint-disable default-case */
import React, { useState, useContext, createContext, useEffect } from 'react'

import { useAuth } from './AuthContext'
import { socket } from "../utils/socket";

const SocketContext = createContext('')

export function SocketProvider({ children }) { 
	const [ isFocused, setIsFocused ] = useState(true)
	const { user, isAuthenticated } = useAuth()

	useEffect(() => {
		if(!user){ return }

		window.onblur = () => {
			socket.emit('imOnline', { 
				user: user.id, 
				status: false,
			})
			setIsFocused(false)
		}
		window.onfocus = () => {
			socket.emit('imOnline', { 
				user: user.id, 
				status: true,
			})
			setIsFocused(true)
		}

		return () => socket.removeAllListeners()
	},[isFocused, user, isAuthenticated])

	return(
		<SocketContext.Provider 
			value={{
				isFocused,
			}}
		>
			{children} 
		</SocketContext.Provider>
	)
}

export function useSocket() {
	return useContext(SocketContext)
}