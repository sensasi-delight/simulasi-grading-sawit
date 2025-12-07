import type { Metadata } from 'next'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import MuiLink from '@mui/material/Link'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Alert from '@mui/material/Alert'
import Chip from '@mui/material/Chip'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import CodeIcon from '@mui/icons-material/Code'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism'
import LightbulbIcon from '@mui/icons-material/Lightbulb'

export const metadata: Metadata = {
    title: 'Tentang Kami - Simulasi Grading Sawit',
    description:
        'Tentang Simulasi Grading Sawit dan Sensasi Apps. Aplikasi open-source untuk membantu petani kelapa sawit menghitung grading TBS dengan transparan.',
    keywords: [
        'tentang sensasi apps',
        'simulasi grading sawit',
        'open source kelapa sawit',
        'developer indonesia',
        'aplikasi petani sawit',
    ],
    openGraph: {
        title: 'Tentang Kami - Simulasi Grading Sawit',
        description:
            'Tentang Simulasi Grading Sawit dan Sensasi Apps. Aplikasi open-source untuk petani kelapa sawit.',
        type: 'website',
    },
}

export default function TentangPage() {
    return (
        <Container maxWidth="md" sx={{ py: 4, pb: 8 }}>
            <Box>
                <Typography
                    variant="h3"
                    component="h1"
                    gutterBottom
                    color="primary">
                    Tentang Kami
                </Typography>
                <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    paragraph>
                    Simulasi Grading Sawit & Sensasi Apps
                </Typography>

                <Divider sx={{ my: 3 }} />

                {/* Tentang Aplikasi */}
                <Box component="section" sx={{ mb: 4 }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        💡 Tentang Aplikasi
                    </Typography>
                    <Typography paragraph>
                        <strong>Simulasi Grading Sawit</strong> adalah aplikasi
                        web gratis dan open-source yang dirancang khusus untuk
                        membantu petani kelapa sawit, tengkulak, dan pelaku
                        industri memahami sistem grading Tandan Buah Segar (TBS)
                        serta perhitungan potongan dan insentif yang berlaku.
                    </Typography>

                    <Card variant="outlined" sx={{ my: 3, bgcolor: 'grey.50' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                <LightbulbIcon
                                    sx={{ mr: 1, verticalAlign: 'middle' }}
                                />
                                Mengapa Kami Membuat Aplikasi Ini?
                            </Typography>
                            <Typography component="div">
                                <ul>
                                    <li>
                                        <strong>Transparansi:</strong> Banyak
                                        petani yang tidak memahami bagaimana
                                        harga TBS mereka dihitung setelah
                                        dikurangi potongan berdasarkan kualitas.
                                        Kami ingin memberikan transparansi penuh
                                        dalam proses perhitungan.
                                    </li>
                                    <li>
                                        <strong>Edukasi:</strong> Membantu
                                        petani memahami kategori-kategori
                                        grading dan dampaknya terhadap
                                        pendapatan mereka, sehingga dapat
                                        meningkatkan kualitas panen.
                                    </li>
                                    <li>
                                        <strong>Aksesibilitas:</strong>{' '}
                                        Menyediakan tool yang mudah diakses
                                        kapan saja, dimana saja, bahkan tanpa
                                        koneksi internet (Progressive Web App).
                                    </li>
                                    <li>
                                        <strong>Pemberdayaan:</strong>{' '}
                                        Memberikan alat kepada petani untuk
                                        menghitung sendiri nilai TBS mereka
                                        sebelum dijual, sehingga dapat
                                        bernegosiasi dengan lebih baik.
                                    </li>
                                </ul>
                            </Typography>
                        </CardContent>
                    </Card>

                    <Stack
                        direction="row"
                        spacing={1}
                        sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
                        <Chip
                            label="Open Source"
                            color="primary"
                            variant="outlined"
                        />
                        <Chip
                            label="Gratis Selamanya"
                            color="success"
                            variant="outlined"
                        />
                        <Chip label="PWA" color="info" variant="outlined" />
                        <Chip
                            label="Mobile-First"
                            color="secondary"
                            variant="outlined"
                        />
                        <Chip label="Bahasa Indonesia" variant="outlined" />
                    </Stack>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* Tentang Sensasi Apps */}
                <Box component="section" sx={{ mb: 4 }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        🚀 Tentang Sensasi Apps
                    </Typography>
                    <Typography paragraph>
                        <strong>Sensasi Apps</strong> adalah inisiatif
                        open-source yang fokus pada pembuatan aplikasi web yang
                        bermanfaat bagi masyarakat Indonesia. Kami percaya bahwa
                        teknologi harus dapat diakses oleh semua orang dan dapat
                        membantu menyelesaikan masalah nyata di kehidupan
                        sehari-hari.
                    </Typography>

                    <Card variant="outlined" sx={{ my: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Misi Kami
                            </Typography>
                            <Typography component="div">
                                <ol>
                                    <li>
                                        <strong>
                                            Memberdayakan melalui teknologi:
                                        </strong>{' '}
                                        Membuat aplikasi yang membantu
                                        masyarakat dalam pekerjaan atau
                                        kehidupan sehari-hari mereka.
                                    </li>
                                    <li>
                                        <strong>
                                            Open Source & Transparan:
                                        </strong>{' '}
                                        Semua kode sumber kami terbuka dan dapat
                                        diaudit oleh siapa saja.
                                    </li>
                                    <li>
                                        <strong>
                                            Gratis & Tanpa Iklan Mengganggu:
                                        </strong>{' '}
                                        Aplikasi kami gratis digunakan dan tidak
                                        dibebani iklan yang mengganggu
                                        pengalaman pengguna.
                                    </li>
                                    <li>
                                        <strong>Community-Driven:</strong> Kami
                                        mendengarkan feedback pengguna dan terus
                                        mengembangkan aplikasi sesuai kebutuhan
                                        nyata.
                                    </li>
                                </ol>
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* Tech Stack */}
                <Box component="section" sx={{ mb: 4 }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        <CodeIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                        Teknologi yang Digunakan
                    </Typography>
                    <Typography paragraph>
                        Aplikasi ini dibangun dengan teknologi modern untuk
                        memastikan performa terbaik, keamanan, dan pengalaman
                        pengguna yang optimal:
                    </Typography>

                    <Card variant="outlined" sx={{ my: 2 }}>
                        <CardContent>
                            <Typography component="div">
                                <ul>
                                    <li>
                                        <strong>Next.js 16</strong> - Framework
                                        React untuk web apps yang cepat dan
                                        SEO-friendly
                                    </li>
                                    <li>
                                        <strong>React 19</strong> - Library
                                        JavaScript untuk membangun user
                                        interface
                                    </li>
                                    <li>
                                        <strong>Material-UI (MUI) v7</strong> -
                                        Komponen UI design system yang modern
                                        dan accessible
                                    </li>
                                    <li>
                                        <strong>TypeScript</strong> - Type-safe
                                        JavaScript untuk kode yang lebih robust
                                    </li>
                                    <li>
                                        <strong>
                                            PWA (Progressive Web App)
                                        </strong>{' '}
                                        - Dapat diinstall dan bekerja offline
                                    </li>
                                    <li>
                                        <strong>Firebase Analytics</strong> -
                                        Analytics anonim untuk memahami
                                        penggunaan aplikasi
                                    </li>
                                    <li>
                                        <strong>Sentry</strong> - Error tracking
                                        dan feedback collection
                                    </li>
                                </ul>
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* Kontribusi & Open Source */}
                <Box component="section" sx={{ mb: 4 }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        <VolunteerActivismIcon
                            sx={{ mr: 1, verticalAlign: 'middle' }}
                        />
                        Kontribusi & Open Source
                    </Typography>
                    <Typography paragraph>
                        Aplikasi ini adalah proyek open-source yang dikelola di
                        GitHub. Kami menyambut kontribusi dari developer,
                        designer, dan siapa saja yang ingin membantu
                        meningkatkan aplikasi ini.
                    </Typography>

                    <Alert severity="info" sx={{ my: 2 }}>
                        <Typography paragraph>
                            <strong>Cara Berkontribusi:</strong>
                        </Typography>
                        <Typography component="div">
                            <ol>
                                <li>Fork repository kami di GitHub</li>
                                <li>
                                    Buat branch baru untuk fitur atau perbaikan
                                    Anda
                                </li>
                                <li>
                                    Buat pull request dengan deskripsi yang
                                    jelas tentang perubahan Anda
                                </li>
                                <li>
                                    Tim kami akan review dan merge jika sesuai
                                    dengan standar kami
                                </li>
                            </ol>
                        </Typography>
                    </Alert>

                    <Typography paragraph>
                        Anda juga dapat membantu dengan:
                    </Typography>
                    <Typography component="div">
                        <ul>
                            <li>Melaporkan bug atau error yang Anda temukan</li>
                            <li>Memberikan saran fitur baru</li>
                            <li>Memperbaiki dokumentasi</li>
                            <li>
                                Membagikan aplikasi ke rekan petani atau pelaku
                                industri
                            </li>
                            <li>
                                Memberikan donasi sukarela untuk mendukung
                                pengembangan
                            </li>
                        </ul>
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* Kontak */}
                <Box component="section" sx={{ mb: 2 }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        📬 Hubungi Kami
                    </Typography>
                    <Typography paragraph>
                        Kami senang mendengar dari Anda! Apakah itu pertanyaan,
                        saran, bug report, atau sekadar ingin berbagi pengalaman
                        menggunakan aplikasi ini.
                    </Typography>

                    <Stack spacing={2} sx={{ mt: 3 }}>
                        <Paper variant="outlined" sx={{ p: 2 }}>
                            <Stack
                                direction="row"
                                spacing={2}
                                alignItems="center">
                                <EmailIcon color="primary" fontSize="large" />
                                <Box>
                                    <Typography
                                        variant="subtitle2"
                                        color="text.secondary">
                                        Email
                                    </Typography>
                                    <MuiLink
                                        href="mailto:sensasi.apps@gmail.com"
                                        variant="body1">
                                        sensasi.apps@gmail.com
                                    </MuiLink>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary">
                                        Untuk pertanyaan umum, bug report, atau
                                        kerjasama
                                    </Typography>
                                </Box>
                            </Stack>
                        </Paper>

                        <Paper variant="outlined" sx={{ p: 2 }}>
                            <Stack
                                direction="row"
                                spacing={2}
                                alignItems="center">
                                <GitHubIcon color="primary" fontSize="large" />
                                <Box>
                                    <Typography
                                        variant="subtitle2"
                                        color="text.secondary">
                                        GitHub Organization
                                    </Typography>
                                    <MuiLink
                                        href="https://github.com/sensasi-apps"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant="body1">
                                        github.com/sensasi-apps
                                    </MuiLink>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary">
                                        Lihat source code, buat issue, atau
                                        kontribusi
                                    </Typography>
                                </Box>
                            </Stack>
                        </Paper>

                        <Paper variant="outlined" sx={{ p: 2 }}>
                            <Stack
                                direction="row"
                                spacing={2}
                                alignItems="center">
                                <GitHubIcon color="primary" fontSize="large" />
                                <Box>
                                    <Typography
                                        variant="subtitle2"
                                        color="text.secondary">
                                        Repository Aplikasi Ini
                                    </Typography>
                                    <MuiLink
                                        href="https://github.com/sensasi-delight/simulasi-grading-sawit"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant="body1">
                                        github.com/sensasi-delight/simulasi-grading-sawit
                                    </MuiLink>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary">
                                        Fork, star, atau watch repository ini
                                    </Typography>
                                </Box>
                            </Stack>
                        </Paper>
                    </Stack>

                    <Alert severity="success" sx={{ mt: 3 }}>
                        <Typography>
                            <strong>Feedback Anda sangat berharga!</strong>{' '}
                            Gunakan tombol &quot;Saran Perbaikan&quot; di
                            halaman utama untuk mengirim feedback langsung
                            kepada kami.
                        </Typography>
                    </Alert>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* Footer Note */}
                <Box component="section">
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        align="center">
                        Versi Aplikasi: v4.0.7 | Terakhir Diperbarui: 8 Desember
                        2025
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        align="center"
                        sx={{ mt: 1 }}>
                        © 2025 Sensasi Apps. Dibuat dengan ❤️ untuk petani kelapa
                        sawit Indonesia.
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        align="center"
                        sx={{ mt: 1 }}>
                        Aplikasi ini bersifat edukatif dan tidak berafiliasi
                        dengan perusahaan atau pabrik kelapa sawit manapun.
                    </Typography>
                </Box>
            </Box>
        </Container>
    )
}
