const drawEyeliner = (pos1, pos2, canvas, yOffset, xOffset,color) => {
  if(color === 'default'){
    color = "#000";
  }

  drawEye(pos1,canvas, yOffset/2,color);
  drawEye(pos2,canvas, yOffset/2,color);
};
const drawEye = (pos, canvas, yOffset,color) => {
  const x1 = pos[2][0];
  const y1 = pos[2][1];
  const x2 = pos[5][0];
  const y2 = pos[5][1];
  const x3 = pos[1][0];
  const y3 = pos[1][1];
  const x4 = pos[4][0];
  const y4 = pos[4][1];
  const x5 = pos[0][0];
  const y5 = pos[0][1];
  const eyebrowx = pos[8][0];
  const eyebrowy = pos[8][1];


  let y6,y7,y8,y9,y10;
  y6 = y5 - yOffset;
  y7 = y4 - yOffset;
  y8 = y3 - yOffset;
  y9 = y2 - yOffset;
  y10 = y1 - yOffset;

  let bx = (eyebrowx-x5)/3 + x5;
  let by = (eyebrowy-y4)/4 + y5;
  const ctx = canvas.getContext('2d');

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.lineTo(x4, y4);
  ctx.lineTo(x5, y5);
  ctx.lineTo(bx, by);
  ctx.lineTo(x4, y7);
  ctx.lineTo(x3, y8);
  ctx.lineTo(x2, y9);
  ctx.lineTo(x1, y10);

  ctx.closePath();
  ctx.fillStyle=color;
  ctx.filter = 'blur(5px)';

  ctx.fill();

};
