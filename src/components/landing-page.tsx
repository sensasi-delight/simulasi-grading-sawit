'use client'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CalculateIcon from '@mui/icons-material/Calculate'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import VerifiedIcon from '@mui/icons-material/Verified'
import { useRouter } from 'next/navigation'
import Avatar from '@mui/material/Avatar'
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined'

export default function LandingPage() {
    const router = useRouter()

    return (
        <Container maxWidth="md" sx={{ py: 4, pb: 10 }}>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mb: 4,
                }}>
                <Avatar
                    sx={{
                        m: 1,
                        bgcolor: 'primary.main',
                        width: 56,
                        height: 56,
                    }}>
                    <PercentOutlinedIcon fontSize="large" />
                </Avatar>
                <Typography mt={2} component="h1" variant="h3" align="center">
                    Simulasi Grading Sawit
                </Typography>
                <Typography
                    variant="h6"
                    color="text.secondary"
                    align="center"
                    sx={{ mt: 1 }}>
                    Kalkulator Grading Kelapa Sawit untuk Petani dan Pelaku
                    Industri
                </Typography>
            </Box>

            <Paper elevation={3} sx={{ p: { xs: 3, sm: 4 }, mb: 4 }}>
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                    <Button
                        variant="contained"
                        size="large"
                        startIcon={<CalculateIcon />}
                        onClick={() => router.push('/kalkulator')}
                        sx={{ px: 4, py: 1.5, fontSize: '1.1rem' }}>
                        Mulai Hitung Grading TBS
                    </Button>
                </Box>

                <Divider sx={{ my: 4 }} />

                <Box component="article">
                    <Typography variant="h4" component="h2" gutterBottom>
                        Apa Itu Grading Kelapa Sawit?
                    </Typography>
                    <Typography paragraph>
                        <strong>Grading kelapa sawit</strong> adalah sistem
                        penilaian kualitas Tandan Buah Segar (TBS) yang
                        digunakan oleh pabrik kelapa sawit di seluruh Indonesia
                        untuk menentukan harga pembelian dari petani. Sistem ini
                        sangat penting karena kualitas buah sawit secara
                        langsung mempengaruhi rendemen minyak yang dihasilkan
                        pabrik, sehingga pabrik memberikan{' '}
                        <strong>potongan harga</strong> untuk buah berkualitas
                        rendah dan <strong>insentif bonus</strong> untuk buah
                        berkualitas tinggi.
                    </Typography>
                    <Typography paragraph>
                        Proses grading melibatkan pemeriksaan beberapa kategori
                        kualitas buah, termasuk tingkat kematangan (buah mentah,
                        matang, atau lewat matang), kondisi fisik buah (apakah
                        ada tangkai panjang, buah menginap, atau buah kosong),
                        dan kebersihan berondolan (buah lepas dari tandan).
                        Setiap kategori memiliki persentase toleransi dan
                        persentase potongan yang berbeda-beda, yang pada
                        akhirnya menentukan harga final yang diterima petani.
                    </Typography>

                    <Typography
                        variant="h5"
                        component="h3"
                        gutterBottom
                        sx={{ mt: 3 }}>
                        Mengapa Petani Perlu Memahami Sistem Grading?
                    </Typography>
                    <Typography paragraph>
                        Banyak petani kelapa sawit yang tidak sepenuhnya
                        memahami bagaimana harga TBS mereka dihitung setelah
                        dikurangi berbagai potongan berdasarkan kualitas. Hal
                        ini sering menyebabkan kebingungan dan kadang
                        ketidakpuasan ketika menerima pembayaran yang lebih
                        rendah dari yang diharapkan. Dengan memahami sistem
                        grading, petani dapat:
                    </Typography>
                    <Typography component="div">
                        <ul>
                            <li>
                                <strong>Meningkatkan kualitas panen:</strong>{' '}
                                Mengetahui kategori mana yang paling merugikan
                                membantu petani fokus pada praktik panen yang
                                lebih baik, seperti memanen buah pada tingkat
                                kematangan optimal dan mengirim TBS ke pabrik
                                dalam waktu kurang dari 48 jam.
                            </li>
                            <li>
                                <strong>Transparansi harga:</strong> Petani
                                dapat menghitung sendiri estimasi harga yang
                                akan mereka terima sebelum menjual TBS, sehingga
                                dapat memverifikasi perhitungan pabrik dan
                                bernegosiasi dengan lebih percaya diri.
                            </li>
                            <li>
                                <strong>Maksimalkan pendapatan:</strong> Dengan
                                memahami bahwa Berondolan Bersih (PBB) yang
                                lebih dari 10% dari total berat dapat memberikan
                                insentif tambahan 8%, petani dapat fokus
                                mengumpulkan brondolan dengan bersih untuk
                                meningkatkan pendapatan.
                            </li>
                            <li>
                                <strong>Hindari kerugian besar:</strong>{' '}
                                Kategori seperti Buah Mentah (BM) dan Berondolan
                                Kotor (BK) memiliki potongan yang sangat besar
                                (50% hingga 100%), sehingga menghindari kategori
                                ini dapat menyelamatkan pendapatan petani secara
                                signifikan.
                            </li>
                        </ul>
                    </Typography>

                    <Typography
                        variant="h5"
                        component="h3"
                        gutterBottom
                        sx={{ mt: 3 }}>
                        Kategori Utama dalam Grading TBS
                    </Typography>
                    <Typography paragraph>
                        Sistem grading TBS umumnya membagi buah kelapa sawit ke
                        dalam beberapa kategori berdasarkan tingkat kematangan
                        dan kondisi fisik. Berikut adalah kategori-kategori
                        utama yang perlu dipahami oleh setiap petani:
                    </Typography>

                    <Stack spacing={2} sx={{ my: 3 }}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography
                                    variant="h6"
                                    color="error"
                                    gutterBottom>
                                    Buah Mentah (BM) - Potongan 50%
                                </Typography>
                                <Typography variant="body2">
                                    Buah yang belum matang dengan warna
                                    kehijauan. Rendemen minyak sangat rendah
                                    karena kandungan minyak belum optimal.
                                    Pabrik memberikan potongan 50% untuk setiap
                                    persentase buah mentah yang dibawa petani.
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card variant="outlined">
                            <CardContent>
                                <Typography
                                    variant="h6"
                                    color="warning.main"
                                    gutterBottom>
                                    Buah Lewat Matang (BLM) - Potongan 25%
                                </Typography>
                                <Typography variant="body2">
                                    Buah yang terlalu matang atau overripe
                                    dengan kandungan FFA (asam lemak bebas) yang
                                    tinggi. Jika lebih dari 5% dari total berat,
                                    akan dikenakan potongan 25% untuk
                                    kelebihannya.
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card
                            variant="outlined"
                            sx={{ bgcolor: 'success.light' }}>
                            <CardContent>
                                <Typography
                                    variant="h6"
                                    color="success.dark"
                                    gutterBottom>
                                    Buah Matang (BMTG) - Tidak Ada Potongan ✓
                                </Typography>
                                <Typography variant="body2">
                                    Buah matang optimal dengan warna
                                    merah/oranye cerah. Ini adalah kondisi ideal
                                    yang memberikan rendemen minyak maksimal.
                                    Tidak ada potongan untuk kategori ini.
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card variant="outlined" sx={{ bgcolor: 'info.light' }}>
                            <CardContent>
                                <Typography
                                    variant="h6"
                                    color="info.dark"
                                    gutterBottom>
                                    Berondolan Bersih (PBB) - Insentif 8%
                                </Typography>
                                <Typography variant="body2">
                                    Buah lepas yang bersih tanpa kotoran. Jika
                                    lebih dari 10% dari total berat, petani
                                    mendapat bonus insentif 8%. Namun jika
                                    kurang dari 10%, akan dikenakan potongan
                                    30%.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Stack>

                    <Typography
                        variant="h5"
                        component="h3"
                        gutterBottom
                        sx={{ mt: 3 }}>
                        Cara Menggunakan Kalkulator Grading Sawit
                    </Typography>
                    <Typography paragraph>
                        Aplikasi <strong>Simulasi Grading Sawit</strong> ini
                        dirancang untuk membantu petani dan pelaku industri
                        kelapa sawit menghitung dengan mudah dan cepat berapa
                        nilai akhir TBS setelah dikurangi potongan dan ditambah
                        insentif. Kalkulator ini menggunakan rumus standar yang
                        umum dipakai di industri kelapa sawit Indonesia,
                        khususnya di wilayah Kalimantan Timur.
                    </Typography>
                    <Typography paragraph>
                        Untuk menggunakan kalkulator, Anda cukup memasukkan
                        data-data berikut secara bertahap:
                    </Typography>
                    <Typography component="div">
                        <ol>
                            <li>
                                <strong>
                                    Langkah 1 - Kategori Kematangan:
                                </strong>{' '}
                                Masukkan jumlah janjang untuk Buah Mentah (BM),
                                Buah Lewat Matang (BLM), dan Buah Matang (BMTG).
                                Usahakan sebagian besar TBS Anda adalah Buah
                                Matang untuk menghindari potongan besar.
                            </li>
                            <li>
                                <strong>Langkah 2 - Kategori Kualitas:</strong>{' '}
                                Masukkan jumlah untuk Buah Ganggang Panjang
                                (BGP), Buah Menginap (BR), Berondolan Kotor
                                (BK), Berondolan Bersih (PBB), dan total berat
                                TBS dalam kilogram. Pastikan mengumpulkan
                                Berondolan Bersih minimal 10% untuk mendapat
                                insentif.
                            </li>
                            <li>
                                <strong>Langkah 3 - Hitung Hasil:</strong>{' '}
                                Masukkan harga per kilogram TBS yang berlaku,
                                dan aplikasi akan otomatis menghitung nilai
                                dasar, total potongan, total insentif, dan nilai
                                akhir yang akan Anda terima.
                            </li>
                        </ol>
                    </Typography>
                    <Typography paragraph>
                        Aplikasi ini juga menyediakan fitur untuk menyimpan
                        hasil perhitungan Anda sehingga dapat dibandingkan dari
                        waktu ke waktu. Data tersimpan di perangkat Anda sendiri
                        dan tidak dikirim ke server, menjaga privasi data Anda.
                    </Typography>

                    <Typography
                        variant="h5"
                        component="h3"
                        gutterBottom
                        sx={{ mt: 3 }}>
                        Manfaat Menggunakan Aplikasi Ini
                    </Typography>
                    <Stack
                        direction="row"
                        spacing={2}
                        sx={{ my: 2, flexWrap: 'wrap', gap: 2 }}>
                        <Card
                            variant="outlined"
                            sx={{
                                flex: '1 1 calc(50% - 16px)',
                                minWidth: 200,
                            }}>
                            <CardContent>
                                <VerifiedIcon
                                    color="primary"
                                    sx={{ fontSize: 40, mb: 1 }}
                                />
                                <Typography variant="h6" gutterBottom>
                                    100% Gratis
                                </Typography>
                                <Typography variant="body2">
                                    Tidak ada biaya berlangganan atau biaya
                                    tersembunyi. Aplikasi ini gratis selamanya
                                    untuk semua petani.
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card
                            variant="outlined"
                            sx={{
                                flex: '1 1 calc(50% - 16px)',
                                minWidth: 200,
                            }}>
                            <CardContent>
                                <TrendingUpIcon
                                    color="success"
                                    sx={{ fontSize: 40, mb: 1 }}
                                />
                                <Typography variant="h6" gutterBottom>
                                    Akurat & Transparan
                                </Typography>
                                <Typography variant="body2">
                                    Menggunakan rumus standar industri dengan
                                    presisi tinggi untuk hasil yang akurat.
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card
                            variant="outlined"
                            sx={{
                                flex: '1 1 calc(50% - 16px)',
                                minWidth: 200,
                            }}>
                            <CardContent>
                                <MenuBookIcon
                                    color="info"
                                    sx={{ fontSize: 40, mb: 1 }}
                                />
                                <Typography variant="h6" gutterBottom>
                                    Panduan Lengkap
                                </Typography>
                                <Typography variant="body2">
                                    Dilengkapi dengan panduan detail tentang
                                    cara perhitungan manual dan penjelasan
                                    setiap kategori.
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card
                            variant="outlined"
                            sx={{
                                flex: '1 1 calc(50% - 16px)',
                                minWidth: 200,
                            }}>
                            <CardContent>
                                <CalculateIcon
                                    color="secondary"
                                    sx={{ fontSize: 40, mb: 1 }}
                                />
                                <Typography variant="h6" gutterBottom>
                                    Mudah Digunakan
                                </Typography>
                                <Typography variant="body2">
                                    Interface sederhana dan intuitif, dapat
                                    digunakan di smartphone maupun komputer.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Stack>
                </Box>

                <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{ mt: 4 }}>
                    Siapa yang Membutuhkan Aplikasi Ini?
                </Typography>
                <Typography paragraph>
                    Aplikasi Simulasi Grading Sawit dirancang untuk berbagai
                    pihak yang terlibat dalam industri kelapa sawit:
                </Typography>

                <Stack spacing={2} sx={{ my: 3 }}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                🌾 Petani Kelapa Sawit
                            </Typography>
                            <Typography variant="body2">
                                Petani dapat menggunakan aplikasi ini untuk
                                mengestimasi harga TBS sebelum menjual ke
                                pabrik. Dengan memahami perhitungan grading,
                                petani dapat memverifikasi nota pembayaran dari
                                pabrik dan memastikan tidak ada kesalahan
                                perhitungan yang merugikan. Aplikasi ini juga
                                membantu petani mengidentifikasi area perbaikan
                                dalam praktik panen untuk meningkatkan kualitas
                                TBS di masa mendatang.
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                🏭 Pabrik Kelapa Sawit (PKS)
                            </Typography>
                            <Typography variant="body2">
                                Operator pabrik dan staf grading dapat
                                menggunakan aplikasi ini sebagai alat bantu
                                untuk menghitung grading dengan cepat dan
                                akurat. Aplikasi ini juga berguna untuk
                                pelatihan staf baru tentang sistem grading
                                standar dan memastikan konsistensi perhitungan
                                di seluruh tim.
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                📚 Mahasiswa dan Peneliti
                            </Typography>
                            <Typography variant="body2">
                                Mahasiswa pertanian, agribisnis, dan peneliti
                                yang mempelajari industri kelapa sawit dapat
                                menggunakan aplikasi ini untuk memahami sistem
                                grading dan melakukan simulasi berbagai skenario
                                kualitas TBS. Data dari aplikasi ini dapat
                                digunakan sebagai referensi dalam penelitian
                                tentang sistem perdagangan TBS di Indonesia.
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                💼 Konsultan dan Penyuluh Pertanian
                            </Typography>
                            <Typography variant="body2">
                                Konsultan agribisnis dan penyuluh pertanian
                                dapat menggunakan aplikasi ini sebagai alat
                                edukasi saat memberikan pelatihan kepada petani
                                kelapa sawit. Aplikasi ini membantu menjelaskan
                                konsep grading dengan cara yang praktis dan
                                interaktif.
                            </Typography>
                        </CardContent>
                    </Card>
                </Stack>

                <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{ mt: 4 }}>
                    Pertanyaan yang Sering Diajukan (FAQ)
                </Typography>

                <Stack spacing={2} sx={{ my: 3 }}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography
                                variant="h6"
                                gutterBottom
                                color="primary">
                                Apakah aplikasi ini gratis?
                            </Typography>
                            <Typography variant="body2">
                                Ya, aplikasi ini 100% gratis dan akan tetap
                                gratis selamanya. Tidak ada biaya berlangganan,
                                tidak ada fitur premium berbayar, dan tidak ada
                                biaya tersembunyi. Kami percaya bahwa akses
                                terhadap informasi dan alat bantu perhitungan
                                harus tersedia untuk semua petani.
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card variant="outlined">
                        <CardContent>
                            <Typography
                                variant="h6"
                                gutterBottom
                                color="primary">
                                Apakah data saya aman?
                            </Typography>
                            <Typography variant="body2">
                                Semua data perhitungan Anda disimpan secara
                                lokal di perangkat Anda sendiri (browser). Kami
                                tidak mengumpulkan, menyimpan, atau mengirim
                                data perhitungan Anda ke server manapun. Data
                                Anda sepenuhnya privat dan hanya dapat diakses
                                oleh Anda.
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card variant="outlined">
                        <CardContent>
                            <Typography
                                variant="h6"
                                gutterBottom
                                color="primary">
                                Apakah rumus yang digunakan akurat?
                            </Typography>
                            <Typography variant="body2">
                                Rumus perhitungan dalam aplikasi ini berdasarkan
                                standar industri kelapa sawit di Indonesia,
                                khususnya wilayah Kalimantan Timur. Namun perlu
                                diingat bahwa setiap pabrik mungkin memiliki
                                variasi kecil dalam persentase potongan atau
                                insentif. Aplikasi ini memberikan estimasi yang
                                sangat mendekati, namun hasil akhir dapat
                                berbeda sedikit tergantung kebijakan spesifik
                                pabrik Anda.
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card variant="outlined">
                        <CardContent>
                            <Typography
                                variant="h6"
                                gutterBottom
                                color="primary">
                                Bisakah digunakan offline?
                            </Typography>
                            <Typography variant="body2">
                                Ya! Aplikasi ini adalah Progressive Web App
                                (PWA) yang dapat diinstal di smartphone atau
                                komputer Anda dan berfungsi sepenuhnya secara
                                offline setelah diinstal. Anda tidak memerlukan
                                koneksi internet untuk menggunakan kalkulator.
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card variant="outlined">
                        <CardContent>
                            <Typography
                                variant="h6"
                                gutterBottom
                                color="primary">
                                Bagaimana cara menginstal aplikasi?
                            </Typography>
                            <Typography variant="body2">
                                Untuk menginstal, buka aplikasi di browser
                                (Chrome/Edge/Safari), lalu cari opsi "Install
                                App" atau "Add to Home Screen" di menu browser.
                                Setelah diinstal, aplikasi akan muncul seperti
                                aplikasi native di perangkat Anda dengan ikon di
                                home screen.
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card variant="outlined">
                        <CardContent>
                            <Typography
                                variant="h6"
                                gutterBottom
                                color="primary">
                                Siapa yang membuat aplikasi ini?
                            </Typography>
                            <Typography variant="body2">
                                Aplikasi ini dikembangkan oleh Sensasi Apps,
                                sebuah tim developer Indonesia yang fokus pada
                                pembuatan aplikasi open-source untuk membantu
                                berbagai industri. Source code aplikasi ini
                                tersedia secara publik di GitHub dan dapat
                                diperiksa atau dikontribusi oleh siapa saja.
                            </Typography>
                        </CardContent>
                    </Card>
                </Stack>

                <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{ mt: 4 }}>
                    Teknologi yang Digunakan
                </Typography>
                <Typography paragraph>
                    Aplikasi Simulasi Grading Sawit dibangun menggunakan
                    teknologi web modern untuk memberikan pengalaman pengguna
                    terbaik:
                </Typography>

                <Stack spacing={1} sx={{ my: 2 }}>
                    <Typography variant="body2">
                        • <strong>Next.js 15</strong> - Framework React untuk
                        performa optimal dan SEO
                    </Typography>
                    <Typography variant="body2">
                        • <strong>React 19</strong> - Library UI terpopuler
                        untuk interface yang responsif
                    </Typography>
                    <Typography variant="body2">
                        • <strong>Material-UI (MUI) v7</strong> - Komponen UI
                        profesional dengan desain Material Design
                    </Typography>
                    <Typography variant="body2">
                        • <strong>TypeScript</strong> - Type-safe programming
                        untuk mengurangi bugs
                    </Typography>
                    <Typography variant="body2">
                        • <strong>Progressive Web App (PWA)</strong> - Teknologi
                        untuk instalasi dan offline capability
                    </Typography>
                    <Typography variant="body2">
                        • <strong>Firebase Analytics</strong> - Anonymous usage
                        analytics untuk perbaikan aplikasi
                    </Typography>
                </Stack>

                <Divider sx={{ my: 4 }} />

                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h5" gutterBottom>
                        Siap Menghitung Grading TBS Anda?
                    </Typography>
                    <Typography paragraph color="text.secondary">
                        Gunakan kalkulator gratis kami sekarang dan dapatkan
                        transparansi penuh dalam perhitungan harga TBS Anda.
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        startIcon={<CalculateIcon />}
                        onClick={() => router.push('/kalkulator')}
                        sx={{ px: 4, py: 1.5, fontSize: '1.1rem', mb: 2 }}>
                        Buka Kalkulator Grading
                    </Button>
                    <Box sx={{ mt: 2 }}>
                        <Button
                            variant="outlined"
                            startIcon={<MenuBookIcon />}
                            onClick={() => router.push('/panduan')}
                            sx={{ mr: 1 }}>
                            Baca Panduan Lengkap
                        </Button>
                        <Button
                            variant="text"
                            onClick={() => router.push('/tentang')}>
                            Tentang Aplikasi
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Container>
    )
}
