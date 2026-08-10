const canvas = document.getElementById('juego');
const ctx = canvas.getContext('2d');

let x = 50;   // posición inicial en X
let y = 200;  // posición inicial en Y
const radio = 20;
let dx = 2;   // velocidad en X
let dy = 1.5; // velocidad en Y

function dibujar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // dibujar estrella (círculo amarillo)
  ctx.fillStyle = 'yellow';
  ctx.beginPath();
  ctx.arc(x, y, radio, 0, Math.PI * 2);
  ctx.fill();

  // actualizar posición
  x += dx;
  y += dy;

  // rebotar en los bordes
  if (x + radio > canvas.width || x - radio < 0) dx = -dx;
  if (y + radio > canvas.height || y - radio < 0) dy = -dy;

  requestAnimationFrame(dibujar);
}

dibujar();
