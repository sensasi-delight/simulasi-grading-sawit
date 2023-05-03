import { forwardRef } from 'react';

import AppBar from '@mui/material/AppBar';
import Container from '@mui/system/Container';
import Dialog from '@mui/material/Dialog';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';
import DetailTable from './DetailTable.tsx';

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const SX_MY = { my: 4 }
const SX_ML_FLEX = { ml: 2, flex: 1 }

const DetailDialog = ({ dataset, ...props }) => {
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
				<DetailTable dataset={dataset} />
			</Container>
		</Dialog>
	);
}

export default DetailDialog
