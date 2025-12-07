'use client'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
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
        <Container maxWidth="md" sx={{ py: 4, pb: 14 }}>
            <Box
                sx={{
                    marginTop: 6,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mb: 6,
                }}>
                <Avatar
                    sx={{
                        m: 1,
                        bgcolor: 'primary.main',
                        width: 80,
                        height: 80,
                    }}>
                    <PercentOutlinedIcon sx={{ fontSize: 48 }} />
                </Avatar>
                <Typography mt={3} component="h1" variant="h3" align="center">
                    Simulasi Grading Sawit
                </Typography>
                <Typography
                    variant="h6"
                    color="text.primary"
                    align="center"
                    sx={{ mt: 2, maxWidth: '75ch' }}>
                    Kalkulator Grading Kelapa Sawit untuk Petani dan Pelaku
                    Industri
                </Typography>
            </Box>

            <Box sx={{ mb: 6 }}>
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Button
                        variant="contained"
                        size="large"
                        startIcon={<CalculateIcon sx={{ fontSize: 32 }} />}
                        onClick={() => router.push('/kalkulator')}
                        sx={{
                            minHeight: 64,
                            px: 6,
                            py: 2,
                            fontSize: '1.25rem',
                        }}>
                        Mulai Hitung Grading TBS
                    </Button>
                </Box>

                <Divider sx={{ my: 6 }} />

                <Box component="article">
                    <Typography
                        variant="h4"
                        component="h2"
                        gutterBottom
                        sx={{ mb: 3 }}>
                        Apa Itu Grading Kelapa Sawit?
                    </Typography>
                    
                    <Typography paragraph sx={{ maxWidth: '75ch', mb: 2 }}>
                        <strong>Grading kelapa sawit</strong> adalah sistem
                        penilaian kualitas buah kelapa sawit Anda.
                    </Typography>
                    
                    <Typography paragraph sx={{ maxWidth: '75ch', mb: 2 }}>
                        Pabrik menilai kualitas buah untuk menentukan harga.
                        Buah berkualitas baik dapat bonus, buah kurang baik kena
                        potongan harga.
                    </Typography>

                    <Typography
                        variant="h5"
                        component="h3"
                        gutterBottom
                        sx={{ mt: 5, mb: 3 }}>
                        Mengapa Penting Bagi Petani?
                    </Typography>
                    
                    <Typography paragraph sx={{ maxWidth: '75ch', mb: 3 }}>
                        Dengan memahami grading, petani bisa:
                    </Typography>
                    
                    <Box component="ul" sx={{ pl: 3, mb: 4 }}>
                        <Typography component="li" sx={{ mb: 2 }}>
                            <strong>Tingkatkan kualitas panen</strong> - Tahu
                            kategori mana yang merugikan
                        </Typography>
                        <Typography component="li" sx={{ mb: 2 }}>
                            <strong>Hitung harga sendiri</strong> - Cek
                            perhitungan pabrik dengan percaya diri
                        </Typography>
                        <Typography component="li" sx={{ mb: 2 }}>
                            <strong>Dapat bonus lebih</strong> - Kumpulkan
                            berondolan bersih minimal 10%
                        </Typography>
                        <Typography component="li" sx={{ mb: 2 }}>
                            <strong>Hindari kerugian besar</strong> - Potongan
                            bisa sampai 50-100%
                        </Typography>
                    </Box>

                    <Typography
                        variant="h5"
                        component="h3"
                        gutterBottom
                        sx={{ mt: 5, mb: 3 }}>
                        Kategori Buah Kelapa Sawit
                    </Typography>

                    <Stack spacing={4} sx={{ my: 4 }}>
                        <Card variant="outlined">
                            <CardContent sx={{ p: 3 }}>
                                <Typography
                                    variant="h6"
                                    color="error"
                                    gutterBottom
                                    sx={{ mb: 2 }}>
                                    Buah Mentah (BM) - Potongan 50%
                                </Typography>
                                <Typography>
                                    Buah warna hijau, belum matang. Kena potongan
                                    besar 50%.
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card variant="outlined">
                            <CardContent sx={{ p: 3 }}>
                                <Typography
                                    variant="h6"
                                    color="warning.main"
                                    gutterBottom
                                    sx={{ mb: 2 }}>
                                    Buah Lewat Matang (BLM) - Potongan 25%
                                </Typography>
                                <Typography>
                                    Buah terlalu matang. Jika lebih dari 5%,
                                    kena potongan 25%.
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card
                            variant="outlined"
                            sx={{ bgcolor: 'success.light' }}>
                            <CardContent sx={{ p: 3 }}>
                                <Typography
                                    variant="h6"
                                    color="success.dark"
                                    gutterBottom
                                    sx={{ mb: 2 }}>
                                    Buah Matang (BMTG) - ✓ Tidak Ada Potongan
                                </Typography>
                                <Typography>
                                    Buah warna merah/oranye cerah. Kondisi
                                    terbaik, tidak kena potongan.
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card variant="outlined" sx={{ bgcolor: 'info.light' }}>
                            <CardContent sx={{ p: 3 }}>
                                <Typography
                                    variant="h6"
                                    color="info.dark"
                                    gutterBottom
                                    sx={{ mb: 2 }}>
                                    Berondolan Bersih (PBB) - Bonus 8%
                                </Typography>
                                <Typography>
                                    Buah lepas yang bersih. Jika lebih dari 10%,
                                    dapat bonus 8%.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Stack>

                    <Typography
                        variant="h5"
                        component="h3"
                        gutterBottom
                        sx={{ mt: 5, mb: 3 }}>
                        Cara Menggunakan Kalkulator
                    </Typography>
                    
                    <Box component="ol" sx={{ pl: 3, mb: 4 }}>
                        <Typography component="li" sx={{ mb: 3 }}>
                            <strong>Langkah 1:</strong> Masukkan jumlah janjang
                            buah mentah, lewat matang, dan buah matang.
                        </Typography>
                        <Typography component="li" sx={{ mb: 3 }}>
                            <strong>Langkah 2:</strong> Masukkan data kualitas
                            buah dan total berat (kilogram).
                        </Typography>
                        <Typography component="li" sx={{ mb: 3 }}>
                            <strong>Langkah 3:</strong> Masukkan harga per
                            kilogram, lalu lihat hasil perhitungan.
                        </Typography>
                    </Box>

                    <Typography
                        variant="h5"
                        component="h3"
                        gutterBottom
                        sx={{ mt: 5, mb: 3 }}>
                        Manfaat Aplikasi Ini
                    </Typography>
                    <Stack spacing={4} sx={{ my: 4 }}>
                        <Card
                            variant="outlined"
                            sx={{
                                display: 'flex',
                                flexDirection: {
                                    xs: 'column',
                                    sm: 'row',
                                },
                            }}>
                            <CardContent sx={{ p: 3, flex: 1 }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        mb: 2,
                                    }}>
                                    <VerifiedIcon
                                        color="primary"
                                        sx={{ fontSize: 56, mr: 2 }}
                                    />
                                    <Typography variant="h6">
                                        100% Gratis
                                    </Typography>
                                </Box>
                                <Typography>
                                    Tidak ada biaya apapun. Gratis selamanya
                                    untuk semua petani.
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card
                            variant="outlined"
                            sx={{
                                display: 'flex',
                                flexDirection: {
                                    xs: 'column',
                                    sm: 'row',
                                },
                            }}>
                            <CardContent sx={{ p: 3, flex: 1 }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        mb: 2,
                                    }}>
                                    <TrendingUpIcon
                                        color="success"
                                        sx={{ fontSize: 56, mr: 2 }}
                                    />
                                    <Typography variant="h6">
                                        Akurat & Transparan
                                    </Typography>
                                </Box>
                                <Typography>
                                    Rumus berdasarkan studi kasus nyata dengan
                                    hasil yang akurat.
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card
                            variant="outlined"
                            sx={{
                                display: 'flex',
                                flexDirection: {
                                    xs: 'column',
                                    sm: 'row',
                                },
                            }}>
                            <CardContent sx={{ p: 3, flex: 1 }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        mb: 2,
                                    }}>
                                    <MenuBookIcon
                                        color="info"
                                        sx={{ fontSize: 56, mr: 2 }}
                                    />
                                    <Typography variant="h6">
                                        Panduan Lengkap
                                    </Typography>
                                </Box>
                                <Typography>
                                    Ada panduan detail cara perhitungan manual
                                    dan penjelasan kategori.
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card
                            variant="outlined"
                            sx={{
                                display: 'flex',
                                flexDirection: {
                                    xs: 'column',
                                    sm: 'row',
                                },
                            }}>
                            <CardContent sx={{ p: 3, flex: 1 }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        mb: 2,
                                    }}>
                                    <CalculateIcon
                                        color="secondary"
                                        sx={{ fontSize: 56, mr: 2 }}
                                    />
                                    <Typography variant="h6">
                                        Mudah Digunakan
                                    </Typography>
                                </Box>
                                <Typography>
                                    Tampilan sederhana, bisa pakai di HP atau
                                    komputer.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Stack>
                </Box>

                <Divider sx={{ my: 6 }} />

                <Divider sx={{ my: 6 }} />

                <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{ mb: 3 }}>
                    Informasi Lebih Lanjut
                </Typography>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ fontSize: 32 }} />}
                        sx={{ py: 2 }}>
                        <Typography variant="h6">
                            Siapa yang Bisa Pakai Aplikasi Ini?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ p: 3 }}>
                        <Stack spacing={3}>
                            <Box>
                                <Typography
                                    variant="h6"
                                    gutterBottom
                                    sx={{ mb: 1 }}>
                                    🌾 Petani Kelapa Sawit
                                </Typography>
                                <Typography sx={{ maxWidth: '75ch' }}>
                                    Hitung estimasi harga TBS sebelum jual ke
                                    pabrik. Cek nota pembayaran dari pabrik.
                                </Typography>
                            </Box>
                            <Box>
                                <Typography
                                    variant="h6"
                                    gutterBottom
                                    sx={{ mb: 1 }}>
                                    🏭 Pabrik Kelapa Sawit
                                </Typography>
                                <Typography sx={{ maxWidth: '75ch' }}>
                                    Alat bantu hitung grading dengan cepat.
                                    Bagus untuk latih staf baru.
                                </Typography>
                            </Box>
                            <Box>
                                <Typography
                                    variant="h6"
                                    gutterBottom
                                    sx={{ mb: 1 }}>
                                    📚 Mahasiswa dan Peneliti
                                </Typography>
                                <Typography sx={{ maxWidth: '75ch' }}>
                                    Pelajari sistem grading untuk penelitian
                                    tentang kelapa sawit.
                                </Typography>
                            </Box>
                        </Stack>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ fontSize: 32 }} />}
                        sx={{ py: 2 }}>
                        <Typography variant="h6">
                            Pertanyaan yang Sering Ditanyakan
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ p: 3 }}>
                        <Stack spacing={3}>
                            <Box>
                                <Typography
                                    variant="h6"
                                    gutterBottom
                                    color="primary"
                                    sx={{ mb: 1 }}>
                                    Apakah aplikasi ini gratis?
                                </Typography>
                                <Typography sx={{ maxWidth: '75ch' }}>
                                    Ya, 100% gratis selamanya. Tidak ada biaya
                                    apapun.
                                </Typography>
                            </Box>
                            <Box>
                                <Typography
                                    variant="h6"
                                    gutterBottom
                                    color="primary"
                                    sx={{ mb: 1 }}>
                                    Apakah data saya aman?
                                </Typography>
                                <Typography sx={{ maxWidth: '75ch' }}>
                                    Ya, semua data tersimpan di HP/komputer Anda
                                    sendiri. Tidak dikirim ke server.
                                </Typography>
                            </Box>
                            <Box>
                                <Typography
                                    variant="h6"
                                    gutterBottom
                                    color="primary"
                                    sx={{ mb: 1 }}>
                                    Bisakah dipakai tanpa internet?
                                </Typography>
                                <Typography sx={{ maxWidth: '75ch' }}>
                                    Ya! Bisa diinstal dan dipakai offline
                                    sepenuhnya.
                                </Typography>
                            </Box>
                        </Stack>
                    </AccordionDetails>
                </Accordion>

                <Divider sx={{ my: 6 }} />

                <Divider sx={{ my: 6 }} />

                <Box sx={{ textAlign: 'center' }}>
                    <Typography
                        variant="h5"
                        gutterBottom
                        sx={{ mb: 2, fontWeight: 700 }}>
                        Siap Menghitung Grading TBS Anda?
                    </Typography>
                    <Typography
                        paragraph
                        color="text.primary"
                        sx={{ mb: 4, maxWidth: '75ch', mx: 'auto' }}>
                        Mulai hitung grading sekarang untuk tahu harga TBS Anda.
                    </Typography>
                    <Stack
                        spacing={3}
                        sx={{
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <Button
                            variant="contained"
                            size="large"
                            startIcon={
                                <CalculateIcon sx={{ fontSize: 32 }} />
                            }
                            onClick={() => router.push('/kalkulator')}
                            sx={{
                                minHeight: 64,
                                px: 6,
                                py: 2,
                                fontSize: '1.25rem',
                            }}>
                            Buka Kalkulator Grading
                        </Button>
                        <Box>
                            <Button
                                variant="outlined"
                                size="large"
                                startIcon={
                                    <MenuBookIcon sx={{ fontSize: 28 }} />
                                }
                                onClick={() => router.push('/panduan')}
                                sx={{
                                    minHeight: 56,
                                    px: 4,
                                    py: 1.5,
                                    mr: 2,
                                    fontSize: '1.1rem',
                                }}>
                                Baca Panduan
                            </Button>
                            <Button
                                variant="text"
                                size="large"
                                onClick={() => router.push('/tentang')}
                                sx={{
                                    minHeight: 56,
                                    px: 4,
                                    py: 1.5,
                                    fontSize: '1.1rem',
                                }}>
                                Tentang Aplikasi
                            </Button>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </Container>
    )
}
