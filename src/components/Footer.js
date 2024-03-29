import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import { GALog } from "../helpers/firebaseClient";
import moment from 'moment/moment';


const SX = { mt: 4, mb: 4, textAlign: 'center' }
const COMPANY_URL = "https://github.com/sensasi-apps"
const ON_CLICK_LINK = (e) => GALog('click_company_page')
const updatedAt = moment(process.env.REACT_APP_UPDATED_AT);

function Footer() {
	return (
		<Box sx={SX} component='footer'>
			<Typography variant="body2" color="text.secondary">
				{'Copyright © '}
				<Link color="inherit" href={COMPANY_URL} onClick={ON_CLICK_LINK} target="_blank">
					Sensasi Apps
				</Link>
				{' ' + updatedAt.format('YYYY')}
			</Typography>
			<Typography variant='caption' color="text.secondary">v{process.env.REACT_APP_VERSION}</Typography>
			<Box>
				<Typography variant='caption' color="text.secondary">{updatedAt.format('DD-MM-YYYY')}</Typography>
			</Box>
		</Box>
	);
}

export default Footer;