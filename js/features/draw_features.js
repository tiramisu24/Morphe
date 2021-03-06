
let applyFcns = {}
// let eyebrowColor;
function applyEyebrows(){
  drawEyebrows(pos.slice(15,19),pos.slice(19,23),canvas, yOffset, xOffset, moves["eyebrows"]);
}
function applyEyebrowsVideo(){
  $clr2.addClass('hide');
  $('#color2-label').addClass('hide');
  moves["eyebrows"] = selectColor($clr1.css('background-color'))
  if (isVideo){
    applyFcns['eyebrows'] = applyEyebrows;
  }else {
    applyEyebrows();
  }
}
function applyEyeshadow(){
  drawEyeshadow(eyelinerPosL,eyelinerPosR, canvas, yOffset, xOffset, moves["eyeshadow1"], moves["eyeshadow2"]);
}
function applyEyeshadowVideo(){
  $clr2.removeClass('hide');
  $('#color2-label').removeClass('hide');
  moves["eyeshadow1"] = selectColor($clr1.css('background-color'))
  moves["eyeshadow2"] = selectColor($clr2.css('background-color'))
  if (isVideo){
    applyFcns['eyeshadow'] = applyEyeshadow;
  }else {
    applyEyeshadow();
  }
}

function applyEyeliner(){
  drawEyeliner(eyelinerPosL,eyelinerPosR, canvas, yOffset, xOffset, moves["eyeliner"]);
}

function applyEyelinerVideo(){
  $clr2.addClass('hide');
  $('#color2-label').addClass('hide');
  moves["eyeliner"] = selectColor($clr1.css('background-color'),0.5)
  if (isVideo){
    applyFcns['eyeliner'] = applyEyeliner;
  }else {
    applyEyeliner();
  }
}
function applyLips(){
  drawLips(pos.slice(44,62),canvas, moves["lips"]);
}
function applyLipsVideo(){
  $clr2.addClass('hide');
  $('#color2-label').addClass('hide');
  moves["lips"] = selectColor($clr1.css('background-color'),0.3)
  if (isVideo){
    applyFcns['lips'] = applyLips;
  }else {
    applyLips();
  }
}

function applyBlush(){
  drawBlush(pos, canvas, yOffset, moves["blush"]);
}
function applyBlushVideo(){
  $clr2.addClass('hide');
  $('#color2-label').addClass('hide');
  moves["blush"] = selectColor($clr1.css('background-color'),0.3)
  if (isVideo){
    applyFcns['blush'] = applyBlush;
  }else {
    applyBlush();
  }
}

// function applyHighlight(){
//   $clr2.addClass('hide');
//   $('#color2-label').addClass('hide');
//
//   drawHighlight([pos[33], pos[41], pos[62]], canvas, xOffset, selectColor($clr1.css('background-color')));
// }

function clearAll(){
  console.log("clearall");
  ctx.clearRect(0, 0, 450, 500);
}


function selectColor(color, opacity = 0.5){
  const matches = regExp.exec(color);

  if(matches[1] === '255, 255, 255' || color === 'rgba(0, 0, 0, 0)'){
    return  "default";
  }else {
    return `rgba(${matches[1]}, ${opacity})`;
  }
}

// function loadImage() {
// 		if (fileList.indexOf(fileIndex) < 0) {
// 			var reader = new FileReader();
// 			reader.onload = (function(theFile) {
// 				return function(e) {
// 					// check if positions already exist in storage
//
// 					// Render thumbnail.
// 					img = new Image();
// 					img.onload = function() {
// 						if (img.height > 500 || img.width > 450) {
// 							var rel = img.height/img.width;
// 							var neww = 450;
// 							var newh = neww*rel;
// 							if (newh > 500) {
// 								newh = 500;
// 								neww = newh/rel;
// 							}
// 							canvas.setAttribute('width', neww);
// 							canvas.setAttribute('height', newh);
// 							ctx.drawImage(img,0,0,neww, newh);
// 						} else{
// 							canvas.setAttribute('width', img.width);
// 							canvas.setAttribute('height', img.height);
// 							ctx.drawImage(img,0,0,img.width, img.height);
// 						}
// 					}
// 					img.src = e.target.result;
// 				};
// 			})(fileList[fileIndex]);
// 			reader.readAsDataURL(fileList[fileIndex]);
// 			ctx.clearRect(0, 0, 450, 500);
// 			document.getElementById('convergence').innerHTML = "";
// 			ctrack.reset();
// 		}
// 	}
// 	// set up file selector and variables to hold selections
// 	var fileList, fileIndex;
// 	if (window.File && window.FileReader && window.FileList) {
// 		function handleFileSelect(evt) {
// 			var files = evt.target.files;
// 			fileList = [];
// 			for (var i = 0;i < files.length;i++) {
// 				if (!files[i].type.match('image.*')) {
// 					continue;
// 				}
// 				fileList.push(files[i]);
// 			}
// 			if (files.length > 0) {
// 				fileIndex = 0;
// 			}
//
// 			loadImage();
// 		}
// 		document.getElementById('files').addEventListener('change', handleFileSelect, false);
// 	} else {
// 		$('#files').addClass("hide");
// 		$('#loadimagetext').addClass("hide");
// 	}
// }
//video
