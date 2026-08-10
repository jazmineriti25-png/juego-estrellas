const canvas = document.getElementById('juego');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'yellow';
ctx.beginPath();
ctx.arc(200, 200, 50, 0, Math.PI * 2);
ctx.fill();
const canvas = document.getElementById('juego');
const ctx = canvas.getContext('2d');
let x = 200;
let y = 200;
const radio = 50;

function dibujar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'yellow';
  ctx.beginPath();
  ctx.arc(x, y, radio, 0, Math.PI * 2);
  ctx.fill();
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp') y -= 10;
  if (e.key === 'ArrowDown') y += 10;
  if (e.key === 'ArrowLeft') x -= 10;
  if (e.key === 'ArrowRight') x += 10;
  dibujar();
});

dibujar();
