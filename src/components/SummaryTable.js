import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { formatCell, rpFormat } from "../helpers/CellContentFormat";



export default function SummaryTable(props) {
	const dataset = props.dataset

	const addRow = (data) => {
		return (
			<TableRow key={data.name}>
				<TableCell component={data.name === 'PENDAPATAN' ? 'th' : 'td'} scope="row">
					{data.name}
				</TableCell>
				<TableCell component={data.name === 'PENDAPATAN' ? 'th' : 'td'}>
					{formatCell(data.weight, 'kg')}
				</TableCell>
				<TableCell component={data.name === 'PENDAPATAN' ? 'th' : 'td'}>
					{rpFormat(data.worth)}
				</TableCell>
			</TableRow>
		)
	}

	return (
		<TableContainer sx={{
			mt: 2
		}}>
			<Table size="small" sx={{
				'th': {
					fontWeight: 'bold'
				}, 'td, th': {
					whiteSpace: 'nowrap'
				}
			}}>
				<TableHead>
					<TableRow>
						<TableCell>TOTAL</TableCell>
						<TableCell>BOBOT</TableCell>
						<TableCell>NILAI</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{dataset.map(data => addRow(data))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}