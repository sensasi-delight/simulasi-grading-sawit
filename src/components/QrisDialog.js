import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


export default function QrisDialog() {
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
      >
        QRIS
      </Button>
      <Dialog
        maxWidth="xs"
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">
          {"Donasi melalui QRIS"}
        </DialogTitle>
        <DialogContent>
          <img width="100%" src="images/donations/qris.svg" alt="QRIS" border="0" />
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
