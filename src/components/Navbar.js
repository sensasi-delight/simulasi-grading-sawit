import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';

export default function Navbar(props) {
	const isOpen = props.isOpen
	const setIsOpen = props.setIsOpen


	const listItem = (text, icon) => {
		return (
			<ListItem disablePadding>
				<ListItemButton>
					<ListItemIcon sx={{
						minWidth: 'unset',
						marginRight: 2
					}}>
						{icon}
					</ListItemIcon>
					<ListItemText primary={text} />
				</ListItemButton>
			</ListItem>
		)
	}

	const toggleDrawer = () => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setIsOpen(false)
	};

	return (
		<Drawer
			open={isOpen}
			onClose={toggleDrawer}
			anchor='right'
		>
			<Box
				sx={{ width: 250 }}
				role="presentation"
				onClick={toggleDrawer()}
				onKeyDown={toggleDrawer()}
				components="nav"
			>
				<List>
					{listItem('Pengaturan', <SettingsIcon />)}
					{listItem('Tentang', <InfoIcon />)}
				</List>
				{/* <Divider /> */}
			</Box>
		</Drawer>
	);
}
