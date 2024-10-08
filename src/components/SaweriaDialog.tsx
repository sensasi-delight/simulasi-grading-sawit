import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Link from "@mui/material/Link";
import Box from "@mui/system/Box";

export default function SaweriaDialog() {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<span>
			<Button
				onClick={handleClickOpen}
				variant="contained"
				sx={{
					ml: 1,
					// 	color: grey[500],
					// 	textTransform: 'none',
					// 	// alignItems: 'flex-end'
				}}
			>
				Saweria
			</Button>
			<Dialog
				maxWidth="xs"
				open={open}
				onClose={handleClose}
				aria-labelledby="dialog-title"
				aria-describedby="dialog-description"
			>
				<DialogTitle id="dialog-title">{"Donasi melalui Saweria"}</DialogTitle>
				<DialogContent>
					<img
						width="100%"
						src="images/donations/saweria.png"
						alt="Saweria"
						// border="0"
					/>
					<Box textAlign="center" marginTop="1em">
						<Link
							sx={{ fontSize: "1.3em" }}
							href="https://saweria.co/delight"
							target="_blank"
						>
							https://saweria.co/delight
						</Link>
					</Box>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} autoFocus>
						Tutup
					</Button>
				</DialogActions>
			</Dialog>
		</span>
	);
}
