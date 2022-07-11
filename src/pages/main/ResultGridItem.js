import { useRef, useState, useEffect, memo } from "react";
import PropTypes from 'prop-types';

import Box from "@mui/system/Box"

import Button from "@mui/material/Button";
import Fade from "@mui/material//Fade";
import Grid from "@mui/material/Grid";

import BackupTableIcon from '@mui/icons-material/BackupTable';

import calculatePalmGrade from '../../helpers/calculatePalmGrade';
import DetailDialog from './DetailDialog';
import SummaryTable from './SummaryTable';
import TextField from "./TextField";


let detailCuts = []
let totalCutWeight = 0
let totalCutWorth = 0

const PriceForm = memo(({ onSubmit, value, toParent }) => <Grid item
	component='form'
	onSubmit={onSubmit}
	id='form3'
>

	<TextField
		key='price'
		id='price'
		value={value}
		toParent={toParent}
	/>

	<Button type='submit' sx={{ display: 'none' }}></Button>
</Grid>, (oldProps, newProps) => oldProps.value === newProps.value)

const ResultGridItem = ({ getFormValues, handleReset, ...props }) => {

	const [isDetailOpen, setIsDetailOpen] = useState(false)
	const [summaryData, setSummaryData] = useState([])
	const [pricePerKg, setPricePerKg] = useState(props.value || '')

	const detailBtnRef = useRef(null)


	useEffect(() => {
		let dataset = getFormValues()
		dataset.price = pricePerKg
		const result = calculatePalmGrade(dataset)

		detailCuts = result.detailCuts
		setSummaryData(result.summaryData)
	}, [pricePerKg, getFormValues])

	useEffect(() => {
		totalCutWeight = summaryData[1]?.weight
		totalCutWorth = summaryData[1]?.worth
	}, [summaryData])

	const receiveValue = value => {
		return setPricePerKg(value)
	}

	return (
		<Fade in={true} timeout={{ enter: 700, exit: 0 }}>
			<Grid item width="100%">
				<PriceForm
					value={pricePerKg.toString()}
					toParent={receiveValue}
					onSubmit={(e) => { e.preventDefault(); return detailBtnRef.current.focus() }}
				/>

				<SummaryTable dataset={summaryData} />


				<Box justifyContent="space-between" display="flex" mt={6}>
					<Button
						variant="outlined"
						onClick={() => handleReset()}>Ulangi
					</Button>

					<Button
						ref={detailBtnRef}
						variant="contained"
						startIcon={<BackupTableIcon />}
						onClick={() => setIsDetailOpen(true)}>Rincian
					</Button>


				</Box>

				<Button type='submit' hidden></Button>

				<DetailDialog
					isOpen={isDetailOpen}
					setIsOpen={setIsDetailOpen}
					
					detailCuts={detailCuts}
					totalCutWeight={totalCutWeight}
					totalCutWorth={totalCutWorth}
				/>

			</Grid>
		</Fade>
	)
}

ResultGridItem.propTypes = {
	getFormValues: PropTypes.func
};

export default ResultGridItem