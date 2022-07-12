import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import { GALog } from "../helpers/firebaseClient";


const SX = { mt: 4, mb: 4, textAlign: 'center' }
const COMPANY_URL = "https://github.com/sensasi-apps"
const ON_CLICK_LINK = (e) => GALog('click_company_page')
const YEAR = new Date().getFullYear()

function Footer() {
	return (
		<Box sx={SX} component='footer'>
			<Typography variant="body2" color="text.secondary">
				{'Copyright © '}
				<Link color="inherit" href={COMPANY_URL} onClick={ON_CLICK_LINK} target="_blank">
					Sensasi Apps
				</Link>
				{' ' + YEAR + '.'}
			</Typography>
			<Typography variant='caption' color="text.secondary">v{process.env.REACT_APP_VERSION}</Typography>
		</Box>
	);
}

export default Footer;