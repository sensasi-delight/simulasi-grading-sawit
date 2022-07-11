import React from 'react';

import Box from '@mui/system/Box';

import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';


const SX_HEADER = {
	marginTop: 8,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
}

const SX_AVATAR = { m: 1,
	bgcolor: 'primary.main',
	width: 56, height: 56
}

function Header() {
	return (
		<Box maxWidth="xs" component="header" sx={SX_HEADER}>
			<Avatar sx={SX_AVATAR}>
				<PercentOutlinedIcon fontSize='large' />
			</Avatar>
			<Typography mt={2} component="h1" variant="h4" align="center">
				Simulasi Grading Sawit
			</Typography>
		</Box>
	);
}

export default Header;