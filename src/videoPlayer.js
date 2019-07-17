if (!Element.prototype.requestFullscreen) {
	Element.prototype.requestFullscreen = Element.prototype.mozRequestFullscreen || Element.prototype.webkitRequestFullscreen || Element.prototype.msRequestFullscreen;
}

document.addEventListener('click', function (event) {
    var videoId = event.target.getAttribute('data-video');
	if (!videoId) return;
	var iframe = document.createElement('div');
	iframe.innerHTML = '<p>x</p><iframe id="youtube-video-iframe" width="80" height="65" src="https://www.youtube.com/embed/' + videoId + '?rel=0&autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
	var video = iframe.childNodes[1];
	event.target.parentNode.appendChild(video, event.target);
	video.requestFullscreen();
}, false);


document.addEventListener("fullscreenchange", function () {
  var iFrameVideo = document.getElementById('youtube-video-iframe');
    if (!document.fullscreenElement) iFrameVideo.parentNode.removeChild(iFrameVideo);;
  }, false);
  
document.addEventListener("msfullscreenchange", function() {
      var iFrameVideo = document.getElementById('youtube-video-iframe');
    if (!document.msFullscreenElement) iFrameVideo.parentNode.removeChild(iFrameVideo);
  }, false);
 
  document.addEventListener("mozfullscreenchange", function() {
    var iFrameVideo = document.getElementById('youtube-video-iframe');
    if (!document.mozFullScreen) iFrameVideo.parentNode.removeChild(iFrameVideo);
  }, false);
  
  document.addEventListener("webkitfullscreenchange", function() {
    var iFrameVideo = document.getElementById('youtube-video-iframe');  
    if (!document.webkitIsFullScreen) iFrameVideo.parentNode.removeChild(iFrameVideo);
  }, false);