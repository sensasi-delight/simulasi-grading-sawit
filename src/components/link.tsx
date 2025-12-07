'use client'

import NextLink from 'next/link'
import MuiLink from '@mui/material/Link'
import type { SxProps, Theme } from '@mui/material/styles'

export default function Link({
    children,
    href,
    onClick,
    target,
    sx,
}: {
    children: React.ReactNode
    href: string
    onClick?: () => void
    target?: '_blank' | '_self' | '_parent' | '_top'
    sx?: SxProps<Theme>
}) {
    return (
        <MuiLink
            component={NextLink}
            href={href}
            onClick={onClick}
            target={target}
            sx={sx}
            underline="hover">
            {children}
        </MuiLink>
    )
}
