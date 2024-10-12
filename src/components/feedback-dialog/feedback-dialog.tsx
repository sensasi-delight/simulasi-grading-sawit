import {
    Alert,
    AlertTitle,
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
import { FormEvent, useState } from 'react'
import {
    HowToVote as HowToVoteIcon,
    Send as SendIcon,
} from '@mui/icons-material'
import { captureFeedback, captureMessage } from '@sentry/react'

export function FeedbackDialog() {
    const [open, setOpen] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    function handleClose() {
        setOpen(false)
        setIsSubmitted(false)
        setErrorMessage('')
    }

    return (
        <>
            <Tooltip title="Saran Perbaikan" placement="top" arrow>
                <IconButton onClick={() => setOpen(true)} size="small">
                    <HowToVoteIcon />
                </IconButton>
            </Tooltip>

            <Dialog open={open} onClose={handleClose} maxWidth="xs">
                {isSubmitted ? (
                    <SuccessAlert onClose={handleClose} />
                ) : (
                    <FormDialogChildren
                        errorMessage={errorMessage}
                        onClose={handleClose}
                        onSubmit={ev =>
                            submitFeedback(
                                ev,
                                () => setIsSubmitted(true),
                                setErrorMessage,
                            )
                        }
                    />
                )}
            </Dialog>
        </>
    )
}

function submitFeedback(
    ev: FormEvent<HTMLFormElement>,
    onSubmit: () => void,
    onError: (message: string) => void,
) {
    ev.preventDefault()

    const formData = new FormData(ev.currentTarget)

    const formValues = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        message: formData.get('message') as string,
    }

    if (!formValues.message) {
        return onError('Pesan tidak boleh kosong')
    }

    if (formValues.message.length < 10) {
        return onError('Pesan minimal 10 karakter')
    }

    captureFeedback({
        name: formValues.name,
        email: formValues.email,
        message: formValues.message,
        associatedEventId: captureMessage('Feedback'),
    })

    onSubmit()
}

function SuccessAlert({ onClose }: { onClose: () => void }) {
    return (
        <Alert severity="success" onClose={onClose}>
            <AlertTitle>Masukkan Anda telah terkirim</AlertTitle>
            Terima kasih atas masukkan yang telah Anda berikan.
        </Alert>
    )
}

function FormDialogChildren({
    onSubmit,
    errorMessage,
    onClose,
}: {
    onSubmit: (ev: FormEvent<HTMLFormElement>) => void
    errorMessage: string
    onClose: () => void
}) {
    return (
        <>
            <DialogTitle>Saran Perbaikan</DialogTitle>

            <DialogContent>
                <Typography>
                    Berikan saran atau kritik untuk perbaikan aplikasi ini.
                </Typography>

                <Typography>
                    Saran atau kritik yang Anda berikan akan membantu kami dalam
                    pengembangan aplikasi ini.
                </Typography>

                <form id="feedback-form" onSubmit={onSubmit}>
                    <TextField
                        label="Nama (opsional)"
                        fullWidth
                        variant="filled"
                        margin="dense"
                        name="name"
                        size="small"
                    />

                    <TextField
                        label="Email (opsional)"
                        name="email"
                        fullWidth
                        type="email"
                        variant="filled"
                        margin="dense"
                        size="small"
                    />

                    <TextField
                        autoComplete="off"
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
                <Button type="reset" form="feedback-form" onClick={onClose}>
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
        </>
    )
}
