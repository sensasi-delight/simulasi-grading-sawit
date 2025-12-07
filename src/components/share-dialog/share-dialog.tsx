import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import ToggleButton from '@mui/material/ToggleButton'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { useState } from 'react'

interface ShareDialogProps {
    open: boolean
    onClose: () => void
    summaryMessage: string
    detailedMessage: string
    onShareWhatsApp: (messageType: 'summary' | 'detailed') => void
    onCopy: (messageType: 'summary' | 'detailed') => void
}

export default function ShareDialog({
    open,
    onClose,
    summaryMessage,
    detailedMessage,
    onShareWhatsApp,
    onCopy,
}: ShareDialogProps) {
    const [isDetailed, setIsDetailed] = useState(false)

    const currentMessage = isDetailed ? detailedMessage : summaryMessage

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="sm"
            fullWidth
            aria-labelledby="share-dialog-title">
            <DialogTitle id="share-dialog-title">
                Bagikan Hasil Perhitungan
            </DialogTitle>

            <DialogContent>
                <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" sx={{ mb: 1 }}>
                        Pilih format:
                    </Typography>
                    <ToggleButtonGroup
                        value={isDetailed ? 'detailed' : 'summary'}
                        exclusive
                        onChange={(_, newValue) => {
                            if (newValue !== null) {
                                setIsDetailed(newValue === 'detailed')
                            }
                        }}
                        fullWidth
                        color="primary">
                        <ToggleButton value="summary">Ringkasan</ToggleButton>
                        <ToggleButton value="detailed">
                            Detail Lengkap
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Box>

                <TextField
                    multiline
                    rows={12}
                    fullWidth
                    value={currentMessage}
                    variant="outlined"
                    slotProps={{
                        input: {
                            readOnly: true,
                        },
                    }}
                    sx={{
                        '& .MuiInputBase-input': {
                            fontFamily: 'monospace',
                            fontSize: '0.875rem',
                        },
                    }}
                />
            </DialogContent>

            <DialogActions sx={{ px: 3, pb: 2 }}>
                <Button onClick={onClose}>Batal</Button>
                <Button
                    variant="outlined"
                    startIcon={<ContentCopyIcon />}
                    onClick={() => {
                        onCopy(isDetailed ? 'detailed' : 'summary')
                    }}>
                    Salin
                </Button>
                <Button
                    variant="contained"
                    startIcon={<WhatsAppIcon />}
                    onClick={() => {
                        onShareWhatsApp(isDetailed ? 'detailed' : 'summary')
                    }}>
                    WhatsApp
                </Button>
            </DialogActions>
        </Dialog>
    )
}
