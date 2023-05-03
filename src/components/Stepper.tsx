import React from "react";

import MobileStepper from "@mui/material/MobileStepper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

type Props = {
	activeStep: number,
	handlePrev: () => void,
	handleNext: () => void
}

export default function Stepper({ activeStep, handlePrev, handleNext }: Props) {

	return <Grid item width="100%">

		<MobileStepper
			variant="progress"
			steps={3}
			position="static"
			activeStep={activeStep}
			sx={{
				mt: 2,
				flexGrow: 1
			}}
			nextButton={
				<Button size="small"
					sx={{ mx: 2 }}
					onClick={handleNext} disabled={activeStep === 2}>
					Selanjutnya
					<KeyboardArrowRight />
				</Button>
			}
			backButton={
				<Button size="small"
					sx={{ mx: 2 }}
					onClick={handlePrev} disabled={activeStep === 0}>
					<KeyboardArrowLeft />
					Kembali
				</Button>
			}
		/>
	</Grid>
}