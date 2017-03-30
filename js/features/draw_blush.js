const drawBlush = (pos, canvas, yOffset) => {
  drawRightBlush(pos,canvas, yOffset);
  drawLeftBlush(pos,canvas, yOffset);
};
const drawRightBlush = (pos, canvas, yOffset) => {
  const x1 = (pos[39][0]*3 + pos[13][0])/4;
  const y1 = (pos[39][1]*3 + pos[13][1])/4;
  const x2 = (pos[39][0] + pos[13][0]*2)/3;
  const y2 = (pos[39][1] + pos[13][1]*3)/4;

  const ctx = canvas.getContext('2d');

  ctx.beginPath();
  ctx.moveTo(x1,y1);
  ctx.quadraticCurveTo(pos[28][0]+4*yOffset, pos[28][1], x2, y2);
  ctx.bezierCurveTo(pos[10][0], pos[12][1]-2*yOffset, pos[9][0], pos[11][1]-2*yOffset,x1, y1);
  ctx.closePath();
  ctx.fillStyle = "rgba(244,66,66,.3)";
  ctx.filter=`blur(${2*yOffset}px)`;
  ctx.fill();
};
const drawLeftBlush = (pos, canvas, yOffset) => {
  const x1 = (pos[35][0]*3 + pos[1][0])/4;
  const y1 = (pos[35][1]*3 + pos[1][1])/4;
  const x2 = (pos[35][0] + pos[1][0]*2)/3;
  const y2 = (pos[35][1] + pos[1][1]*3)/4;

  const ctx = canvas.getContext('2d');

  ctx.beginPath();
  ctx.moveTo(x1,y1);
  ctx.quadraticCurveTo(pos[23][0]+4*yOffset, pos[23][1], x2, y2);
  ctx.bezierCurveTo(pos[4][0], pos[2][1]-2*yOffset, pos[5][0], pos[3][1]-2*yOffset,x1, y1);
  ctx.closePath();
  ctx.fillStyle = "rgba(244,66,66,.3)";
  ctx.filter=`blur(${2*yOffset}px)`;

  ctx.fill();
};
