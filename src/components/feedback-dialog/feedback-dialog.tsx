import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    TextField,
    Tooltip,
    Typography,
} from '@mui/material'
import { useState } from 'react'
import {
    HowToVote as HowToVoteIcon,
    Send as SendIcon,
} from '@mui/icons-material'
import { captureFeedback, captureMessage } from '@sentry/react'

export function FeedbackDialog() {
    const [open, setOpen] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    return (
        <>
            <Tooltip title="Saran Perbaikan" placement="top" arrow>
                <IconButton onClick={() => setOpen(true)} size="small">
                    <HowToVoteIcon />
                </IconButton>
            </Tooltip>

            <Dialog open={open} onClose={() => setOpen(false)} maxWidth="xs">
                <DialogTitle>Saran Perbaikan</DialogTitle>

                <DialogContent>
                    <Typography>
                        Berikan saran atau kritik untuk perbaikan aplikasi ini.
                    </Typography>

                    <Typography>
                        Saran atau kritik yang Anda berikan akan membantu kami
                        dalam pengembangan aplikasi ini.
                    </Typography>

                    <form
                        id="feedback-form"
                        onSubmit={ev => {
                            ev.preventDefault()

                            const formData = new FormData(ev.currentTarget)

                            const formValues = {
                                name: formData.get('name') as string,
                                email: formData.get('email') as string,
                                message: formData.get('message') as string,
                            }

                            if (!formValues.message) {
                                setErrorMessage('Pesan tidak boleh kosong')
                                return
                            }

                            if (formValues.message.length < 10) {
                                setErrorMessage('Pesan minimal 10 karakter')
                                return
                            }

                            captureFeedback({
                                name: formValues.name,
                                email: formValues.email,
                                message: formValues.message,
                                associatedEventId: captureMessage('Feedback'),
                            })

                            setOpen(false)
                        }}>
                        <TextField
                            label="Nama (opsional)"
                            fullWidth
                            variant="filled"
                            margin="dense"
                            size="small"
                        />

                        <TextField
                            label="Email (opsional)"
                            fullWidth
                            type="email"
                            variant="filled"
                            margin="dense"
                            size="small"
                        />

                        <TextField
                            label="Saran Perbaikan"
                            multiline
                            rows={4}
                            fullWidth
                            name="message"
                            variant="outlined"
                            margin="dense"
                            error={errorMessage !== ''}
                            helperText={errorMessage}
                        />
                    </form>
                </DialogContent>

                <DialogActions>
                    <Button
                        type="reset"
                        form="feedback-form"
                        onClick={() => {
                            setErrorMessage('')
                            setOpen(false)
                        }}>
                        Batal
                    </Button>

                    <Button
                        variant="contained"
                        endIcon={<SendIcon />}
                        type="submit"
                        form="feedback-form">
                        Kirim
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
