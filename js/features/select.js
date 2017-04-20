// const cc = document.getElementById('image').getContext('2d');
// const vid = document.getElementById('video');
// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');
// const regExp = /\(([^)]+)\)/;
// const makeup = [];
// let pos, yOffset, xOffset, eyelinerPosL, eyelinerPosR,$clr1,$cl2,box;
// let ctrack;
// //
// // function enablestart() {
// //     var startbutton = document.getElementById('startbutton');
// //     startbutton.value = "start";
// //     startbutton.disabled = null;
// //   }
//
// function switchToVideo(){
//   clearAll();
//   $('video').removeClass('hide');
//
//   $('#image').addClass('hide');
//   ctrack = new clm.tracker({useWebGL : true});
//   ctrack.init(pModel);
//
//   navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
//   window.URL = window.URL || window.webkitURL || window.msURL || window.mozURL;
//
//   if (navigator.getUserMedia) {
//     const videoSelector = {video : true};
//     if (window.navigator.appVersion.match(/Chrome\/(.*?) /)) {
//           let chromeVersion = parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10);
//           if (chromeVersion < 20) {
//             videoSelector = "video";
//           }
//      };
//      navigator.getUserMedia(videoSelector, ( stream ) => {
//         if (vid.mozCaptureStream) {
//           vid.mozSrcObject = stream;
//         } else {
//           vid.src = (window.URL && window.URL.createObjectURL(stream)) || stream;
//         }
//         vid.play();
//       }, function(){
//         alert("Open your webcam. Or use Chrome.")
//     });
//   }
// }
//
// function startVideo(){
//   // $('image').addClass('hide');
//   vid.play();
//   ctrack.start(vid);
//   drawLoop();
// }
//
// function drawLoop() {
//   requestAnimFrame(drawLoop);
//   ctx.clearRect(0, 0, 450, 500);
//   let pos = ctrack.getCurrentPosition()
//   if (pos) {
//   ctrack.draw(canvas);
//   }
// }
//
// const img = new Image();
// img.onload = function() {
//   cc.drawImage(img,0,0,450,500);
// };
// img.src = './media/no_makeup.jpg';
//
//
// function animateClean() {
//   console.log('in animateClean');
//   ctrack= new clm.tracker({stopOnConvergence : true});
//   ctrack.init(pModel);
//   ImageEventListeners();
//   ctrack.start(document.getElementById('image'),[6, 42, 437, 437]);
// }
//
// function animate(box) {
//   console.log('in animate');
//   ctrack= new clm.tracker({stopOnConvergence : true});
//   ctrack.init(pModel);
//   ImageEventListeners();
//
//   // console.log(box);
//   ctrack.start(document.getElementById('image'), box);
// }
//
// function ImageEventListeners(){
//   // detect if tracker fails to find a face
//   document.addEventListener("clmtrackrNotFound", function(event) {
//     ctrack.stop();
//     alert("The tracking had problems with finding a face in this image. Try selecting the face in the image manually.")
//   }, false);
//
//   // detect if tracker loses tracking of face
//   document.addEventListener("clmtrackrLost", function(event) {
//     ctrack.stop();
//     alert("The tracking had problems converging on a face in this image. Try selecting the face in the image manually.")
//   }, false);
//
//   // detect if tracker has converged
//   document.addEventListener("clmtrackrConverged", function(event) {
//     pos = ctrack.getCurrentPosition();
//     yOffset = Math.floor(Math.sqrt(Math.pow((pos[0][0]-pos[1][0]),2) + Math.pow((pos[0][1] - pos[1][1]),2))/10);
//     xOffset = Math.floor(Math.sqrt(Math.pow((pos[6][0]-pos[8][0]),2) + Math.pow((pos[6][1] - pos[8][1]),2))/13);
//
//     eyelinerPosL = (pos.slice(28,32).concat(pos.slice(67,71)).concat([pos[15]]));
//     eyelinerPosR = (pos.slice(23,27).concat(pos.slice(63,67)).concat([pos[19]]));
//     // drawEyelash([pos[24]],canvas);
//     document.getElementById('convergence').innerHTML = "CONVERGED";
//     // document.getElementById('convergence').style.backgroundColor = "#00FF00";
//     $clr1 = $('#color1');
//     $clr2 = $('#color2');
//     $('#picker').removeClass('hide');
//     $('#color1-label').removeClass('hide');
//     $clr1.removeClass('hide')
//
//     $('.feature-btns').removeClass('hide');
//   }, false);
// }
//
// // manual selection of faces (with jquery imgareaselect plugin)
// function selectBox() {
//   ctx.clearRect(0, 0, 450, 500);
//   document.getElementById('convergence').innerHTML = "";
//   ctrack.reset();
//   $('#canvas').addClass('hide');
//   $('#image').imgAreaSelect({
//     handles : true,
//     onSelectEnd : function(img, selection) {
//       // create box
//       var box = [selection.x1, selection.y1, selection.width, selection.height];
//       console.log(box);
//       // do fitting
//       animate(box);
//       $('#canvas').removeClass('hide');
//     },
//     autoHide : true
//   });
// }
