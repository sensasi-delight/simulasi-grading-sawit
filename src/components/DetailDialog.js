import { forwardRef, memo } from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Container from '@mui/system/Container';

import { formatCell, rpFormat } from "../helpers/CellContentFormat";


const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const areEqual = (oldProps, newProps) => JSON.stringify(oldProps.dataset) === JSON.stringify(newProps.dataset) && oldProps.isOpen === newProps.isOpen

const DetailDialog = (props) => {
	const borderRight = {
		borderRight: 1
	}

	const sticky = {
		position: "sticky",
		left: 0,
		background: "white"
	}

	const dataset = props.dataset

	const tableRow = (data) => {
		return (
			<TableRow key={data.id}>
				<TableCell component="th" scope="row" sx={sticky}>
					{data.name}
				</TableCell>
				<TableCell>{formatCell(data.qty, data.unit)}</TableCell>
				<TableCell>{formatCell(data.percentage * 100, '%')}</TableCell>
				<TableCell>{formatCell(data.weight, 'kg')}</TableCell>
				<TableCell sx={borderRight}>{rpFormat(data.worth)}</TableCell>
				<TableCell sx={borderRight}>{data.description}</TableCell>
				<TableCell>{formatCell(data.cutPercentage * 100, '%')}</TableCell>
				<TableCell>{formatCell(data.cutWeight, 'kg')}</TableCell>
				<TableCell>{rpFormat(data.cutWorth)}</TableCell>
			</TableRow>
		)
	}

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
						<Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
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
						{/* <Button autoFocus color="inherit" onClick={() => props.setIsOpen(false)}>
						save
					</Button> */}
					</Toolbar>
				</Container>

			</AppBar>
			<Container maxWidth="md" sx={{
				my: 4
			}}>
				<TableContainer>
					<Table size="small" sx={{
						'th': {
							fontWeight: 'bold'
						}
					}}>
						<TableHead sx={{
							'th': {
								textAlign: 'center'
							}, 
						}}>
							<TableRow>
								<TableCell sx={sticky}></TableCell>
								<TableCell colSpan={4} sx={borderRight}>TANDAN BUAH SEGAR</TableCell>
								<TableCell sx={borderRight} rowSpan={2}>KETERANGAN</TableCell>
								<TableCell colSpan={3}>POTONGAN</TableCell>
							</TableRow>
							<TableRow>
								<TableCell sx={sticky}>KATEGORI</TableCell>
								<TableCell>JUMLAH</TableCell>
								<TableCell>(%)</TableCell>
								<TableCell>BOBOT</TableCell>
								<TableCell sx={borderRight}>Rp</TableCell>
								<TableCell>(%)</TableCell>
								<TableCell>BOBOT</TableCell>
								<TableCell>Rp</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{dataset.map(data => tableRow(data))}

							{dataset.length > 0 &&
								<TableRow>
									<TableCell component='th' align="right" colSpan={7}>TOTAL</TableCell>
									<TableCell component='th'>{formatCell(dataset.reduce((a, b) => (a.cutWeight === undefined ? a : a.cutWeight) + b.cutWeight), 'kg')}</TableCell>
									<TableCell component='th'>{rpFormat(dataset.reduce((a, b) => (a.cutWorth === undefined ? a : a.cutWorth) + b.cutWorth))}</TableCell>
								</TableRow>}
						</TableBody>
					</Table>
				</TableContainer>
			</Container>
		</Dialog>
	);
}

export default memo(DetailDialog, areEqual)