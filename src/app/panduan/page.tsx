import type { Metadata } from 'next'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import MuiLink from '@mui/material/Link'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Alert from '@mui/material/Alert'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import FeedbackIcon from '@mui/icons-material/Feedback'

export const metadata: Metadata = {
    title: 'Panduan Lengkap Grading Kelapa Sawit - Simulasi Grading Sawit',
    description:
        'Pelajari cara menghitung grading TBS (Tandan Buah Segar) kelapa sawit secara manual dengan rumus dan contoh lengkap. Panduan edukatif untuk petani dan pelaku industri kelapa sawit.',
    keywords: [
        'grading kelapa sawit',
        'TBS',
        'tandan buah segar',
        'cara hitung grading sawit',
        'panduan petani sawit',
        'kalkulator grading sawit',
        'buah mentah',
        'berondolan',
        'potongan TBS',
    ],
    openGraph: {
        title: 'Panduan Lengkap Grading Kelapa Sawit',
        description:
            'Pelajari cara menghitung grading TBS kelapa sawit secara manual dengan rumus dan contoh lengkap',
        type: 'article',
    },
}

export default function PanduanPage() {
    return (
        <Container maxWidth="md" sx={{ py: 4, pb: 10 }}>
            <Paper elevation={3} sx={{ p: { xs: 2, sm: 4 } }}>
                <Typography
                    variant="h3"
                    component="h1"
                    gutterBottom
                    color="primary">
                    Panduan Grading Kelapa Sawit
                </Typography>
                <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    paragraph>
                    Panduan lengkap memahami sistem grading TBS (Tandan Buah
                    Segar) dan cara perhitungannya
                </Typography>

                <Divider sx={{ my: 3 }} />

                {/* Tentang Aplikasi */}
                <Box component="section" sx={{ mb: 4 }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        🌴 Tentang Aplikasi Ini
                    </Typography>
                    <Typography paragraph>
                        Simulasi Grading Sawit adalah aplikasi kalkulator
                        berbasis web yang membantu petani kelapa sawit,
                        tengkulak, dan pelaku industri untuk menghitung potongan
                        dan insentif berdasarkan kualitas Tandan Buah Segar
                        (TBS) yang dibawa ke pabrik.
                    </Typography>
                    <Typography paragraph>
                        <strong>Mengapa Aplikasi Ini Dibuat?</strong>
                    </Typography>
                    <Typography paragraph component="div">
                        <ul>
                            <li>
                                <strong>Transparansi Harga:</strong> Petani
                                sering kesulitan memahami bagaimana harga akhir
                                TBS mereka dihitung setelah dikurangi potongan
                                kualitas.
                            </li>
                            <li>
                                <strong>Edukasi:</strong> Memberikan pemahaman
                                tentang kategori-kategori grading dan dampaknya
                                terhadap pendapatan.
                            </li>
                            <li>
                                <strong>Efisiensi:</strong> Mempercepat
                                perhitungan yang rumit dengan banyak variabel
                                dan rumus.
                            </li>
                            <li>
                                <strong>Akses Mudah:</strong> Dapat digunakan
                                kapan saja, dimana saja, bahkan tanpa koneksi
                                internet (PWA).
                            </li>
                        </ul>
                    </Typography>

                    <Alert severity="info" sx={{ mt: 2 }}>
                        <strong>Catatan Penting:</strong> Aplikasi ini
                        menggunakan rumus yang umum digunakan di industri kelapa
                        sawit di Indonesia, khususnya di Kalimantan Timur.
                        Setiap pabrik atau perusahaan bisa memiliki aturan
                        sedikit berbeda. Aplikasi ini bersifat edukatif dan
                        sebagai alat bantu simulasi.
                    </Alert>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* Apa Itu Grading Kelapa Sawit */}
                <Box component="section" sx={{ mb: 4 }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        📊 Apa Itu Grading Kelapa Sawit?
                    </Typography>
                    <Typography paragraph>
                        <strong>Grading</strong> adalah proses penilaian
                        kualitas TBS berdasarkan tingkat kematangan buah,
                        kondisi fisik, dan kebersihan. Kualitas TBS sangat
                        menentukan rendemen minyak yang dihasilkan pabrik,
                        sehingga pabrik memberikan <strong>potongan</strong>{' '}
                        (pengurangan harga) untuk TBS berkualitas rendah dan{' '}
                        <strong>insentif</strong> (bonus) untuk TBS berkualitas
                        tinggi.
                    </Typography>

                    <Typography
                        variant="h5"
                        component="h3"
                        gutterBottom
                        sx={{ mt: 3 }}>
                        Kategori Grading TBS
                    </Typography>

                    <TableContainer
                        component={Paper}
                        variant="outlined"
                        sx={{ mt: 2 }}>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        <strong>Kode</strong>
                                    </TableCell>
                                    <TableCell>
                                        <strong>Kategori</strong>
                                    </TableCell>
                                    <TableCell>
                                        <strong>Penjelasan</strong>
                                    </TableCell>
                                    <TableCell>
                                        <strong>Dampak</strong>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <strong>BM</strong>
                                    </TableCell>
                                    <TableCell>Buah Mentah</TableCell>
                                    <TableCell>
                                        Buah yang belum matang, warna kehijauan,
                                        rendemen minyak sangat rendah
                                    </TableCell>
                                    <TableCell>
                                        <Typography
                                            color="error"
                                            variant="body2">
                                            Potongan 50%
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <strong>BLM</strong>
                                    </TableCell>
                                    <TableCell>Buah Lewat Matang</TableCell>
                                    <TableCell>
                                        Buah yang terlalu matang/overripe, FFA
                                        (asam lemak bebas) tinggi
                                    </TableCell>
                                    <TableCell>
                                        <Typography
                                            color="error"
                                            variant="body2">
                                            Potongan 25% (jika &gt;5%)
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow sx={{ bgcolor: 'success.light' }}>
                                    <TableCell>
                                        <strong>BMTG</strong>
                                    </TableCell>
                                    <TableCell>Buah Matang</TableCell>
                                    <TableCell>
                                        Buah matang optimal, warna merah/oranye,
                                        rendemen minyak maksimal
                                    </TableCell>
                                    <TableCell>
                                        <Typography
                                            color="success.dark"
                                            variant="body2">
                                            <strong>
                                                IDEAL - Tidak ada potongan
                                            </strong>
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <strong>BGP</strong>
                                    </TableCell>
                                    <TableCell>Buah Ganggang Panjang</TableCell>
                                    <TableCell>
                                        Buah dengan tangkai/gagang yang masih
                                        panjang, menambah berat tanpa nilai
                                    </TableCell>
                                    <TableCell>
                                        <Typography
                                            color="error"
                                            variant="body2">
                                            Potongan 1%
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <strong>BR</strong>
                                    </TableCell>
                                    <TableCell>
                                        Buah Menginap &gt;48 jam
                                    </TableCell>
                                    <TableCell>
                                        Buah matang yang tidak segera dikirim ke
                                        pabrik (&gt;2 hari), FFA meningkat
                                    </TableCell>
                                    <TableCell>
                                        <Typography
                                            color="error"
                                            variant="body2">
                                            Potongan 50% (jika &gt;5%)
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow sx={{ bgcolor: 'success.light' }}>
                                    <TableCell>
                                        <strong>PBB</strong>
                                    </TableCell>
                                    <TableCell>Berondolan Bersih</TableCell>
                                    <TableCell>
                                        Buah lepas/brondolan yang bersih tanpa
                                        kotoran, mudah diproses
                                    </TableCell>
                                    <TableCell>
                                        <Typography
                                            color="success.dark"
                                            variant="body2">
                                            <strong>
                                                Insentif 8% (jika &gt;10%)
                                            </strong>
                                        </Typography>
                                        <br />
                                        <Typography
                                            color="error"
                                            variant="body2">
                                            Potongan 30% (jika &lt;10%)
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <strong>BK</strong>
                                    </TableCell>
                                    <TableCell>Berondolan Kotor</TableCell>
                                    <TableCell>
                                        Buah lepas yang kotor, tercampur tanah,
                                        pasir, atau sampah
                                    </TableCell>
                                    <TableCell>
                                        <Typography
                                            color="error"
                                            variant="body2">
                                            Potongan 100% (reject)
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Alert severity="warning" sx={{ mt: 2 }}>
                        <strong>Tips Petani:</strong> Untuk mendapatkan harga
                        terbaik, pastikan TBS yang dipanen adalah Buah Matang
                        (BMTG), segera kirim ke pabrik dalam waktu &lt;48 jam,
                        dan kumpulkan Berondolan Bersih (PBB) minimal 10% dari
                        total berat untuk mendapat insentif!
                    </Alert>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* Cara Hitung Manual */}
                <Box component="section" sx={{ mb: 4 }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        🧮 Cara Menghitung Grading Secara Manual
                    </Typography>
                    <Typography paragraph>
                        Berikut adalah langkah-langkah menghitung grading TBS
                        secara manual dengan rumus matematika. Mari kita gunakan
                        contoh nyata:
                    </Typography>

                    <Paper
                        variant="outlined"
                        sx={{ p: 2, mb: 3, bgcolor: 'grey.50' }}>
                        <Typography variant="h6" gutterBottom>
                            <strong>Contoh Kasus:</strong>
                        </Typography>
                        <Typography component="div">
                            <ul>
                                <li>
                                    <strong>Total Berat TBS:</strong> 1000 kg
                                </li>
                                <li>
                                    <strong>Harga per kg:</strong> Rp. 2.000
                                </li>
                                <li>
                                    <strong>Komposisi:</strong>
                                    <ul>
                                        <li>Buah Mentah (BM): 5 janjang</li>
                                        <li>
                                            Buah Lewat Matang (BLM): 10 janjang
                                        </li>
                                        <li>Buah Matang (BMTG): 80 janjang</li>
                                        <li>
                                            Buah Ganggang Panjang (BGP): 3
                                            janjang
                                        </li>
                                        <li>Buah Menginap (BR): 2 janjang</li>
                                        <li>Berondolan Bersih (PBB): 120 kg</li>
                                        <li>Berondolan Kotor (BK): 0 kg</li>
                                    </ul>
                                </li>
                            </ul>
                        </Typography>
                    </Paper>

                    <Typography variant="h5" component="h3" gutterBottom>
                        Langkah 1: Hitung Berat Per Kategori
                    </Typography>
                    <Typography paragraph>
                        Untuk kategori dalam satuan <strong>janjang</strong>,
                        kita hitung berat per tangga/ladder terlebih dahulu:
                    </Typography>
                    <Paper
                        variant="outlined"
                        sx={{ p: 2, mb: 2, bgcolor: 'grey.50' }}>
                        <Typography component="div" fontFamily="monospace">
                            <strong>Total Janjang</strong> = 5 + 10 + 80 + 3 + 2
                            = 100 janjang
                            <br />
                            <strong>Berat Per Janjang</strong> = 1000 kg ÷ 100
                            janjang = <strong>10 kg/janjang</strong>
                            <br />
                            <br />
                            <strong>Berat BM</strong> = 5 janjang × 10 kg = 50
                            kg
                            <br />
                            <strong>Berat BLM</strong> = 10 janjang × 10 kg =
                            100 kg
                            <br />
                            <strong>Berat BMTG</strong> = 80 janjang × 10 kg =
                            800 kg
                            <br />
                            <strong>Berat BGP</strong> = 3 janjang × 10 kg = 30
                            kg
                            <br />
                            <strong>Berat BR</strong> = 2 janjang × 10 kg = 20
                            kg
                            <br />
                            <strong>Berat PBB</strong> = 120 kg (sudah dalam kg)
                            <br />
                            <strong>Berat BK</strong> = 0 kg
                        </Typography>
                    </Paper>

                    <Typography variant="h5" component="h3" gutterBottom>
                        Langkah 2: Hitung Persentase Setiap Kategori
                    </Typography>
                    <Paper
                        variant="outlined"
                        sx={{ p: 2, mb: 2, bgcolor: 'grey.50' }}>
                        <Typography component="div" fontFamily="monospace">
                            <strong>% BM</strong> = (50 kg ÷ 1000 kg) × 100% ={' '}
                            <strong>5%</strong>
                            <br />
                            <strong>% BLM</strong> = (100 kg ÷ 1000 kg) × 100% ={' '}
                            <strong>10%</strong>
                            <br />
                            <strong>% BMTG</strong> = (800 kg ÷ 1000 kg) × 100%
                            = <strong>80%</strong>
                            <br />
                            <strong>% BGP</strong> = (30 kg ÷ 1000 kg) × 100% ={' '}
                            <strong>3%</strong>
                            <br />
                            <strong>% BR</strong> = (20 kg ÷ 1000 kg) × 100% ={' '}
                            <strong>2%</strong>
                            <br />
                            <strong>% PBB</strong> = (120 kg ÷ 1000 kg) × 100% ={' '}
                            <strong>12%</strong>
                            <br />
                            <strong>% BK</strong> = (0 kg ÷ 1000 kg) × 100% ={' '}
                            <strong>0%</strong>
                        </Typography>
                    </Paper>

                    <Typography variant="h5" component="h3" gutterBottom>
                        Langkah 3: Terapkan Aturan Potongan/Insentif
                    </Typography>
                    <Typography paragraph>
                        Setiap kategori memiliki aturan ambang batas (threshold)
                        dan operand (pengali):
                    </Typography>

                    <Stack spacing={2} sx={{ mb: 2 }}>
                        <Paper
                            variant="outlined"
                            sx={{ p: 2, bgcolor: 'grey.50' }}>
                            <Typography variant="subtitle2" gutterBottom>
                                <strong>BM (Buah Mentah):</strong> Potongan 50%
                                untuk semua BM &gt;0%
                            </Typography>
                            <Typography
                                component="div"
                                fontFamily="monospace"
                                sx={{ ml: 2 }}>
                                Kelebihan = 5% - 0% = 5%
                                <br />
                                Potongan BM = 0.5 × 0.05 × 1000 kg × Rp. 2.000 ={' '}
                                <strong style={{ color: '#d32f2f' }}>
                                    Rp. 50.000
                                </strong>
                            </Typography>
                        </Paper>

                        <Paper
                            variant="outlined"
                            sx={{ p: 2, bgcolor: 'grey.50' }}>
                            <Typography variant="subtitle2" gutterBottom>
                                <strong>BLM (Buah Lewat Matang):</strong>{' '}
                                Potongan 25% untuk BLM &gt;5%
                            </Typography>
                            <Typography
                                component="div"
                                fontFamily="monospace"
                                sx={{ ml: 2 }}>
                                Kelebihan = 10% - 5% = 5%
                                <br />
                                Potongan BLM = 0.25 × 0.05 × 1000 kg × Rp. 2.000
                                ={' '}
                                <strong style={{ color: '#d32f2f' }}>
                                    Rp. 25.000
                                </strong>
                            </Typography>
                        </Paper>

                        <Paper
                            variant="outlined"
                            sx={{ p: 2, bgcolor: 'grey.50' }}>
                            <Typography variant="subtitle2" gutterBottom>
                                <strong>BMTG (Buah Matang):</strong> Tidak ada
                                potongan (ideal)
                            </Typography>
                            <Typography
                                component="div"
                                fontFamily="monospace"
                                sx={{ ml: 2 }}>
                                Potongan BMTG = <strong>Rp. 0</strong>
                            </Typography>
                        </Paper>

                        <Paper
                            variant="outlined"
                            sx={{ p: 2, bgcolor: 'grey.50' }}>
                            <Typography variant="subtitle2" gutterBottom>
                                <strong>BGP (Buah Ganggang Panjang):</strong>{' '}
                                Potongan 1% untuk BGP &gt;0%
                            </Typography>
                            <Typography
                                component="div"
                                fontFamily="monospace"
                                sx={{ ml: 2 }}>
                                Kelebihan = 3% - 0% = 3%
                                <br />
                                Potongan BGP = 0.01 × 0.03 × 1000 kg × Rp. 2.000
                                ={' '}
                                <strong style={{ color: '#d32f2f' }}>
                                    Rp. 600
                                </strong>
                            </Typography>
                        </Paper>

                        <Paper
                            variant="outlined"
                            sx={{ p: 2, bgcolor: 'grey.50' }}>
                            <Typography variant="subtitle2" gutterBottom>
                                <strong>BR (Buah Menginap):</strong> Potongan
                                50% untuk BR &gt;5%
                            </Typography>
                            <Typography
                                component="div"
                                fontFamily="monospace"
                                sx={{ ml: 2 }}>
                                Kelebihan = 2% - 5% = -3% (masih di bawah batas)
                                <br />
                                Potongan BR = <strong>Rp. 0</strong> (tidak ada
                                potongan)
                            </Typography>
                        </Paper>

                        <Paper
                            variant="outlined"
                            sx={{ p: 2, bgcolor: 'grey.50' }}>
                            <Typography variant="subtitle2" gutterBottom>
                                <strong>PBB (Berondolan Bersih):</strong>{' '}
                                Insentif 8% untuk PBB &gt;10%
                            </Typography>
                            <Typography
                                component="div"
                                fontFamily="monospace"
                                sx={{ ml: 2 }}>
                                Kelebihan = 12% - 10% = 2%
                                <br />
                                Insentif PBB = 0.08 × 0.02 × 1000 kg × Rp. 2.000
                                ={' '}
                                <strong style={{ color: '#2e7d32' }}>
                                    + Rp. 3.200
                                </strong>
                            </Typography>
                        </Paper>

                        <Paper
                            variant="outlined"
                            sx={{ p: 2, bgcolor: 'grey.50' }}>
                            <Typography variant="subtitle2" gutterBottom>
                                <strong>BK (Berondolan Kotor):</strong> Potongan
                                100% (reject total)
                            </Typography>
                            <Typography
                                component="div"
                                fontFamily="monospace"
                                sx={{ ml: 2 }}>
                                Potongan BK = 1.0 × 0% × 1000 kg × Rp. 2.000 ={' '}
                                <strong>Rp. 0</strong>
                            </Typography>
                        </Paper>
                    </Stack>

                    <Typography
                        variant="h5"
                        component="h3"
                        gutterBottom
                        sx={{ mt: 3 }}>
                        Langkah 4: Hitung Total Akhir
                    </Typography>
                    <Paper
                        variant="outlined"
                        sx={{ p: 3, mb: 2, bgcolor: 'primary.light' }}>
                        <Typography component="div" fontFamily="monospace">
                            <strong>Nilai Dasar</strong> = 1000 kg × Rp. 2.000 ={' '}
                            <strong>Rp. 2.000.000</strong>
                            <br />
                            <br />
                            <strong>Total Potongan</strong> = Rp. 50.000 + Rp.
                            25.000 + Rp. 600 ={' '}
                            <strong style={{ color: '#d32f2f' }}>
                                Rp. 75.600
                            </strong>
                            <br />
                            <strong>Total Insentif</strong> ={' '}
                            <strong style={{ color: '#2e7d32' }}>
                                Rp. 3.200
                            </strong>
                            <br />
                            <br />
                            <Typography variant="h6" component="div">
                                <strong>NILAI AKHIR</strong> = Rp. 2.000.000 -
                                Rp. 75.600 + Rp. 3.200
                                <br />
                                <strong>= Rp. 1.927.600</strong>
                            </Typography>
                        </Typography>
                    </Paper>

                    <Alert severity="success" sx={{ mt: 2 }}>
                        <strong>Kesimpulan:</strong> Dari TBS seberat 1000 kg
                        dengan harga dasar Rp. 2.000.000, setelah dikurangi
                        potongan kualitas dan ditambah insentif, petani menerima{' '}
                        <strong>Rp. 1.927.600</strong> atau sekitar{' '}
                        <strong>96,4%</strong> dari harga dasar.
                    </Alert>

                    <Typography
                        variant="h6"
                        component="h3"
                        gutterBottom
                        sx={{ mt: 3 }}>
                        Rumus Umum
                    </Typography>
                    <Paper variant="outlined" sx={{ p: 2, bgcolor: 'grey.50' }}>
                        <Typography component="div" fontFamily="monospace">
                            <strong>Potongan/Insentif</strong> = Operand ×
                            Selisih% × Total Berat × Harga per kg
                            <br />
                            <br />
                            Di mana:
                            <br />• <strong>Operand</strong> = Pengali (0.01,
                            0.25, 0.5, 0.08, dst)
                            <br />• <strong>Selisih%</strong> = |Persentase
                            Kategori - Threshold%|
                            <br />• <strong>Total Berat</strong> = Berat
                            keseluruhan TBS
                            <br />• <strong>Harga per kg</strong> = Harga TBS
                            per kilogram
                        </Typography>
                    </Paper>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* Cara Menggunakan Aplikasi */}
                <Box component="section" sx={{ mb: 4 }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        📱 Cara Menggunakan Aplikasi
                    </Typography>

                    <Typography variant="h6" component="h3" gutterBottom>
                        Langkah-langkah:
                    </Typography>
                    <Typography component="div">
                        <ol>
                            <li>
                                <strong>
                                    Langkah 1 - Kategori Kematangan:
                                </strong>{' '}
                                Masukkan jumlah janjang untuk Buah Mentah (BM),
                                Buah Lewat Matang (BLM), dan Buah Matang (BMTG).
                            </li>
                            <li>
                                <strong>
                                    Langkah 2 - Kategori Kualitas & Berat Total:
                                </strong>{' '}
                                Masukkan jumlah untuk kategori BGP, BR (dalam
                                janjang), PBB dan BK (dalam kg), serta total
                                berat keseluruhan TBS dalam kg.
                            </li>
                            <li>
                                <strong>Langkah 3 - Harga & Hasil:</strong>{' '}
                                Masukkan harga per kg TBS, lalu aplikasi akan
                                otomatis menghitung dan menampilkan:
                                <ul>
                                    <li>Nilai dasar</li>
                                    <li>Total potongan</li>
                                    <li>Total insentif</li>
                                    <li>Nilai akhir yang diterima</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Lihat Detail:</strong> Klik tombol
                                &quot;Lihat Detail&quot; untuk melihat breakdown
                                perhitungan per kategori.
                            </li>
                            <li>
                                <strong>Simpan Perhitungan:</strong> Klik icon
                                disket untuk menyimpan hasil perhitungan Anda.
                                Data tersimpan di perangkat Anda dan dapat
                                diakses kembali.
                            </li>
                        </ol>
                    </Typography>

                    <Alert severity="info" sx={{ mt: 2 }}>
                        <strong>Tips:</strong> Aplikasi ini bisa diinstall
                        sebagai PWA (Progressive Web App) di smartphone Anda
                        untuk akses cepat dan penggunaan offline. Klik menu
                        browser lalu pilih &quot;Tambahkan ke Beranda&quot; atau
                        &quot;Install App&quot;.
                    </Alert>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* FAQ */}
                <Box component="section" sx={{ mb: 4 }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        ❓ Pertanyaan yang Sering Diajukan (FAQ)
                    </Typography>

                    <Stack spacing={1} sx={{ mt: 2 }}>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>
                                    <strong>
                                        Apakah perhitungan aplikasi ini akurat
                                        100%?
                                    </strong>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Aplikasi menggunakan presisi 16 desimal
                                    dalam perhitungan, sehingga mungkin ada
                                    sedikit perbedaan dengan perhitungan manual
                                    (biasanya hanya beberapa rupiah). Rumus yang
                                    digunakan adalah rumus umum di industri
                                    kelapa sawit, namun setiap pabrik bisa
                                    memiliki kebijakan sedikit berbeda.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>
                                    <strong>
                                        Apakah data saya aman? Apakah dikirim ke
                                        server?
                                    </strong>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Semua data perhitungan Anda tersimpan di
                                    perangkat Anda sendiri (localStorage
                                    browser). Tidak ada data sensitif yang
                                    dikirim ke server kami. Kami hanya
                                    mengumpulkan data analitik anonim untuk
                                    meningkatkan aplikasi (via Google Analytics
                                    for Firebase).
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>
                                    <strong>
                                        Kenapa ada perbedaan hasil dengan
                                        perhitungan pabrik?
                                    </strong>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Setiap pabrik atau perusahaan bisa memiliki
                                    aturan grading yang berbeda-beda, termasuk
                                    threshold, operand, dan kategori tambahan.
                                    Aplikasi ini menggunakan standar umum yang
                                    banyak dipakai di Kalimantan Timur. Gunakan
                                    sebagai referensi dan simulasi, bukan
                                    sebagai perhitungan final yang mengikat
                                    secara hukum.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>
                                    <strong>
                                        Apa itu &quot;Berat Per Tangga&quot; dan
                                        bagaimana cara menghitungnya?
                                    </strong>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    &quot;Berat Per Tangga&quot; atau
                                    &quot;Berat Per Janjang&quot; adalah berat
                                    rata-rata satu janjang TBS. Dihitung dengan
                                    membagi total berat TBS dengan jumlah total
                                    janjang. Misalnya: 1000 kg TBS ÷ 100 janjang
                                    = 10 kg/janjang. Angka ini digunakan untuk
                                    mengonversi kategori yang diinput dalam
                                    satuan janjang menjadi kg.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>
                                    <strong>
                                        Bagaimana cara mendapatkan insentif dari
                                        Berondolan Bersih (PBB)?
                                    </strong>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Untuk mendapatkan insentif 8%, Berondolan
                                    Bersih (PBB) Anda harus lebih dari 10% dari
                                    total berat TBS. Contoh: jika total TBS 1000
                                    kg, maka PBB minimal 100 kg. Jika PBB kurang
                                    dari 10%, Anda justru akan mendapat potongan
                                    30%. Jadi kumpulkan brondolan dengan bersih
                                    dan pastikan mencapai minimal 10%!
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>
                                    <strong>
                                        Apakah aplikasi bisa digunakan offline?
                                    </strong>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Ya! Aplikasi ini adalah Progressive Web App
                                    (PWA) yang bisa diinstall di smartphone dan
                                    digunakan tanpa koneksi internet. Setelah
                                    pertama kali membuka aplikasi, semua aset
                                    akan tersimpan di cache dan Anda bisa
                                    menggunakannya kapan saja.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>
                                    <strong>
                                        Bisakah saya request fitur baru atau
                                        laporkan bug?
                                    </strong>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Tentu! Kami sangat menghargai feedback Anda.
                                    Gunakan tombol &quot;Saran Perbaikan&quot;
                                    (ikon vote) di halaman utama, atau kirim
                                    email ke sensasi.apps@gmail.com. Anda juga
                                    bisa membuka issue di GitHub repository
                                    kami.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Stack>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* Kontak */}
                <Box component="section" sx={{ mb: 2 }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        📞 Kontak & Dukungan
                    </Typography>

                    <Typography paragraph>
                        Aplikasi ini dikembangkan oleh{' '}
                        <strong>Sensasi Apps</strong>, sebuah inisiatif
                        open-source untuk membuat aplikasi yang bermanfaat bagi
                        masyarakat.
                    </Typography>

                    <Stack spacing={2} sx={{ mt: 3 }}>
                        <Paper variant="outlined" sx={{ p: 2 }}>
                            <Stack
                                direction="row"
                                spacing={2}
                                alignItems="center">
                                <EmailIcon color="primary" />
                                <Box>
                                    <Typography
                                        variant="subtitle2"
                                        color="text.secondary">
                                        Email
                                    </Typography>
                                    <MuiLink href="mailto:sensasi.apps@gmail.com">
                                        sensasi.apps@gmail.com
                                    </MuiLink>
                                </Box>
                            </Stack>
                        </Paper>

                        <Paper variant="outlined" sx={{ p: 2 }}>
                            <Stack
                                direction="row"
                                spacing={2}
                                alignItems="center">
                                <GitHubIcon color="primary" />
                                <Box>
                                    <Typography
                                        variant="subtitle2"
                                        color="text.secondary">
                                        GitHub Organization
                                    </Typography>
                                    <MuiLink
                                        href="https://github.com/sensasi-apps"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        github.com/sensasi-apps
                                    </MuiLink>
                                </Box>
                            </Stack>
                        </Paper>

                        <Paper variant="outlined" sx={{ p: 2 }}>
                            <Stack
                                direction="row"
                                spacing={2}
                                alignItems="center">
                                <FeedbackIcon color="primary" />
                                <Box>
                                    <Typography
                                        variant="subtitle2"
                                        color="text.secondary">
                                        Feedback & Bug Report
                                    </Typography>
                                    <Typography variant="body2">
                                        Gunakan tombol &quot;Saran
                                        Perbaikan&quot; di halaman utama atau
                                        kirim email
                                    </Typography>
                                </Box>
                            </Stack>
                        </Paper>
                    </Stack>

                    <Alert severity="info" sx={{ mt: 3 }}>
                        <strong>Open Source:</strong> Aplikasi ini adalah proyek
                        open-source dan gratis. Jika Anda developer dan ingin
                        berkontribusi, silakan kunjungi repository kami di
                        GitHub. Donasi sukarela sangat dihargai untuk mendukung
                        pengembangan lebih lanjut.
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
                        © 2025 Sensasi Apps. Aplikasi ini bersifat edukatif dan
                        tidak berafiliasi dengan perusahaan atau pabrik kelapa
                        sawit manapun.
                    </Typography>
                </Box>
            </Paper>
        </Container>
    )
}
