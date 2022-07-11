import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const SX = { mt: 4, mb: 4, textAlign: 'center' }

function Footer() {
	return (
		<Box sx={SX} component='footer'>
			<Typography variant="body2" color="text.secondary">
				{'Copyright © '}
				<Link color="inherit" href="https://github.com/sensasi-apps">
					Sensasi Apps
				</Link>
				{' ' + new Date().getFullYear() + '.'}
			</Typography>
			<Typography variant='caption' color="text.secondary">v{process.env.REACT_APP_VERSION}</Typography>
		</Box>
	);
}

export default Footer;