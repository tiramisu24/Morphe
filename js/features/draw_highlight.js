const drawHighlight = (pos, canvas) => {
  const ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.moveTo(pos[0][0], pos[0][1]);
  ctx.moveTo(pos[1][0], pos[1][1]);
  ctx.moveTo(pos[2][0], pos[2][1]);

  ctx.closePath();
  ctx.lineWidth=10;
  ctx.strokeStyle="white";
  let x1,y1,x2,y2;
  x1 = pos[3][0];
  x2 = pos[4][0];
  y1 = pos[3][1];
  y2 = pos[4][1];
  const browDistance = Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2))/15;
  console.log(browDistance);
  // ctx.filter = `blur(${browDistance}px)`;
  // ctx.filter = `blur(${2}px)`;
  console.log(ctx);
  ctx.stroke();
};
