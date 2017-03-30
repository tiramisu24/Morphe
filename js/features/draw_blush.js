const drawBlush = (pos1, pos2, canvas) => {
  drawEachBlush(pos1,canvas);
  drawEachBlush(pos2,canvas);
};
const drawEachBlush = (pos, canvas) => {
  const x1 = pos[0][0];
  const y1 = pos[0][1];
  const x2 = pos[1][0];
  const y2 = pos[1][1];
  const midx = (x1 + x2)/2;
  const midy = (y1 + y2)/2;
  const radius = Math.sqrt(Math.pow((midx-x1),2) + Math.pow((midy-y1),2))/2;

  const ctx = canvas.getContext('2d');

  ctx.beginPath();
  
  ctx.fillStyle = 'red';
  ctx.filter="blur(20px)";
  ctx.fill();
};
