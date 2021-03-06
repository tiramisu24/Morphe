const drawEyeshadow = (pos1, pos2, canvas, yOffset, xOffset,color1,color2) => {
  // console.log('yOffset', yOffset);
  if(color1 === 'default'){
    color1 = '#8ED6FF';
  }
  if(color2 === 'default'){
    color2 = '#004CB3';
  }
  drawEyedow(pos1,canvas, yOffset/2, xOffset *2,color1,color2);
  drawEyedow(pos2,canvas, yOffset/2, -xOffset *2,color1,color2);
};
const drawEyedow = (pos, canvas, yOffset,xOffset,color1,color2) => {
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
  y6 = y5 - yOffset*5;
  y7 = y4 - yOffset*4;
  y8 = y3 - yOffset*3;
  y9 = y2 - yOffset*2;
  y10 = y1 - yOffset;

  let bx = (eyebrowx-x5)/3 + x5;
  let by = (eyebrowy-y4)/4 + y5;
  const ctx = canvas.getContext('2d');
  // ctx.shadowColor = "rgb(114, 66, 2)";
  // ctx.shadowOffsetX = 0;
  // ctx.shadowOffsetY = 0;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.lineTo(x4, y4);
  ctx.lineTo(x5, y5);
  ctx.lineTo(x5 + xOffset, by);

  ctx.lineTo(bx, y6);
  ctx.lineTo(x4, y7);
  ctx.lineTo(x3, y8);
  ctx.lineTo(x2, y9);
  ctx.lineTo(x1, y10);

  ctx.closePath();
  // console.log(yOffset);
  const grd = ctx.createLinearGradient(x1, y1, bx, y6);
    // light blue
    grd.addColorStop(0, color1);
    // dark blue
    grd.addColorStop(1, color2);
    ctx.fillStyle = grd;

    ctx.filter = `blur(${Math.floor(yOffset*2)}px)`;

  ctx.fill();

};
