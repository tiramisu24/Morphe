const drawHighlight = (pos, canvas) => {
  const ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.moveTo(pos[0][0], pos[0][1]);

  let x,y;
  pos.map((point,idx) => {
    x = point[0];
    y = point[1];
    ctx.lineTo(x,y);
    if (idx===11){
      ctx.lineTo(pos[0][0], pos[0][1]);
    }
    if (idx===14){
      ctx.lineTo(pos[6][0], pos[6][1]);
    }
  });
  ctx.closePath();
  ctx.lineWidth=10;
  ctx.fillStyle="white";

  ctx.filter = 'blur(5px)';
  ctx.fill();
};
