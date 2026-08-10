const canvas = document.getElementById('juego');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'yellow';
ctx.beginPath();
ctx.arc(200, 200, 50, 0, Math.PI * 2);
ctx.fill();
