function addEraser() {
  const canvas=document.getElementById("canvas");
  const ctx=canvas.getContext("2d");
  let lastX;
  let lastY;
  let strokeWidth=5;
  let mouseX;
  let mouseY;
  let canvasOffset=$("#canvas").offset();
  let offsetX=canvasOffset.left;
  let offsetY=canvasOffset.top;
  let isMouseDown=false;


  function handleMouseDown(e){
    mouseX=parseInt(e.clientX-offsetX);
    mouseY=parseInt(e.clientY-offsetY);

    // Put your mousedown stuff here
    lastX=mouseX;
    lastY=mouseY;
    isMouseDown=true;
  }

  function handleMouseUp(e){
    mouseX=parseInt(e.clientX-offsetX);
    mouseY=parseInt(e.clientY-offsetY);

    // Put your mouseup stuff here
    isMouseDown=false;
  }

  function handleMouseOut(e){
    mouseX=parseInt(e.clientX-offsetX);
    mouseY=parseInt(e.clientY-offsetY);

    // Put your mouseOut stuff here
    isMouseDown=false;
  }

  function handleMouseMove(e){
    mouseX=parseInt(e.clientX-offsetX);
    mouseY=parseInt(e.clientY-offsetY);

    // Put your mousemove stuff here
    if(isMouseDown){
      ctx.beginPath();
      ctx.globalCompositeOperation="destination-out";
      ctx.arc(lastX,lastY,8,0,Math.PI*2,false);
      ctx.fill();
      lastX=mouseX;
      lastY=mouseY;
    }
  }

  $("#canvas").mousedown(function(e){handleMouseDown(e);});
  $("#canvas").mousemove(function(e){handleMouseMove(e);});
  $("#canvas").mouseup(function(e){handleMouseUp(e);});
  $("#canvas").mouseout(function(e){handleMouseOut(e);});


}
