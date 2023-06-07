import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./contexts/AuthContext";
import { SnackbarProvider } from "notistack";
import { DarkProvider } from "./contexts/ThemeContext";
import Router from "./Pages/Router";
import { SocketProvider } from "./contexts/SocketContext";
import ThemeProvider from "./theme";
import { StyledChart } from "./components/chart";
import ScrollToTop from "./ScrollToTop";
import { ComeProvider } from "./contexts/ComeBackContext";
import { ToastProvider } from "./contexts/Toast";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<HelmetProvider>
			<DarkProvider>
				<ComeProvider>
					<BrowserRouter>
						<AuthProvider>
						<SnackbarProvider
								maxSnack={3}
								anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
							>
								<SocketProvider>
									<ToastProvider>
										<ThemeProvider>
											<ScrollToTop />
											<StyledChart />
											<Router />
										</ThemeProvider>
									</ToastProvider>
								</SocketProvider>
							</SnackbarProvider>
						</AuthProvider>
					</BrowserRouter>
				</ComeProvider>
			</DarkProvider>
		</HelmetProvider>
	</React.StrictMode>
);

reportWebVitals();
