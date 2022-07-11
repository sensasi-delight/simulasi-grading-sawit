import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import CurrencyFormattedCell from '../../components/CurrencyFormattedCell';
import DefaultFormattedCell from '../../components/DefaultFormattedCell';

const SX_TABLE_CONTAINER = { mt: 2 }
const SX_TABLE = { 'th': { fontWeight: 'bold' }, 'td, th': { whiteSpace: 'nowrap' } }

const Rows = ({ data }) =>
	<TableRow>
		<TableCell component={data.name === 'PENDAPATAN' ? 'th' : 'td'} scope="row">
			{data.name}
		</TableCell>
		<DefaultFormattedCell value={data.weight} unit='kg' th={data.name === 'PENDAPATAN'} />
		<CurrencyFormattedCell th={data.name === 'PENDAPATAN'} value={data.worth} />
	</TableRow>

export default function SummaryTable({ dataset }) {

	const rows = dataset.map(data => <Rows key={data.name} data={data} />)


	return (
		<TableContainer sx={SX_TABLE_CONTAINER}>
			<Table size="small" sx={SX_TABLE}>
				<TableHead>
					<TableRow>
						<TableCell>TOTAL</TableCell>
						<TableCell>BOBOT</TableCell>
						<TableCell>NILAI</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows}
				</TableBody>
			</Table>
		</TableContainer>
	)
}