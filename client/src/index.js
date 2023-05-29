import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./contexts/AuthContext";
import { SnackbarProvider } from "notistack";
import Router from "./Pages/Router";
import { SocketProvider } from "./contexts/SocketContext";
import ThemeProvider from "./theme";
import { StyledChart } from "./components/chart";
import ScrollToTop from "./ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<HelmetProvider>
			<BrowserRouter>
				<AuthProvider>
					<SocketProvider>
						<SnackbarProvider
							maxSnack={3}
							anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
						>
							<ThemeProvider>
								<ScrollToTop />
								<StyledChart />
								<Router />
							</ThemeProvider>
						</SnackbarProvider>
					</SocketProvider>
				</AuthProvider>
			</BrowserRouter>
		</HelmetProvider>
	</React.StrictMode>
);


reportWebVitals();