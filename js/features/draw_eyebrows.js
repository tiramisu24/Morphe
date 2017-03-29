const drawEyebrows = (pos1, pos2, canvas) => {
  drawBrow(pos1, canvas ,14, 6);
  drawBrow(pos2, canvas , 14, -16);
};
const drawBrow = (pos,canvas, yOffset, xOffset) => {
  const ctx = canvas.getContext('2d');

  const x1 = pos[0][0];
  const y1 = pos[0][1];
  const x2 = pos[1][0];
  const y2 = pos[1][1];
  const x3 = pos[2][0];
  const y3 = pos[2][1];
  const x4 = pos[3][0];
  const y4 = pos[3][1];


  const length = Math.sqrt(Math.pow((x3-x2),2) + Math.pow((y3-y2),2));
  const x = x2 + (length/4);
  const y = y2 - (Math.sqrt(3)/2 * length/4);
  // Cubic curves example

  ctx.beginPath();
 //4
  ctx.moveTo(x4, y4); //4
  ctx.lineTo( x4 + xOffset, y4-yOffset); //3
  ctx.lineTo( x3, y3-yOffset); //3
  ctx.quadraticCurveTo(x,y, x2, y2-yOffset); //2
  ctx.lineTo(x1, y1 ); //1
  ctx.lineTo( (x3+x2*2)/3, (y3+y2)/2);
  ctx.lineTo( (x3*2+x2)/3, (y3+y2)/2);
  ctx.lineTo( x2, y2-yOffset); //2
  ctx.lineTo( x4-xOffset, y4+yOffset);
    ctx.closePath();

  ctx.fill();
};