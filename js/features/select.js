const cc = document.getElementById('image').getContext('2d');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let pos, yOffset, xOffset, eyelinerPosL, eyelinerPosR;

const img = new Image();
img.onload = function() {
  cc.drawImage(img,0,0);
};
img.src = './media/no_makeup.jpg';

const ctrack = new clm.tracker({stopOnConvergence : true});
ctrack.init(pModel);

function animateClean() {
  ctrack.start(document.getElementById('image'),[13, 16, 868, 926]);

}

function animate(box) {
  ctrack.start(document.getElementById('image'), box);
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
  yOffset = Math.floor(Math.sqrt(Math.pow((pos[0][0]-pos[1][0]),2) + Math.pow((pos[0][1] - pos[1][1]),2))/10);
  xOffset = Math.floor(Math.sqrt(Math.pow((pos[6][0]-pos[8][0]),2) + Math.pow((pos[6][1] - pos[8][1]),2))/13);

  eyelinerPosL = (pos.slice(28,32).concat(pos.slice(67,71)).concat([pos[15]]));
  eyelinerPosR = (pos.slice(23,27).concat(pos.slice(63,67)).concat([pos[19]]));
  // drawEyelash([pos[24]],canvas);
  document.getElementById('convergence').innerHTML = "CONVERGED";
  document.getElementById('convergence').style.backgroundColor = "#00FF00";
  $('.feature-btns').removeClass('hide');

}, false);

function applyEyebrows(){
  drawEyebrows(pos.slice(15,19),pos.slice(19,23),canvas, yOffset, xOffset);
}
function applyEyeshadow(){
  drawEyeshadow(eyelinerPosL,eyelinerPosR, canvas, yOffset, xOffset);
}

function applyEyeliner(){
  drawEyeliner(eyelinerPosL,eyelinerPosR, canvas, yOffset, xOffset);
}
function applyLips(){
  drawLips(pos.slice(44,62),canvas);
}

function applyBlush(){
  drawBlush(pos, canvas, yOffset);
}

function applyHighlight(){
  drawHighlight([pos[33], pos[41], pos[62]], canvas, xOffset);
}

function clearAll(){
  ctx.clearRect(0, 0, 900, 1000);

}


// manual selection of faces (with jquery imgareaselect plugin)
function selectBox() {
  ctx.clearRect(0, 0, 900, 1000);
  document.getElementById('convergence').innerHTML = "";
  ctrack.reset();
  $('#canvas').addClass('hide');
  $('#image').imgAreaSelect({
    handles : true,
    onSelectEnd : function(img, selection) {
      // create box
      var box = [selection.x1, selection.y1, selection.width, selection.height];
      console.log(box);
      // do fitting
      animate(box);
      $('#canvas').removeClass('hide');
    },
    autoHide : true
  });
}

// function to start showing images
// function loadImage() {
//   if (fileList.indexOf(fileIndex) < 0) {
//     var reader = new FileReader();
//     reader.onload = (function(theFile) {
//       return function(e) {
//         // check if positions already exist in storage
//
//         // Render thumbnail.
//         var canvas = document.getElementById('image')
//         var cc = canvas.getContext('2d');
//         var img = new Image();
//         img.onload = function() {
//           if (img.height > 500 || img.width > 700) {
//             var rel = img.height/img.width;
//             var neww = 700;
//             var newh = neww*rel;
//             if (newh > 500) {
//               newh = 500;
//               neww = newh/rel;
//             }
//             canvas.setAttribute('width', neww);
//             canvas.setAttribute('height', newh);
//             cc.drawImage(img,0,0,neww, newh);
//           } else {
//             canvas.setAttribute('width', img.width);
//             canvas.setAttribute('height', img.height);
//             cc.drawImage(img,0,0,img.width, img.height);
//           }
//         }
//         img.src = e.target.result;
//       };
//     })(fileList[fileIndex]);
//     reader.readAsDataURL(fileList[fileIndex]);
//     ctx.clearRect(0, 0, 720, 576);
//     document.getElementById('convergence').innerHTML = "";
//     ctrack.reset();
//   }
//
// }

// set up file selector and variables to hold selections
// var fileList, fileIndex;
// if (window.File && window.FileReader && window.FileList) {
//   function handleFileSelect(evt) {
//     var files = evt.target.files;
//     fileList = [];
//     for (var i = 0;i < files.length;i++) {
//       if (!files[i].type.match('image.*')) {
//         continue;
//       }
//       fileList.push(files[i]);
//     }
//     if (files.length > 0) {
//       fileIndex = 0;
//     }
//
//     loadImage();
//   }
//   document.getElementById('files').addEventListener('change', handleFileSelect, false);
// } else {
//   $('#files').addClass("hide");
//   $('#loadimagetext').addClass("hide");
// }
