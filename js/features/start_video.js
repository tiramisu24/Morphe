let vid = document.getElementById('video');

let startVideo;
function switchToVideo(){

  clearAll();
  $('#video').removeClass('hide');

  $('#image').addClass('hide');
  $('.start-nav').addClass('hide');
  $('#start-video').removeClass('hide');
  $('#picker').removeClass('hide');
  $('#color1-label').removeClass('hide');
  $clr1.removeClass('hide')

  ctrack = new clm.tracker({useWebGL : true});
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
  }

  startVideo = () => {
    vid.play();
    ctrack.start(vid);
    unlockMakeUp();
    drawLoop();
  }

  drawLoop = () => {
    requestAnimFrame(drawLoop);
    clearAll();
    pos = ctrack.getCurrentPosition()
    if (pos) {
      setPos();

      applyEyebrows();
      applyBlush();
      applyLips();
      applyEyeliner();
      applyEyeshadow();
    // ctrack.draw(canvas);
    }
  }



}
