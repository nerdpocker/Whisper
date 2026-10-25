const date = new Date();
const hour = String(date.getHours()).padStart(2, '0');
const minutes = String(date.getMinutes()).padStart(2, '0');
const tgl = date.getDate();
const year = date.getFullYear();

hari.textContent = `${dayID()}, ${tgl} ${monthID()} ${year}`;
jam.textContent = `${hour}:${minutes}`;
