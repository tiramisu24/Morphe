const baseCtx = document.getElementById('image').getContext('2d');

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const img = new Image();

img.onload = function() {
  baseCtx.drawImage(img,0,0,450,500);
};
img.src = './media/no_makeup.jpg';

let animate, ImageEventListeners, drawLoop, selectBox, ctrack

const regExp = /\(([^)]+)\)/;
const makeup = {};
let pos, yOffset, xOffset, eyelinerPosL, eyelinerPosR,box;
$clr1 = $('#color1');
$clr2 = $('#color2');

function setPos(){
  yOffset = Math.floor(Math.sqrt(Math.pow((pos[0][0]-pos[1][0]),2) + Math.pow((pos[0][1] - pos[1][1]),2))/10);
  xOffset = Math.floor(Math.sqrt(Math.pow((pos[6][0]-pos[8][0]),2) + Math.pow((pos[6][1] - pos[8][1]),2))/13);

  eyelinerPosL = (pos.slice(28,32).concat(pos.slice(67,71)).concat([pos[15]]));
  eyelinerPosR = (pos.slice(23,27).concat(pos.slice(63,67)).concat([pos[19]]));
}





function startImage(){
  ctrack= new clm.tracker({stopOnConvergence : true});
  ctrack.init(pModel);

  animateClean = () => {
    ctrack.start(document.getElementById('image'));
    // drawLoop();
  }

   animate = (box) => {
    console.log('in animate');

    ctrack.start(document.getElementById('image'), box);
    // drawLoop();
  }


    // detect if tracker fails to find a face
    document.addEventListener("clmtrackrNotFound", function(event) {
      ctrack.stop();
      alert("The tracking had problems with finding a face in this image. Try selecting the face in the image manually.")
    }, false);

    // detect if tracker loses tracking of face
    document.addEventListener("clmtrackrLost", function(event) {
      ctrack.stop();
      alert("The tracking had problems converging on a face in this image. Try selecting the face in the image manually.")
    }, false);

    // detect if tracker has converged
    document.addEventListener("clmtrackrConverged", function(event) {
      pos = ctrack.getCurrentPosition();
      setPos();
      // drawEyelash([pos[24]],canvas);
      document.getElementById('convergence').innerHTML = "CONVERGED";
      // document.getElementById('convergence').style.backgroundColor = "#00FF00";

      $('#unlock-makeup').removeClass('hide');
      $('#manually-select-face').removeClass('hide');
      $('#picker').removeClass('hide');
      $('#color1-label').removeClass('hide');
      $clr1.removeClass('hide')

    }, false);

  drawLoop = () => {
    requestAnimFrame(drawLoop);
    ctx.clearRect(0, 0, 450, 500);
    pos = ctrack.getCurrentPosition()
    if (pos) {

      ctrack.draw(canvas);
    }
  }

  // manual selection of faces (with jquery imgareaselect plugin)
  selectBox = () => {
    ctx.clearRect(0, 0, 450, 500);
    document.getElementById('convergence').innerHTML = "";
    ctrack.reset();
    $('#canvas').addClass('hide');
    $('#image').imgAreaSelect({
      handles : true,
      onSelectEnd : function(img, selection) {
        var box = [selection.x1, selection.y1, selection.width, selection.height];
        animate(box);
        $('#canvas').removeClass('hide');
      },
      autoHide : true
    });
  }
}
function demo(){
  startImage();
  animate([6, 42, 437, 437]);
}
function uploadImage(){
  startImage();
  selectBox();
}
function unlockMakeUp(){
  ctx.clearRect(0,0, canvas.width, canvas.height);
  $('.feature-btns').removeClass('hide');
  $('.face-select').addClass('hide');

}
