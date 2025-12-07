'use client'

import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import { useRouter } from 'next/navigation'
import useFirebase from '@/hooks/use-firebase'

export default function GuideButton() {
    const router = useRouter()
    const { logEvent } = useFirebase()

    const handleClick = () => {
        logEvent('click_guide')
        router.push('/panduan')
    }

    return (
        <Tooltip title="Panduan Lengkap">
            <IconButton
                onClick={handleClick}
                size="large"
                aria-label="panduan lengkap">
                <HelpOutlineIcon />
            </IconButton>
        </Tooltip>
    )
}
