'use client'

import Breadcrumbs from '@mui/material/Breadcrumbs'
import MuiLink from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { usePathname } from 'next/navigation'

const pathNameMap: Record<string, string> = {
    '/': 'Beranda',
    '/kalkulator': 'Kalkulator',
    '/panduan': 'Panduan',
    '/tentang': 'Tentang',
    '/privacy-policy': 'Kebijakan Privasi',
    '/terms': 'Syarat & Ketentuan',
}

export default function Breadcrumb() {
    const pathname = usePathname()

    if (pathname === '/') return null

    return (
        <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
            sx={{ mb: 3 }}>
            <MuiLink underline="hover" color="inherit" href="/">
                Beranda
            </MuiLink>
            <Typography color="text.primary">
                {pathNameMap[pathname] || 'Halaman'}
            </Typography>
        </Breadcrumbs>
    )
}
