'use client'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Link from './link'
import dayjs from 'dayjs'
import packageJson from '../../package.json'
// hooks
import useFirebase from '@/hooks/use-firebase'

const COMPANY_URL = 'https://github.com/sensasi-apps'
const versionDateYear = dayjs(packageJson.versionDate).format('YYYY')

export default function Footer() {
    const { logEvent } = useFirebase()

    return (
        <Box
            component="footer"
            sx={{
                mt: 8,
                py: 4,
                px: 2,
                backgroundColor: 'grey.50',
                borderTop: '1px solid',
                borderColor: 'divider',
            }}>
            <Box
                sx={{
                    maxWidth: 'lg',
                    mx: 'auto',
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'space-between',
                    alignItems: { xs: 'center', sm: 'flex-start' },
                    gap: { xs: 3, sm: 4 },
                    textAlign: { xs: 'center', sm: 'left' },
                }}>
                {/* Brand Section */}
                <Box sx={{ flex: { xs: '0 0 auto', sm: '1' } }}>
                    <Typography
                        variant="body1"
                        sx={{
                            fontWeight: 700,
                            mb: 1,
                        }}>
                        <Link href="/" onClick={() => logEvent('click_home')}>
                            Simulasi Grading Sawit
                        </Link>
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontSize: '0.875rem' }}>
                        v{packageJson.version}
                    </Typography>
                </Box>

                <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        alignSelf: 'stretch',
                    }}
                />

                {/* Navigation Section */}
                <Box
                    component="nav"
                    aria-label="Footer navigation"
                    sx={{
                        flex: { xs: '0 0 auto', sm: '2' },
                    }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' },
                            flexWrap: 'wrap',
                            gap: { xs: 1.5, sm: 2 },
                            justifyContent: { xs: 'center', sm: 'center' },
                        }}>
                        <Link href="/" onClick={() => logEvent('click_home')}>
                            Beranda
                        </Link>
                        <Link
                            href="/kalkulator"
                            onClick={() => logEvent('click_calculator')}>
                            Kalkulator
                        </Link>
                        <Link
                            href="/tentang"
                            onClick={() => logEvent('click_about')}>
                            Tentang
                        </Link>
                        <Link
                            href="/panduan"
                            onClick={() => logEvent('click_guide')}>
                            Panduan
                        </Link>
                        <Link
                            href="/privacy-policy"
                            onClick={() => logEvent('click_privacy_policy')}
                            target="_blank">
                            Kebijakan Privasi
                        </Link>
                        <Link
                            href="/terms"
                            onClick={() => logEvent('click_terms')}
                            target="_blank">
                            Syarat & Ketentuan
                        </Link>
                    </Box>
                </Box>

                <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        alignSelf: 'stretch',
                    }}
                />

                {/* Copyright Section */}
                <Box
                    sx={{
                        flex: { xs: '0 0 auto', sm: '1' },
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 0.5,
                    }}>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontSize: '0.875rem' }}>
                        &copy; {versionDateYear}
                    </Typography>
                    <Link
                        href={COMPANY_URL}
                        onClick={() => logEvent('click_company_page')}
                        target="_blank"
                        sx={{ fontSize: '0.875rem', color: 'text.secondary' }}>
                        Sensasi Apps
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}
