import type { Metadata } from 'next'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import MuiLink from '@mui/material/Link'

export const metadata: Metadata = {
    title: 'Privacy Policy — Simulasi Grading Sawit',
    description: 'Privacy policy for Simulasi Grading Sawit application',
}

export default function PrivacyPolicyPage() {
    return (
        <Container maxWidth="md" sx={{ pb: 8 }}>
            <Box>
                <Typography
                    variant="h3"
                    component="h1"
                    gutterBottom
                    color="primary"
                    sx={{ mb: 3 }}>
                    Privacy Policy
                </Typography>

                <Typography paragraph sx={{ maxWidth: '75ch', mb: 3 }}>
                    This privacy policy applies to the Simulasi Grading Sawit
                    app (hereby referred to as "Application") for mobile devices
                    that was created by Sensasi Apps (hereby referred to as
                    "Service Provider") as an Ad Supported service.
                </Typography>

                <Typography paragraph sx={{ maxWidth: '75ch', mb: 4 }}>
                    This service is intended for use "AS IS".
                </Typography>

                <Divider sx={{ my: 4 }} />

                <Typography
                    variant="h5"
                    component="h2"
                    gutterBottom
                    sx={{ mb: 3 }}>
                    Information Collection and Use
                </Typography>

                <Typography paragraph sx={{ maxWidth: '75ch', mb: 2 }}>
                    The Application collects information when you download and
                    use it. This information may include:
                </Typography>

                <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                    <Typography component="li" sx={{ mb: 2 }}>
                        Your device's Internet Protocol address (e.g. IP
                        address)
                    </Typography>
                    <Typography component="li" sx={{ mb: 2 }}>
                        The pages of the Application that you visit, the time
                        and date of your visit, the time spent on those pages
                    </Typography>
                    <Typography component="li" sx={{ mb: 2 }}>
                        The time spent on the Application
                    </Typography>
                    <Typography component="li" sx={{ mb: 2 }}>
                        The operating system you use on your mobile device
                    </Typography>
                </Box>

                <Typography paragraph sx={{ maxWidth: '75ch', mb: 3 }}>
                    The Application does not gather precise information about
                    the location of your mobile device.
                </Typography>

                <Typography paragraph sx={{ maxWidth: '75ch', mb: 2 }}>
                    The Application collects your device's location, which helps
                    the Service Provider determine your approximate geographical
                    location and make use of in below ways:
                </Typography>

                <Box component="ul" sx={{ pl: 3, mb: 4 }}>
                    <Typography component="li" sx={{ mb: 2 }}>
                        <strong>Geolocation Services:</strong> The Service
                        Provider utilizes location data to provide features such
                        as personalized content, relevant recommendations, and
                        location-based services.
                    </Typography>
                    <Typography component="li" sx={{ mb: 2 }}>
                        <strong>Analytics and Improvements:</strong> Aggregated
                        and anonymized location data helps the Service Provider
                        to analyze user behavior, identify trends, and improve
                        the overall performance and functionality of the
                        Application.
                    </Typography>
                    <Typography component="li" sx={{ mb: 2 }}>
                        <strong>Third-Party Services:</strong> Periodically, the
                        Service Provider may transmit anonymized location data
                        to external services. These services assist them in
                        enhancing the Application and optimizing their
                        offerings.
                    </Typography>
                </Box>

                <Divider sx={{ my: 4 }} />

                <Typography
                    variant="h5"
                    component="h2"
                    gutterBottom
                    sx={{ mb: 3 }}>
                    Third Party Access
                </Typography>

                <Typography paragraph sx={{ maxWidth: '75ch', mb: 3 }}>
                    Only aggregated, anonymized data is periodically transmitted
                    to external services to aid the Service Provider in
                    improving the Application and their service.
                </Typography>

                <Typography paragraph sx={{ maxWidth: '75ch', mb: 2 }}>
                    The Application utilizes third-party services that have
                    their own Privacy Policy about handling data:
                </Typography>

                <Box component="ul" sx={{ pl: 3, mb: 4 }}>
                    <Typography component="li" sx={{ mb: 2 }}>
                        <MuiLink
                            href="https://firebase.google.com/support/privacy"
                            target="_blank"
                            rel="noopener noreferrer">
                            Google Analytics for Firebase
                        </MuiLink>
                    </Typography>
                    <Typography component="li" sx={{ mb: 2 }}>
                        <MuiLink
                            href="https://sentry.io/privacy/"
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
                    Disclosure of Information
                </Typography>

                <Typography paragraph sx={{ maxWidth: '75ch', mb: 2 }}>
                    The Service Provider may disclose User Provided and
                    Automatically Collected Information:
                </Typography>

                <Box component="ul" sx={{ pl: 3, mb: 4 }}>
                    <Typography component="li" sx={{ mb: 2 }}>
                        As required by law, such as to comply with a subpoena,
                        or similar legal process
                    </Typography>
                    <Typography component="li" sx={{ mb: 2 }}>
                        When they believe in good faith that disclosure is
                        necessary to protect their rights, protect your safety
                        or the safety of others, investigate fraud, or respond
                        to a government request
                    </Typography>
                    <Typography component="li" sx={{ mb: 2 }}>
                        With their trusted services providers who work on their
                        behalf, do not have an independent use of the
                        information we disclose to them, and have agreed to
                        adhere to the rules set forth in this privacy statement
                    </Typography>
                </Box>

                <Divider sx={{ my: 4 }} />

                <Typography
                    variant="h5"
                    component="h2"
                    gutterBottom
                    sx={{ mb: 3 }}>
                    Data Retention Policy
                </Typography>

                <Typography paragraph sx={{ maxWidth: '75ch', mb: 3 }}>
                    The Service Provider will retain User Provided data for as
                    long as you use the Application and for a reasonable time
                    thereafter.
                </Typography>

                <Typography paragraph sx={{ maxWidth: '75ch', mb: 4 }}>
                    If you'd like them to delete User Provided Data that you
                    have provided via the Application, please contact them at
                    sensasi.apps@gmail.com and they will respond in a reasonable
                    time.
                </Typography>

                <Divider sx={{ my: 4 }} />

                <Typography
                    variant="h5"
                    component="h2"
                    gutterBottom
                    sx={{ mb: 3 }}>
                    Security
                </Typography>

                <Typography paragraph sx={{ maxWidth: '75ch', mb: 4 }}>
                    The Service Provider is concerned about safeguarding the
                    confidentiality of your information. The Service Provider
                    provides physical, electronic, and procedural safeguards to
                    protect information the Service Provider processes and
                    maintains.
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
                    If you have any questions regarding privacy while using the
                    Application, or have questions about the practices, please
                    contact the Service Provider via email at{' '}
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
                    This privacy policy is effective as of 2025-12-06
                </Typography>

                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textAlign: 'center', mt: 2 }}>
                    This privacy policy page was generated by{' '}
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
