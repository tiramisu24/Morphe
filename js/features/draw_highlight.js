const drawHighlight = (pos, canvas, xOffset) => {
  const ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.moveTo(pos[0][0], pos[0][1]);
  ctx.moveTo(pos[1][0], pos[1][1]);
  ctx.moveTo(pos[2][0], pos[2][1]);

  ctx.closePath();
  ctx.lineWidth=10;
  ctx.strokeStyle="black";
  ctx.fillStyle="#000";

  ctx.filter = `blur(${0}px)`;
  console.log(ctx);
  ctx.stroke();
};
