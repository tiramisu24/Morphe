
function applyEyebrows(){
  $clr2.addClass('hide');
  $('#color2-label').addClass('hide');
  moves["eyebrows"] = selectColor($clr1.css('background-color'))
  drawEyebrows(pos.slice(15,19),pos.slice(19,23),canvas, yOffset, xOffset, moves["eyebrows"]);
}
function applyEyeshadow(){
  $clr2.removeClass('hide');
  $('#color2-label').removeClass('hide');
  drawEyeshadow(eyelinerPosL,eyelinerPosR, canvas, yOffset, xOffset, selectColor($clr1.css('background-color')), selectColor($clr2.css('background-color')));
}

function applyEyeliner(){
  $clr2.addClass('hide');
  $('#color2-label').addClass('hide');

  drawEyeliner(eyelinerPosL,eyelinerPosR, canvas, yOffset, xOffset, selectColor($clr1.css('background-color'),1));
}
function applyLips(){
  $clr2.removeClass('hide');
  $('#color2-label').removeClass('hide');

  drawLips(pos.slice(44,62),canvas, selectColor($clr1.css('background-color'),0.3));
}

function applyBlush(){
  $clr2.removeClass('hide');
  $('#color2-label').removeClass('hide');

  drawBlush(pos, canvas, yOffset, selectColor($clr1.css('background-color'),0.1));
}

function applyHighlight(){
  $clr2.addClass('hide');
  $('#color2-label').addClass('hide');

  drawHighlight([pos[33], pos[41], pos[62]], canvas, xOffset, selectColor($clr1.css('background-color')));
}

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
