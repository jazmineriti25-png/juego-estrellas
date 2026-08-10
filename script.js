const canvas = document.getElementById('juego');
const ctx = canvas.getContext('2d');

let x = 200;   // posición inicial X
let y = 200;   // posición inicial Y
const radio = 15;

// Generar estrellas aleatorias
let estrellas = [];
for (let i = 0; i < 5; i++) {
  estrellas.push({
    x: Math.random() * (canvas.width - 20) + 10,
    y: Math.random() * (canvas.height - 20) + 10,
    radio: 10
  });
}

function dibujar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Dibujar jugador
  ctx.fillStyle = 'yellow';
  ctx.beginPath();
  ctx.arc(x, y, radio, 0, Math.PI * 2);
  ctx.fill();

  // Dibujar estrellas
  ctx.fillStyle = 'white';
  estrellas.forEach((estrella) => {
    ctx.beginPath();
    ctx.arc(estrella.x, estrella.y, estrella.radio, 0, Math.PI * 2);
    ctx.fill();
  });

  // Detectar colisiones
  estrellas = estrellas.filter((estrella) => {
    const dx = x - estrella.x;
    const dy = y - estrella.y;
    const distancia = Math.sqrt(dx * dx + dy * dy);
    return distancia > radio + estrella.radio; // si se toca, se elimina
  });
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

