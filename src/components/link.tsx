'use client'

import NextLink from 'next/link'
import MuiLink from '@mui/material/Link'

export default function Link({
    children,
    href,
    onClick,
    target,
}: {
    children: React.ReactNode
    href: string
    onClick?: () => void
    target?: '_blank' | '_self' | '_parent' | '_top'
}) {
    return (
        <MuiLink
            component={NextLink}
            href={href}
            onClick={onClick}
            target={target}
            underline="hover">
            {children}
        </MuiLink>
    )
}
