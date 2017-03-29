const vid = document.getElementById('video');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

var ctrack = new clm.tracker({useWebGL : true});
ctrack.init(pModel);

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
window.URL = window.URL || window.webkitURL || window.msURL || window.mozURL;

if (navigator.getUserMedia) {
  const videoSelector = {video : true};
  if (window.navigator.appVersion.match(/Chrome\/(.*?) /)) {
				let chromeVersion = parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10);
				if (chromeVersion < 20) {
					videoSelector = "video";
				}
   };
   navigator.getUserMedia(videoSelector, ( stream ) => {
      if (vid.mozCaptureStream) {
        vid.mozSrcObject = stream;
      } else {
        vid.src = (window.URL && window.URL.createObjectURL(stream)) || stream;
      }
      vid.play();
    }, function(){
      alert("Open your webcam. Or use Chrome.")
  });


  function startVideo(){
    vid.play();
    ctrack.start(vid);
    drawLoop();
  }
  function drawLoop() {
    requestAnimFrame(drawLoop);
    ctx.clearRect(0, 0, 800, 600);
    let pos = ctrack.getCurrentPosition()
    if (pos) {

      console.log(pos);
      drawLeftBrow(pos.slice(15,19),canvas)
      drawLeftBrow(pos.slice(19,23),canvas)
      ctrack.draw(canvas);
    }
  }

}