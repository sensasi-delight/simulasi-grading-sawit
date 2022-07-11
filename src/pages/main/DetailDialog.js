import { forwardRef } from 'react';

import Container from '@mui/system/Container';

import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import DefaultFormattedCell from '../../components/DefaultFormattedCell';
import CurrencyFormattedCell from '../../components/CurrencyFormattedCell';

import CloseIcon from '@mui/icons-material/Close';


const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const SX_BORDER_RIGHT = { borderRight: 1 }
const SX_TH_BOLD = { 'th': { fontWeight: 'bold' } }
const SX_STICKY_COLUMN = { position: "sticky", left: 0, background: "white" }
const SX_MY = { my: 4 }
const SX_ML_FLEX = { ml: 2, flex: 1 }
const SX_TH_CENTER = { 'th': { textAlign: 'center' } }

const SummaryRow = ({data}) => {
	const { totalCutWeight, totalCutWorth } = data
	return (
		<TableRow>
			<TableCell component='th' align="right" colSpan={7}>TOTAL</TableCell>
			<DefaultFormattedCell th value={totalCutWeight} unit='kg' />
			<CurrencyFormattedCell th value={totalCutWorth} />
		</TableRow>
	)
}

const TheTableRow = ({data}) => {
	return (
		<TableRow>
			<TableCell component="th" scope="row" sx={SX_STICKY_COLUMN}>
				{data.name}
			</TableCell>
			<DefaultFormattedCell value={data.qty} unit={data.unit} />
			<DefaultFormattedCell value={data.percentage * 100} unit='%' />
			<DefaultFormattedCell value={data.weight} unit='kg' />
			<CurrencyFormattedCell sx={SX_BORDER_RIGHT} value={data.worth} />
			<TableCell sx={SX_BORDER_RIGHT}>{data.description}</TableCell>
			<DefaultFormattedCell value={data.cutPercentage * 100} unit='%' />
			<DefaultFormattedCell value={data.cutWeight} unit='kg' />
			<CurrencyFormattedCell value={data.cutWorth} />

		</TableRow>
	)
}

const TheTable = ({data}) => {
	const { detailCuts, totalCutWeight, totalCutWorth } = data

	const TableRows = detailCuts.map(data => <TheTableRow key={data.id} data={data} />)

	return (
		<TableContainer>
			<Table size="small" sx={SX_TH_BOLD}>
				<TableHead sx={SX_TH_CENTER}>
					<TableRow>
						<TableCell sx={SX_STICKY_COLUMN}></TableCell>
						<TableCell colSpan={4} sx={SX_BORDER_RIGHT}>TANDAN BUAH SEGAR</TableCell>
						<TableCell sx={SX_BORDER_RIGHT} rowSpan={2}>KETERANGAN</TableCell>
						<TableCell colSpan={3}>POTONGAN</TableCell>
					</TableRow>
					<TableRow>
						<TableCell sx={SX_STICKY_COLUMN}>KATEGORI</TableCell>
						<TableCell>JUMLAH</TableCell>
						<TableCell>(%)</TableCell>
						<TableCell>BOBOT</TableCell>
						<TableCell sx={SX_BORDER_RIGHT}>Rp</TableCell>
						<TableCell>(%)</TableCell>
						<TableCell>BOBOT</TableCell>
						<TableCell>Rp</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{TableRows}
					<SummaryRow data={{ totalCutWeight, totalCutWorth }} />
				</TableBody>
			</Table>
		</TableContainer>
	)
}


const DetailDialog = ({ detailCuts, totalCutWeight, totalCutWorth, ...props }) => {
	// console.count('detail');

	return (
		<Dialog
			fullScreen
			open={props.isOpen}
			onClose={() => props.setIsOpen(false)}
			TransitionComponent={Transition}
		>

			<AppBar elevation={0} position="sticky">
				<Container maxWidth="md">

					<Toolbar>
						<Typography sx={SX_ML_FLEX} variant="h6" component="div">
							Rincian Potongan
						</Typography>
						<IconButton
							edge="start"
							color="inherit"
							onClick={() => props.setIsOpen(false)}
							aria-label="close"
						>
							<CloseIcon />
						</IconButton>
					</Toolbar>
				</Container>
			</AppBar>
			<Container maxWidth="md" sx={SX_MY}>
				<TheTable data={{ detailCuts, totalCutWeight, totalCutWorth }} />
			</Container>
		</Dialog>
	);
}

export default DetailDialog
