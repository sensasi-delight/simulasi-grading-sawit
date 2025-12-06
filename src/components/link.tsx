import MuiLink from '@mui/material/Link'
import { NavLink } from 'react-router'

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
        <NavLink
            to={href}
            onClick={onClick}
            target={target}
            style={{ textDecoration: 'none' }}>
            <MuiLink component="span">{children}</MuiLink>
        </NavLink>
    )
}
