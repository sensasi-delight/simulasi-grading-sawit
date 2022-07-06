import { useState } from 'react';

// Material UI
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import MobileStepper from '@mui/material/MobileStepper';

// Material Icon
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import BackupTableIcon from '@mui/icons-material/BackupTable';

// My Components
import DetailDialog from './components/DetailDialog';
import SummaryTable from './components/SummaryTable';
import FormMembers1 from './components/FormMembers1';
import FormMembers2 from './components/FormMembers2';

// My Helpers
import calculatePalmGrade from './helpers/calculatePalmGrade';

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

export default function Main() {
	const [activeStep, setActiveStep] = useState(0);
	const [isDetailOpen, setIsDetailOpen] = useState(false);

	const [formValue, setFormValue] = useState({ ...formValueDefault });
	const [isError, setIsError] = useState({ ...isErrorDefault })
	const [summaryDataset, setSummaryDataset] = useState([])
	const [detailDataset, setDetailDataset] = useState([])

	const handleReset = () => {
		setActiveStep(0)
		setFormValue({ ...formValueDefault })
		setIsError({ ...isErrorDefault })
		setSummaryDataset([])
		setDetailDataset([])
	}

	const calculate = () => {

		const data = {}
		Object.entries(formValue).map(([key, value]) => data[key] = parseFloat(value))


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


		formValue[event.target.id] = event.target.value
		setFormValue({ ...formValue })

		// setIsForm1Complete(isFormComplete('form1'))


		if (!Object.values(formValue).includes('')) {
			calculate()
		}
	}

	const handleFormSubmit = (e) => {
		e.preventDefault();

		let elementList = ['nRipe', 'nRaw', 'nUnripe', 'nEmptyLadder', 'nRestan']

		if (e.target.id === 'form2') {
			elementList = ['nLongRod', 'nSmallLadder', 'nPiece', 'nDirtyPiece', 'nWeight']
		}

		if (e.target.id === 'form3') {
			document.activeElement.blur()
			return false
		}

		elementList.map((value) => {
			isError[value] = formValue[value] === ''
			return setIsError({ ...isError })
		})

		if (!Object.values(isError).includes(true)) {
			handleNext()
		}

		return false
	}

	const handleNext = () => {

		if (activeStep === 1) {
			calculate()
		}

		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	}

	const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

	return (
		<>
			<Grid container justifyContent="center" sx={{
				mt: 4
			}}>
				{activeStep === 0 && (
					<Fade in={activeStep === 0} timeout={{ enter: 700, exit: 0 }}>
						<Grid item
							component='form'
							onSubmit={handleFormSubmit}
							id="form1"
						>
							<FormMembers1
								formValue={formValue}
								handleValueChange={handleValueChange}
								isError={isError}
							/>

							<Button type='submit' sx={{ display: 'none' }}></Button>
						</Grid>
					</Fade>
				)}

				{activeStep === 1 && (
					<Fade in={activeStep === 1} timeout={{ enter: 700, exit: 0 }}>
						<Grid id="form2" item component='form' onSubmit={handleFormSubmit}>
							<FormMembers2
								formValue={formValue}
								handleValueChange={handleValueChange}
								isError={isError} />
							<Button type='submit' sx={{ display: 'none' }}></Button>
						</Grid>
					</Fade>
				)}

				{activeStep === 2 && (
					<Fade in={activeStep === 2} timeout={{ enter: 700, exit: 0 }}>
						<Grid item width="100%">
							<Box component='form' id="form3" onSubmit={handleFormSubmit}>
								<TextField
									size="small"
									autoFocus
									value={formValue.price}
									onChange={handleValueChange}
									fullWidth
									margin="dense"
									type="number"
									required
									id="price"
									label="Harga"
									name="price"
									autoComplete="off"
									InputProps={{
										startAdornment: <InputAdornment position="start">Rp</InputAdornment>,
										endAdornment: <InputAdornment position="end">/kg</InputAdornment>,
										inputMode: 'numeric', pattern: '[0-9]*',
										inputProps: { min: 0 }
									}}
								/>
							</Box>


							<SummaryTable dataset={summaryDataset} />


							<Box
								justifyContent="space-between" display="flex"
								sx={{
									mt: 6
								}}
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
								onClick={handleFormSubmit} disabled={activeStep === 2}>
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