import { useState, useRef } from 'react';

// Material UI
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Grid from '@mui/material/Grid';
import MobileStepper from '@mui/material/MobileStepper';

// Material Icon
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import BackupTableIcon from '@mui/icons-material/BackupTable';

// My Components
import DetailDialog from './components/DetailDialog';
import SummaryTable from './components/SummaryTable';

// My Helpers
import calculatePalmGrade from './helpers/calculatePalmGrade';
import MyTextField from './components/MyTextField';

const isErrorDefault = {
	nRipe: false,
	nRaw: false,
	nUnripe: false,
	nEmptyLadder: false,
	nRestan: false,
	nLongRod: false,
	nSmallLadder: false,
	nPiece: false,
	nDirtyPiece: false,
	nWeight: false,
	price: false
}

const formValueDefault = {
	nRipe: '',
	nRaw: '',
	nUnripe: '',
	nEmptyLadder: '',
	nRestan: '',
	nLongRod: '',
	nSmallLadder: '',
	nPiece: '',
	nDirtyPiece: '',
	nWeight: '',
	price: ''
}



const form1Inputs = ['nRipe', 'nRaw', 'nUnripe', 'nEmptyLadder', 'nRestan']
const form2Inputs = ['nLongRod', 'nSmallLadder', 'nPiece', 'nDirtyPiece', 'nWeight']

export default function Main() {
	const [activeStep, setActiveStep] = useState(0);
	const [isDetailOpen, setIsDetailOpen] = useState(false);

	const [isError, setIsError] = useState({ ...isErrorDefault })
	const [summaryDataset, setSummaryDataset] = useState([])
	const [detailDataset, setDetailDataset] = useState([])
	const formValueRef = useRef({ ...formValueDefault });

	const handleReset = () => {
		setActiveStep(0)
		formValueRef.current = { ...formValueDefault }
		setIsError({ ...isErrorDefault })
		setSummaryDataset([])
		setDetailDataset([])
	}

	const calculate = () => {
		const data = {}
		Object.entries(formValueRef.current).map(([key, value]) => data[key] = parseFloat(value))

		const result = calculatePalmGrade(data)

		setSummaryDataset(result.summaryDataset)
		setDetailDataset(result.dataset)
	}

	const handleValueChange = (event) => {
		isError[event.target.id] = false

		if (event.target.id === '') {
			isError[event.target.id] = true
		}
		setIsError({ ...isError })

		formValueRef.current[event.target.id] = event.target.value

		if (event.target.id === 'price') {
			calculate()
		}
	}


	const handleNext = (e) => {

		e.preventDefault();

		let elementList = form1Inputs

		if (activeStep === 1) {
			calculate()
			elementList = form2Inputs
		}

		if (activeStep === 2) {
			document.activeElement.blur()
			return false
		}

		elementList.map(elementId => isError[elementId] = formValueRef.current[elementId] === '')

		setIsError({ ...isError })

		if (!Object.values(isError).includes(true)) {
			setActiveStep((prevActiveStep) => prevActiveStep + 1);
		}
	}

	const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

	return (
		<>
			<Grid container justifyContent="center" mt={4}>
				{activeStep === 0 && (
					<Fade in={activeStep === 0} timeout={{ enter: 700, exit: 0 }}>
						<Grid item
							component='form'
							onSubmit={handleNext}
							id="form1"
						>
							{form1Inputs.map(inputId =>
								<MyTextField
									key={inputId}
									id={inputId}
									value={formValueRef.current[inputId]}
									isError={isError[inputId]}
									handleValueChange={handleValueChange}
								/>
							)}

							<Button type='submit' sx={{ display: 'none' }}></Button>
						</Grid>
					</Fade>
				)}

				{activeStep === 1 && (
					<Fade in={activeStep === 1} timeout={{ enter: 700, exit: 0 }}>
						<Grid id="form2" item component='form' onSubmit={handleNext}>
							{form2Inputs.map(inputId =>
								<MyTextField
									key={inputId}
									id={inputId}
									value={formValueRef.current[inputId]}
									isError={isError[inputId]}
									handleValueChange={handleValueChange}
								/>
							)}

							<Button type='submit' sx={{ display: 'none' }}></Button>
						</Grid>
					</Fade>
				)}

				{activeStep === 2 && (
					<Fade in={activeStep === 2} timeout={{ enter: 700, exit: 0 }}>
						<Grid item width="100%">
							<Box component='form' id="form3" onSubmit={handleNext}>
								{<MyTextField
									id="price"
									value={formValueRef.current['price']}
									isError={isError['price']}
									handleValueChange={handleValueChange}
								/>}
							</Box>


							<SummaryTable dataset={summaryDataset} />


							<Box
								justifyContent="space-between" display="flex" mt={6}
							>
								<Button
									variant="outlined"
									onClick={() => handleReset()}>Ulangi
								</Button>

								<Button
									variant="contained"
									startIcon={<BackupTableIcon />}
									onClick={() => setIsDetailOpen(true)}>Rincian
								</Button>


							</Box>

							<Button type='submit' hidden></Button>
						</Grid>
					</Fade>

				)}

				<Grid item width="100%">

					<MobileStepper
						variant="progress"
						steps={3}
						position="static"
						activeStep={activeStep}
						sx={{
							mt: 4,
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
								onClick={handleBack} disabled={activeStep === 0}>
								<KeyboardArrowLeft />
								Kembali
							</Button>
						}
					/>
				</Grid>
			</Grid>

			<DetailDialog isOpen={isDetailOpen} setIsOpen={setIsDetailOpen} dataset={detailDataset} />
		</>
	);
}