import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import PaidIcon from '@mui/icons-material/Paid'


export default function DonationDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        variant="text" startIcon={<PaidIcon />}
        size="large"
      // sx={{
      // 	mt: 1,
      // 	color: grey[500],
      // 	textTransform: 'none',
      // 	// alignItems: 'flex-end'
      // }}
      >
        Donasi
      </Button>
      <Dialog
        maxWidth="xs"
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">
          {"Donasi untuk pengembang"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description" component="span">
            <Typography gutterBottom>
              Silahkan melakukan donasi untuk pengembang aplikasi, melalui tautan di bawah ini:
            </Typography>
            <Typography>
              <Link href="https://saweria.co/delight" target="_blank">https://saweria.co/delight</Link>
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Tutup
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
