import { useState } from 'react';

import Grid from '@mui/material/Grid';
import Form from './Form';
import Stepper from './Stepper';
import ResultGridItem from './ResultGridItem';


const FORM_1_IDS = ['nRipe', 'nRaw', 'nUnripe', 'nEmptyLadder', 'nRestan']
const FORM_2_IDS = ['nLongRod', 'nSmallLadder', 'nPiece', 'nDirtyPiece', 'nWeight']

const init = Object.fromEntries(FORM_1_IDS.map(inputId => [inputId, '']))

export default function Index() {
	// console.count('main')
	const [activeStep, setActiveStep] = useState(0)
	const [formValues, setFormValues] = useState(init)
	const [isTextFieldErrors, setIsTextFieldErrors] = useState({})



	const getInvalidTextFieldIds = () => {

		if (activeStep === 0) {
			return FORM_1_IDS.filter(inputId => formValues[inputId] === '' || isNaN(formValues[inputId]))
		}

		if (activeStep === 1) {
			return FORM_2_IDS.filter(inputId => formValues[inputId] === '' || isNaN(formValues[inputId]))
		}
	}

	const hasErrors = () => {
		const invalidTextFieldIds = getInvalidTextFieldIds()
		return invalidTextFieldIds.length !== 0
	}

	const isFormValuesValid = () => {
		

		const invalidTextFieldIds = getInvalidTextFieldIds()

		setIsTextFieldErrors(
			Object.fromEntries(invalidTextFieldIds.map(elementId => [elementId, true]))
		)

		if (!hasErrors()) {
			return true
		}

		return false
	}

	const handleNext = () => {
		if (isFormValuesValid()) {
			return setActiveStep(activeStep + 1)
		}
	}

	const handlePrev = () => setActiveStep(prev => prev - 1)

	const getFormValues = () => {
		return formValues
	}

	const handleReset = () => {
		setFormValues({})
		setActiveStep(0)
	}


	const Grids = [
		<Form
			id="form1"
			key="form1"
			inputIds={FORM_1_IDS}
			handleNext={handleNext}
			// toParent={values => setFormValues(values)}
			values={formValues}
			isErrors={isTextFieldErrors}
		/>, <Form
			id="form2"
			key="form2"
			inputIds={FORM_2_IDS}
			handleNext={handleNext}
			values={formValues}
			isErrors={isTextFieldErrors}
		/>,
		<ResultGridItem
			key="result"
			getFormValues={getFormValues}
			value={formValues['price']}
			handleReset={handleReset}
		/>
	]

	return (
		<Grid container justifyContent="center" mt={4}>
			{Grids[activeStep]}
			<Stepper activeStep={activeStep} handleNext={handleNext} handlePrev={handlePrev} />
		</Grid>
	);
}