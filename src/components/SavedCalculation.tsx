import * as React from 'react';
import Container from '@mui/material/Container';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import VisibilityIcon from '@mui/icons-material/Visibility';
import MoreVert from '@mui/icons-material/MoreVert';
import moment from 'moment';
import { currencyFormat, getSavedDatasets, numberFormat } from '../helpers';
import vars from '../helpers/vars.ts';
import Tooltip from '@mui/material/Tooltip';
import ListIcon from '@mui/icons-material/List';



const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement;
	},
	ref: React.Ref<unknown>,
) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default () => {
	const [open, setOpen] = React.useState(false);

	const handleClose = () => {
		setOpen(false);
	};

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const isMoreVertOpen = Boolean(anchorEl);
	const handleMoreVertClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMoreVertClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<Tooltip title="Daftar hasil perhitungan tersimpan" placement='top'>
				<IconButton onClick={() => setOpen(true)}>
					<ListIcon />
				</IconButton>
			</Tooltip>

			<Dialog
				fullScreen
				open={open}
				onClose={handleClose}
				TransitionComponent={Transition}
			>
				<AppBar sx={{ position: 'relative' }}>
					<Container maxWidth="md" sx={{
						display: 'flex',
						alignItems: 'center',
						minHeight: '4rem'
					}}>
						<Typography sx={{ flex: 1 }} variant="h6" component="div">
							Riwayat Kalkulasi Yang Disimpan
						</Typography>
						<IconButton
							autoFocus
							edge="end"
							color="inherit"
							onClick={handleClose}
							aria-label="close"
						>
							<CloseIcon />
						</IconButton>
					</Container>
				</AppBar>
				<Container maxWidth="md">
					<List>
						{
							getSavedDatasets().reverse().map((item: any | object, i: number) =>
								<div key={i}>
									<ListItem secondaryAction={
										<>
											<IconButton aria-label="see"
												onClick={() => {
													vars.formValues[1]({ ...item });
													vars.activeStep[1](2);
													handleClose();
												}}>
												<VisibilityIcon />
											</IconButton>
											<IconButton aria-label="more"
												onClick={handleMoreVertClick}
											>
												<MoreVert />
											</IconButton>
											<Menu
												anchorEl={anchorEl}
												open={isMoreVertOpen}
												onClose={handleMoreVertClose}
												elevation={2}
												MenuListProps={{
													'aria-labelledby': 'basic-button',
												}}
											>
												<MenuItem onClick={() => {
													const savedCalculations = getSavedDatasets();
													savedCalculations.splice(i, 1);
													window.localStorage.setItem('savedDatasets', JSON.stringify(savedCalculations));
													handleMoreVertClose()
												}}>Hapus</MenuItem>
											</Menu>
										</>
									}>
										<ListItemText
											primary={currencyFormat(item.finalWorth) + ' / ' + numberFormat(item.totalWeight) + 'kg'}
											secondary={'disimpan tanggal: ' + moment(item.savedAt).format('DD-MM-YYYY hh:mm:ss')} />
									</ListItem>

									{
										i !== getSavedDatasets().length - 1 && <Divider />
									}
								</div>
							)
						}

						{
							getSavedDatasets().length === 0 &&
							<Typography color='#888' align='center' mt={4}>Belum ada data tersimpan</Typography>
						}
					</List>
				</Container>
			</Dialog>
		</>
	);
}