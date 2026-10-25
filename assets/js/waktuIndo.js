const sekarang = new Date();

const hari = sekarang.toLocaleDateString('id-ID', {
  weekday: 'long'
});

const tanggal = sekarang.toLocaleDateString('id-ID', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
});

document.querySelector('#tanggal').textContent =
  `${hari}, ${tanggal}`;
