<?php
// Keamanan: hanya terima request POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['sukses' => false, 'pesan' => 'Method tidak diizinkan.']);
    exit;
}

// Fungsi bersihkan input
function bersihkan($data) {
    return htmlspecialchars(strip_tags(trim($data)));
}

// Ambil & bersihkan data dari form
$nama       = bersihkan($_POST['nama'] ?? '');
$perusahaan = bersihkan($_POST['perusahaan'] ?? '');
$email      = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$telepon    = bersihkan($_POST['telepon'] ?? '');
$topik      = bersihkan($_POST['topik'] ?? '');
$kapasitas  = bersihkan($_POST['kapasitas'] ?? '');
$pesan      = bersihkan($_POST['pesan'] ?? '');

// Validasi field wajib
if (empty($nama) || empty($email) || empty($pesan)) {
    http_response_code(400);
    echo json_encode(['sukses' => false, 'pesan' => 'Nama, email, dan pesan wajib diisi.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['sukses' => false, 'pesan' => 'Format email tidak valid.']);
    exit;
}

// Tujuan email
$tujuan  = 'obed@tsm.or.id';
$subjek  = '📩 Inquiry Website: ' . ($topik ?: 'Pertanyaan Umum') . ' — ' . $nama;

// Isi email
$isi  = "=========================================\n";
$isi .= "  INQUIRY BARU DARI WEBSITE PTTSM.CO.ID\n";
$isi .= "=========================================\n\n";
$isi .= "Nama Lengkap  : $nama\n";
$isi .= "Perusahaan    : " . ($perusahaan ?: '-') . "\n";
$isi .= "Email         : $email\n";
$isi .= "Telepon / WA  : " . ($telepon ?: '-') . "\n";
$isi .= "Topik         : " . ($topik ?: '-') . "\n";
$isi .= "Kapasitas     : " . ($kapasitas ?: '-') . "\n\n";
$isi .= "-----------------------------------------\n";
$isi .= "PESAN:\n";
$isi .= "$pesan\n\n";
$isi .= "-----------------------------------------\n";
$isi .= "Dikirim pada  : " . date('d M Y, H:i') . " WIB\n";
$isi .= "Dikirim dari  : pttsm.co.id/kontak.html\n";
$isi .= "=========================================\n";

// Header email
$headers  = "From: Website TSM <no-reply@pttsm.co.id>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Kirim email
$terkirim = mail($tujuan, $subjek, $isi, $headers);

if ($terkirim) {
    echo json_encode(['sukses' => true, 'pesan' => 'Pesan berhasil dikirim! Kami akan merespons dalam 1×24 jam hari kerja.']);
} else {
    http_response_code(500);
    echo json_encode(['sukses' => false, 'pesan' => 'Gagal mengirim pesan. Silakan hubungi kami via WhatsApp.']);
}
?>
