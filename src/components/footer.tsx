import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Link from '../components/link'
import dayjs from 'dayjs'
import packageJson from '../../package.json'
// hooks
import useFirebase from '../hooks/use-firebase'

const COMPANY_URL = 'https://github.com/sensasi-apps'
const versionDateYear = dayjs(packageJson.versionDate).format('YYYY')

function Footer() {
    const { logEvent } = useFirebase()

    return (
        <Box mt={12}>
            <Box
                sx={{
                    p: 1.5,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'fixed',
                    backgroundColor: 'background.paper',
                    width: '100%',
                    borderTop: '1px solid',
                    borderColor: 'divider',
                    bottom: 0,
                    flexWrap: 'wrap',
                    gap: 2,
                }}
                component="footer">
                <Typography variant="body2" color="text.secondary">
                    <Link href="/" onClick={() => logEvent('click_home')}>
                        Simulasi Grading Sawit v{packageJson.version}
                    </Link>{' '}
                    &copy;{' '}
                    <Link
                        href={COMPANY_URL}
                        onClick={() => logEvent('click_company_page')}
                        target="_blank">
                        Sensasi Apps
                    </Link>
                    {` ${versionDateYear}`}
                </Typography>

                <Link href="/" onClick={() => logEvent('click_home')}>
                    Beranda
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
    )
}

export default Footer
