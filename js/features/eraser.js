
function endEraser(){
  const canvas=document.getElementById("canvas");
  const ctx=canvas.getContext("2d");
  ctx.globalCompositeOperation="source-over";
}
let finish = true

function addEraser() {
  finish = !finish
  console.log(finish);
  if(finish){
    endEraser()
  }
  const canvas=document.getElementById("canvas");
  const ctx=canvas.getContext("2d");
  let lastX;
  let lastY;
  let strokeWidth=5;
  let mouseX;
  let mouseY;
  let canvasOffset=$("#container").offset();
  let offsetX=canvasOffset.left;
  let offsetY=canvasOffset.top;
  let isMouseDown=false;
  function handleMouseDown(e){
    mouseX=parseInt(e.offsetX);
    mouseY=parseInt(e.offsetY);
    lastX=mouseX;
    lastY=mouseY;
    isMouseDown=true;
  }

  function handleMouseUp(e){
    mouseX=parseInt(e.offsetX);
    mouseY=parseInt(e.offsetY);
    isMouseDown=false;
  }

  function handleMouseOut(e){
    mouseX=parseInt(e.offsetX);
    mouseY=parseInt(e.offsetY);
    isMouseDown=false;
  }

  function handleMouseMove(e){
    mouseX=parseInt(e.offsetX);
    mouseY=parseInt(e.offsetY);
    if(isMouseDown){
      // console.log("in eraser");

      // ctx.globalCompositeOperation="source-over";
      // ctx.moveTo(lastX,lastY);
      // ctx.lineTo(mouseX,mouseY);
      // ctx.stroke();
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
