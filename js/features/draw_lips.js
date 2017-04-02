const drawLips = (pos,canvas,color) => {
  if(color === 'default'){
    // color = "rgba(244,66,66,.3)";
    color = "rgba(0,0,0,0)";
  }
  const ctx = canvas.getContext('2d');
  // drawLines(ctx, pos);
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
  ctx.fillStyle = color;


  ctx.fill();
};
