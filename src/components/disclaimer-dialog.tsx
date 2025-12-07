import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { grey } from '@mui/material/colors'
import InfoIcon from '@mui/icons-material/Info'
import MuiLink from '@mui/material/Link'
import NextLink from 'next/link'

export default function DisclaimerDialog() {
    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <Button
                onClick={handleClickOpen}
                size="small"
                variant="text"
                startIcon={<InfoIcon />}
                sx={{
                    color: grey[500],
                }}>
                Penafian
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="dialog-title"
                aria-describedby="dialog-description">
                <DialogTitle id="dialog-title">
                    {'Disclaimer / Penafian'}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="dialog-description" component="span">
                        <ul>
                            <li>
                                Aplikasi <b>Simulasi Grading Sawit</b> dibuat
                                berdasarkan studi kasus perkebunan kelapa sawit
                                di salah satu desa di Kalimantan Timur
                            </li>
                            <li>
                                Aplikasi <b>Simulasi Grading Sawit</b> ini
                                menghitung rumus secara presisi dengan
                                pembulatan 16 angka di belakang koma, hal ini
                                dapat menyebabkan sedikit selisih pada hasil
                                perhitungan.
                            </li>
                            <li>
                                Untuk memahami lebih dalam tentang sistem
                                grading dan cara perhitungan manual, silakan
                                baca{' '}
                                <MuiLink
                                    component={NextLink}
                                    href="/panduan"
                                    underline="hover">
                                    Panduan Lengkap
                                </MuiLink>
                                .
                            </li>
                        </ul>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Tutup
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
