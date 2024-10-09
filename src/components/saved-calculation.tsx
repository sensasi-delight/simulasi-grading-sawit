// types
import type { TransitionProps } from '@mui/material/transitions'
// vendors
import { forwardRef, MouseEvent, ReactElement, Ref, useState } from 'react'

import {
    AppBar,
    Container,
    Dialog,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Menu,
    MenuItem,
    Slide,
    Tooltip,
    Typography,
} from '@mui/material'

import {
    Close as CloseIcon,
    List as ListIcon,
    MoreVert as MoreVertIcon,
    Visibility as VisibilityIcon,
} from '@mui/icons-material'
import moment from 'moment'
// helpers
import { currencyFormat, numberFormat } from '../helpers'
import { useGlobals } from '../hooks/use-globals'
import { getSavedDatasets } from '../functions/get-saved-datasets'

export default function SavedCalculationDialog() {
    const { setFormValues, setActiveStep } = useGlobals()
    const [open, setOpen] = useState(false)

    const handleDialogClose = () => setOpen(false)

    return (
        <>
            <Tooltip title="Daftar hasil perhitungan tersimpan" placement="top">
                <IconButton onClick={() => setOpen(true)}>
                    <ListIcon />
                </IconButton>
            </Tooltip>

            <Dialog
                fullScreen
                open={open}
                onClose={handleDialogClose}
                TransitionComponent={Transition}>
                <AppBar sx={{ position: 'relative' }}>
                    <Container
                        maxWidth="md"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            minHeight: '4rem',
                        }}>
                        <Typography
                            sx={{ flex: 1 }}
                            variant="h6"
                            component="div">
                            Riwayat Kalkulasi Yang Disimpan
                        </Typography>
                        <IconButton
                            autoFocus
                            edge="end"
                            color="inherit"
                            onClick={handleDialogClose}
                            aria-label="close">
                            <CloseIcon />
                        </IconButton>
                    </Container>
                </AppBar>
                <Container maxWidth="md">
                    <DatasetsList
                        onSelected={dataset => {
                            setFormValues({
                                ...dataset,
                            })
                            setActiveStep(2)
                            handleDialogClose()
                        }}
                    />
                </Container>
            </Dialog>
        </>
    )
}

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: ReactElement
    },
    ref: Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />
})

function DatasetsList({ onSelected }: { onSelected: (item: any) => void }) {
    const savedDatasets = getSavedDatasets()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

    const isMoreVertOpen = Boolean(anchorEl)
    const handleMoreVertClick = ({
        currentTarget,
    }: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(currentTarget)
    }

    const handleMoreVertClose = () => {
        setAnchorEl(null)
    }

    return (
        <List>
            {savedDatasets.reverse().map((item: any | object, i: number) => (
                <div key={i}>
                    <ListItem
                        secondaryAction={
                            <>
                                <IconButton
                                    aria-label="see"
                                    onClick={() => onSelected({ ...item })}>
                                    <VisibilityIcon />
                                </IconButton>
                                <IconButton
                                    aria-label="more"
                                    onClick={handleMoreVertClick}>
                                    <MoreVertIcon />
                                </IconButton>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={isMoreVertOpen}
                                    onClose={handleMoreVertClose}
                                    elevation={2}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}>
                                    <MenuItem
                                        onClick={() => {
                                            const savedCalculations =
                                                getSavedDatasets()
                                            savedCalculations.splice(i, 1)
                                            window.localStorage.setItem(
                                                'savedDatasets',
                                                JSON.stringify(
                                                    savedCalculations,
                                                ),
                                            )
                                            handleMoreVertClose()
                                        }}>
                                        Hapus
                                    </MenuItem>
                                </Menu>
                            </>
                        }>
                        <ListItemText
                            primary={
                                currencyFormat(item.finalWorth) +
                                ' / ' +
                                numberFormat(item.totalWeight) +
                                'kg'
                            }
                            secondary={
                                'disimpan tanggal: ' +
                                moment(item.savedAt).format(
                                    'DD-MM-YYYY hh:mm:ss',
                                )
                            }
                        />
                    </ListItem>

                    {i + 1 !== savedDatasets.length && <Divider />}
                </div>
            ))}

            {savedDatasets.length === 0 && (
                <Typography color="#888" align="center" mt={4}>
                    Belum ada data tersimpan
                </Typography>
            )}
        </List>
    )
}
