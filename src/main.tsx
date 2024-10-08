import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import red from "@mui/material/colors/red";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

const THEME = createTheme({
	palette: {
		primary: {
			main: red["A700"],
		},
	},
});

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider theme={THEME}>
			<App />
		</ThemeProvider>
	</StrictMode>
);
