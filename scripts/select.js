
const canvas = document.getElementById('output');
const glasses = document.getElementById('glasses');
var ctx = canvas.getContext('2d');

const testImage= document.getElementById('test-image');
// testImage.crossOrigin = "Anonymous";

testImage.onload = function() {

  ctx.drawImage(this, 0, 0, 600,500);
  debugger;
  const pixels = ctx.getImageData(0,0,canvas.width,canvas.height);
  console.log(pixels);


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
