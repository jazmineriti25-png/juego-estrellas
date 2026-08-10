const canvas = document.getElementById('juego');
const ctx = canvas.getContext('2d');

let x = 200;   // posición inicial X
let y = 200;   // posición inicial Y
const radio = 20;

function dibujar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'yellow';
  ctx.beginPath();
  ctx.arc(x, y, radio, 0, Math.PI * 2);
  ctx.fill();
}

// Detectar teclas
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp') y -= 10;
  if (e.key === 'ArrowDown') y += 10;
  if (e.key === 'ArrowLeft') x -= 10;
  if (e.key === 'ArrowRight') x += 10;
  dibujar();
});

// Dibujar la primera vez
dibujar();

