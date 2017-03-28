var videoInput = document.getElementById('inputVideo');

var ctracker = new clm.tracker();
debugger;
ctracker.init(pModel);
ctracker.start(videoInput);

function positionLoop() {
  requestAnimationFrame(positionLoop);
  var positions = ctracker.getCurrentPosition();
  debugger;
  // positions = [[x_0, y_0], [x_1,y_1], ... ]
  // do something with the positions ...
}
positionLoop();


//
// const canvas = document.getElementById('output');
// const glasses = document.getElementById('glasses');
// var ctx = canvas.getContext('2d');
//
// const testImage= document.getElementById('test-image');
//
// testImage.onload = function() {
//   testImage.crossOrigin = "Anonymous";
//
//   ctx.drawImage(this, 0, 0, 600,500);
//
//   var comp = ccv.detect_objects({ "canvas" : (canvas),
//                 "cascade" : cascade,
//                 "interval" : 5,
//                 "min_neighbors" : 1 });
//
//   debugger;
//   const pixels = ctx.getImageData(0,0,canvas.width,canvas.height);
//   console.log(pixels);


};
// var comp = ccv.detect_objects({ "canvas" : (canvas),
//                 "cascade" : cascade,
//                 "interval" : 5,
//                 "min_neighbors" : 1 });

// console.log(pixels);
// glasses.onload = function() {
//   ctx.drawImage(this, -50, -60);
// };

// const canvas = document.querySelector("#output");
// debugger;
// console.log(canvas);

// var comp = ccv.detect_objects({ "canvas" : (canvas),
//                 "cascade" : cascade,
//                 "interval" : 5,
//                 "min_neighbors" : 1 });
//
// console.log(comp);
