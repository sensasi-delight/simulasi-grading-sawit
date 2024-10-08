import { useState } from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import DisclaimerDialog from "./components/disclaimer-dialog";
import Header from "./components/header";
import Footer from "./components/footer";
import Stepper from "./components/stepper";
// import Notification from './components/Notification';
import DonationDialog from "./components/donation-dialog";
import SavedCalculation from "./components/saved-calculation";
import Form from "./components/form";
import ResultBox from "./components/result-box";

import vars from "./helpers/vars.ts";
import { Fade } from "@mui/material";

const INPUT_CODES = [
	[
		"BM",
		"BLM",
		// 'TBK', // skipped because 100% cut
		"BMTG",
	],
	[
		"BGP",
		// 'JK', // skipped because 100% cut
		"BR",
		// 'BP', // skipped because 100% cut
		"BK",
		"PBB",
		"totalWeight",
	],
];

export default function App() {
	vars.formValues = useState({});
	vars.activeStep = useState(0);

	//   const [notifications, setNotifications] = useState([])

	//   window.onmessage = (event) => {
	//     if (event.data.notification) {
	//       const notification = {
	//         id: event.data.messageId || Date.now(),
	//         text: event.data.notification.body || 'terjadi kesalahan',
	//         isShow: true,
	//         buttonText: event.data.data.buttonText,
	//         buttonUrl: event.data.data.buttonUrl
	//       }

	//       notifications.push(<Notification key={notification.id} data={notification} />)
	//       setNotifications([...notifications])
	//     }
	//   };

	const [isTextFieldErrors, setIsTextFieldErrors] = useState({});

	const getInvalidTextFieldIds = () => {
		return INPUT_CODES[vars.activeStep[0]].filter(
			(inputId) =>
				vars.formValues[0][inputId] === "" || isNaN(vars.formValues[0][inputId])
		);
	};

	const hasErrors = () => {
		const invalidTextFieldIds = getInvalidTextFieldIds();
		return invalidTextFieldIds.length !== 0;
	};

	const isFormValuesValid = () => {
		const invalidTextFieldIds = getInvalidTextFieldIds();

		setIsTextFieldErrors(
			Object.fromEntries(
				invalidTextFieldIds.map((elementId) => [elementId, true])
			)
		);

		if (!hasErrors()) {
			return true;
		}

		return false;
	};

	const handleNext = () => {
		if (isFormValuesValid()) {
			return vars.activeStep[1](vars.activeStep[0] + 1);
		}
	};

	const handlePrev = () => vars.activeStep[1]((prev: number) => prev - 1);

	return (
		<Container maxWidth="sm">
			<Header />

			<Box display="flex" justifyContent="space-between">
				<Box>
					<SavedCalculation />
				</Box>

				<Box display="flex" alignItems="center">
					<DisclaimerDialog />

					<DonationDialog />
				</Box>
			</Box>

			<Box>
				<Fade
					in={vars.activeStep[0] === 0}
					timeout={{
						enter: 500,
						exit: 0,
					}}
					unmountOnExit
				>
					<Box>
						<Form
							inputCodes={INPUT_CODES[0]}
							handleNext={handleNext}
							values={vars.formValues[0]}
							isErrors={isTextFieldErrors}
						/>
					</Box>
				</Fade>

				<Fade
					in={vars.activeStep[0] === 1}
					timeout={{
						enter: 500,
						exit: 0,
					}}
					unmountOnExit
				>
					<Box>
						<Form
							inputCodes={INPUT_CODES[1]}
							handleNext={handleNext}
							values={vars.formValues[0]}
							isErrors={isTextFieldErrors}
						/>
					</Box>
				</Fade>

				<Fade
					in={vars.activeStep[0] === 2}
					timeout={{
						enter: 500,
						exit: 0,
					}}
					unmountOnExit
				>
					<Box>
						<ResultBox />
					</Box>
				</Fade>
			</Box>

			<Stepper
				activeStep={vars.activeStep[0]}
				handleNext={handleNext}
				handlePrev={handlePrev}
			/>

			<Footer />
			{/* {notifications}  */}
		</Container>
	);
}