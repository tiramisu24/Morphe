const drawEyelash = (pos,canvas) => {
  const ctx = canvas.getContext('2d');
  const leftLash = new Image();
  leftLash.src = '/Main/media/eye_lash.svg';
  leftLash.crossOrigin = 'anonymous';
  // console.log("eyelash");
  // console.log(leftLash);
  console.log(pos);
  leftLash.onload = function(){
    ctx.drawImage(leftLash, pos[0][0], pos[0][1]);
  };




 //  img.onload = function() {
 //   canvas.height = img.height;
 //   canvas.width = img.width;
 //
 //   $(oImage).replaceWith(canvas);
 //
 //   context.drawImage(oImage, 0, 0);
 // }
  // console.log(ctx);
};
