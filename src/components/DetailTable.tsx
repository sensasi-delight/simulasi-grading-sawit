import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import ValueTableCell from './ValueTableCell.tsx';

const SX_BORDER_RIGHT = { borderRight: 1 };
const SX_TH_BOLD = { 'th': { fontWeight: 'bold' } };
const SX_STICKY_COLUMN = { position: "sticky", left: 0, background: "white" };
const SX_TH_CENTER = { 'th': { textAlign: 'center' } };

const Row = ({ data }) => {
	return (
		<TableRow>
			<TableCell component="th" scope="row" sx={SX_STICKY_COLUMN}>
				{data.category.name}
			</TableCell>
			<ValueTableCell value={data.qty} unit={data.category.unit} />
			<ValueTableCell tooltip={data.percentageNote} sx={SX_BORDER_RIGHT} value={data.percentage * 100} unit='%' />
			<ValueTableCell sx={SX_BORDER_RIGHT} tooltip={data.cutNote} value={data.cutWorth} format='currency' />
			<ValueTableCell tooltip={data.addNote} value={data.addWorth} format='currency' />
		</TableRow>
	)
}

export default function DetailTable({ dataset }) {
	const TableRows = dataset.map((data: object, i: number) => <Row key={i} data={data} />)

	const cutWorthTotal = dataset.reduce((acc: number, curr: any) => acc + curr.cutWorth, 0);
	const addWorthTotal = dataset.reduce((acc: number, curr: any) => acc + curr.addWorth, 0);

	return (
		<TableContainer>
			<Table size="small" sx={SX_TH_BOLD}>
				<TableHead sx={SX_TH_CENTER}>
					<TableRow>
						<TableCell sx={SX_STICKY_COLUMN}></TableCell>
						<TableCell colSpan={2} sx={SX_BORDER_RIGHT}>TANDAN BUAH SEGAR</TableCell>
						<TableCell sx={SX_BORDER_RIGHT}>POTONGAN</TableCell>
						<TableCell >INSENTIF</TableCell>
					</TableRow>
					<TableRow>
						<TableCell sx={SX_STICKY_COLUMN}>KATEGORI</TableCell>
						<TableCell>JUMLAH</TableCell>
						<TableCell sx={SX_BORDER_RIGHT}>(%)</TableCell>
						<TableCell sx={SX_BORDER_RIGHT}>Rp</TableCell>
						<TableCell>Rp</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{TableRows}
				</TableBody>
				<TableFooter>
					<TableRow>
						<TableCell component='th' colSpan={3} sx={{ textAlign: 'center', ...SX_BORDER_RIGHT }}>TOTAL</TableCell>
						<ValueTableCell th sx={SX_BORDER_RIGHT} value={cutWorthTotal} format='currency' />
						<ValueTableCell th value={addWorthTotal} format='currency' />
					</TableRow>
				</TableFooter>
			</Table>
		</TableContainer>
	)
}
