import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableFooter from "@mui/material/TableFooter";
import ValueTableCell from "./ValueTableCell.tsx";

const SX_TABLE_CONTAINER = { mt: 2 };
const SX_TABLE = {
	th: {
		fontWeight: "bold",
	},
	"td, th": {
		whiteSpace: "nowrap",
	},
};

interface Data {
	name: string;
	weight: number;
	worth: number;
}

const Row = ({ data }: { data: Data }) => (
	<TableRow>
		<TableCell>{data.name}</TableCell>
		<ValueTableCell value={data.weight} unit="kg" />
		<ValueTableCell value={data.worth} format="currency" />
	</TableRow>
);

export default function SummaryTable({ dataset }: { dataset: Data[] }) {
	const rows = dataset.map((data) => <Row key={data.name} data={data} />);

	const finalWeight =
		dataset[0]?.weight - dataset[1]?.weight + dataset[2]?.weight;
	const finalWorth = dataset[0]?.worth - dataset[1]?.worth + dataset[2]?.worth;

	return (
		<TableContainer sx={SX_TABLE_CONTAINER}>
			<Table size="small" sx={SX_TABLE}>
				<TableHead>
					<TableRow>
						<TableCell>NAMA</TableCell>
						<TableCell>BOBOT</TableCell>
						<TableCell>NILAI</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>{rows}</TableBody>
				<TableFooter>
					<TableRow>
						<TableCell component="th" scope="row">
							HASIL AKHIR
						</TableCell>
						<ValueTableCell th value={finalWeight} unit="kg" />
						<ValueTableCell th value={finalWorth} format="currency" />
					</TableRow>
				</TableFooter>
			</Table>
		</TableContainer>
	);
}
