import type { Metadata } from 'next'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import MuiLink from '@mui/material/Link'

export const metadata: Metadata = {
    title: 'Terms & Conditions — Simulasi Grading Sawit',
    description: 'Terms and conditions for Simulasi Grading Sawit application',
}

export default function TermsAndConditionsPage() {
    return (
        <Container maxWidth="md" sx={{ py: 4, pb: 14 }}>
            <Box>
                <Typography
                    variant="h3"
                    component="h1"
                    gutterBottom
                    color="primary"
                    sx={{ mb: 3 }}>
                    Terms &amp; Conditions
                </Typography>

                <Typography paragraph sx={{ maxWidth: '75ch', mb: 3 }}>
                    These terms and conditions apply to the Simulasi Grading
                    Sawit app (hereby referred to as "Application") that was
                    created by Sensasi Apps (hereby referred to as "Service
                    Provider") as an Ad Supported service.
                </Typography>

                <Typography paragraph sx={{ maxWidth: '75ch', mb: 3 }}>
                    Upon downloading or utilizing the Application, you are
                    automatically agreeing to the following terms.
                </Typography>

                <Typography paragraph sx={{ maxWidth: '75ch', mb: 4 }}>
                    It is strongly advised that you thoroughly read and
                    understand these terms prior to using the Application.
                </Typography>

                <Divider sx={{ my: 4 }} />

                <Typography
                    variant="h5"
                    component="h2"
                    gutterBottom
                    sx={{ mb: 3 }}>
                    Intellectual Property
                </Typography>

                <Typography paragraph sx={{ maxWidth: '75ch', mb: 3 }}>
                    Unauthorized copying, modification of the Application, any
                    part of the Application, or our trademarks is strictly
                    prohibited.
                </Typography>

                <Typography paragraph sx={{ maxWidth: '75ch', mb: 4 }}>
                    All trademarks, copyrights, database rights, and other
                    intellectual property rights related to the Application
                    remain the property of the Service Provider.
                </Typography>

                <Divider sx={{ my: 4 }} />

                <Typography
                    variant="h5"
                    component="h2"
                    gutterBottom
                    sx={{ mb: 3 }}>
                    Service Modifications
                </Typography>

                <Typography paragraph sx={{ maxWidth: '75ch', mb: 3 }}>
                    The Service Provider is dedicated to ensuring that the
                    Application is as beneficial and efficient as possible.
                </Typography>

                <Typography paragraph sx={{ maxWidth: '75ch', mb: 4 }}>
                    As such, they reserve the right to modify the Application or
                    charge for their services at any time and for any reason.
                    Any charges will be clearly communicated to you.
                </Typography>

                <Divider sx={{ my: 4 }} />

                <Typography
                    variant="h5"
                    component="h2"
                    gutterBottom
                    sx={{ mb: 3 }}>
                    Data Storage and Security
                </Typography>

                <Typography paragraph sx={{ maxWidth: '75ch', mb: 3 }}>
                    The Application stores and processes personal data that you
                    have provided to the Service Provider in order to provide
                    the Service.
                </Typography>

                <Typography paragraph sx={{ maxWidth: '75ch', mb: 4 }}>
                    It is your responsibility to maintain the security of your
                    phone and access to the Application. The Service Provider
                    strongly advise against jailbreaking or rooting your phone,
                    as such actions could expose your device to security risks.
                </Typography>

                <Divider sx={{ my: 4 }} />

                <Typography
                    variant="h5"
                    component="h2"
                    gutterBottom
                    sx={{ mb: 3 }}>
                    Third-Party Services
                </Typography>

                <Typography paragraph sx={{ maxWidth: '75ch', mb: 2 }}>
                    The Application utilizes third-party services that have
                    their own Terms and Conditions:
                </Typography>

                <Box component="ul" sx={{ pl: 3, mb: 4 }}>
                    <Typography component="li" sx={{ mb: 2 }}>
                        <MuiLink
                            href="https://www.google.com/analytics/terms/"
                            target="_blank"
                            rel="noopener noreferrer">
                            Google Analytics for Firebase
                        </MuiLink>
                    </Typography>
                    <Typography component="li" sx={{ mb: 2 }}>
                        <MuiLink
                            href="https://sentry.io/terms/"
                            target="_blank"
                            rel="noopener noreferrer">
                            Sentry
                        </MuiLink>
                    </Typography>
                </Box>

                <Divider sx={{ my: 4 }} />

                <Typography
                    variant="h5"
                    component="h2"
                    gutterBottom
                    sx={{ mb: 3 }}>
                    Internet Connection
                </Typography>

                <Typography paragraph sx={{ maxWidth: '75ch', mb: 3 }}>
                    Some functions of the Application require an active internet
                    connection, which can be Wi-Fi or provided by your mobile
                    network provider.
                </Typography>

                <Typography paragraph sx={{ maxWidth: '75ch', mb: 4 }}>
                    The Service Provider cannot be held responsible if the
                    Application does not function at full capacity due to lack
                    of access to Wi-Fi or if you have exhausted your data
                    allowance.
                </Typography>

                <Divider sx={{ my: 4 }} />

                <Typography
                    variant="h5"
                    component="h2"
                    gutterBottom
                    sx={{ mb: 3 }}>
                    Updates and Termination
                </Typography>

                <Typography paragraph sx={{ maxWidth: '75ch', mb: 3 }}>
                    The Service Provider may wish to update the application at
                    some point. The application is currently available as per
                    the requirements for the operating system.
                </Typography>

                <Typography paragraph sx={{ maxWidth: '75ch', mb: 3 }}>
                    You agree to always accept updates to the application when
                    offered to you.
                </Typography>

                <Typography paragraph sx={{ maxWidth: '75ch', mb: 4 }}>
                    The Service Provider may also wish to cease providing the
                    application and may terminate its use at any time without
                    providing termination notice to you.
                </Typography>

                <Divider sx={{ my: 4 }} />

                <Typography
                    variant="h5"
                    component="h2"
                    gutterBottom
                    sx={{ mb: 3 }}>
                    Contact Us
                </Typography>

                <Typography paragraph sx={{ maxWidth: '75ch', mb: 3 }}>
                    If you have any questions or suggestions about the Terms and
                    Conditions, please do not hesitate to contact the Service
                    Provider at{' '}
                    <MuiLink href="mailto:sensasi.apps@gmail.com">
                        sensasi.apps@gmail.com
                    </MuiLink>
                    .
                </Typography>

                <Divider sx={{ my: 4 }} />

                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textAlign: 'center', mt: 4 }}>
                    These terms and conditions are effective as of 2025-12-06
                </Typography>

                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textAlign: 'center', mt: 2 }}>
                    This Terms and Conditions page was generated by{' '}
                    <MuiLink
                        href="https://app-privacy-policy-generator.nisrulz.com/"
                        target="_blank"
                        rel="noopener noreferrer">
                        App Privacy Policy Generator
                    </MuiLink>
                </Typography>
            </Box>
        </Container>
    )
}
