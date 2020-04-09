// Old module to be able to have custom background
import rough from 'roughjs';

function initCanvas() {
  const canvas = document.createElement('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.zIndex = -1;
  canvas.style.position = 'absolute';

  const rc = rough.canvas(canvas);
  rc.rectangle(0, 0, canvas.width, canvas.height, {
    stroke: 'transparent',
    fill: 'lightgrey',
    fillStyle: 'zigzag',
    hachureGap: 3,
    fillWeight: 2,
  });

  document.body.prepend(canvas);
}

window.addEventListener('load', () => {
  initCanvas();
});
