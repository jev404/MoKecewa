// Ambil elemen formulir
const orderForm = document.getElementById('orderForm');

// Tambahkan event listener untuk form submit
orderForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah reload halaman

    // Ambil data dari formulir
    const nama = document.getElementById('nama').value.trim();
    const email = document.getElementById('email').value.trim();
    const alamat = document.getElementById('alamat').value.trim();
    const produk = document.getElementById('produk').value;
    const metodePembayaran = document.getElementById('metode-pembayaran').value;

    // Validasi data sebelum melanjutkan
    if (!nama || !email || !alamat || !produk || !metodePembayaran) {
        alert('Harap isi semua data sebelum melanjutkan!');
        return;
    }

    // Simpan data ke localStorage
    const orderData = {
        nama,
        email,
        alamat,
        produk,
        metodePembayaran,
    };
    localStorage.setItem('orderData', JSON.stringify(orderData));

    // Redirect ke halaman detail pesanan
    window.location.href = 'detail-pesanan.html';
});
