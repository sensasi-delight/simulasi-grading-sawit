
import { useState } from 'react';

import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';


const NotifButton = ({text, url}) => {
	if (!text) {
		return ''
	}

	return (
		<Button color="warning" size="small" component={Link} href={url} target='_blank'>
			{text}
		</Button>
	)

}
function Notification(props) {

	const {text, buttonText, buttonUrl} = props.data || {}
	const [isShow, setIsShow] = useState(props.data?.isShow || false)

	const handleClose = (e) => setIsShow(false)

	return (
		<Snackbar
			anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
			open={isShow}
			message={text}
			action={
				<>
					<NotifButton text={buttonText} url={buttonUrl} />

					<IconButton	size="small" aria-label="close" color="inherit" onClick={handleClose}>
						<CloseIcon fontSize="small" />
					</IconButton>
				</>
			}
		/>
	)
}

export default Notification;