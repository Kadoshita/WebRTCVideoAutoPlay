var autoplay=document.getElementById('myVideo-autoplay');
var noautoplay=document.getElementById('myVideo-noautoplay');

navigator.mediaDevices.getUserMedia({video: true, audio: false})
.then(function (stream){
	autoplay.src=window.URL.createObjectURL(stream);
	noautoplay.src=window.URL.createObjectURL(stream);
	autoplay.addEventListener('loadstart',function(){console.log('autoplay:loadstart');});
	autoplay.addEventListener('progress',function(){console.log('autoplay:progress');});
	autoplay.addEventListener('suspend',function(){console.log('autoplay:suspend');});
	autoplay.addEventListener('load',function(){console.log('autoplay:load');});
	autoplay.addEventListener('abort',function(){console.log('autoplay:abort');});
	autoplay.addEventListener('error',function(){console.log('autoplay:error');});
	autoplay.addEventListener('emptied',function(){console.log('autoplay:emptied');});
	autoplay.addEventListener('stalled',function(){console.log('autoplay:stalled');});
	autoplay.addEventListener('play',function(){console.log('autoplay:play');});
	autoplay.addEventListener('pause',function(){console.log('autoplay:pause');});
	autoplay.addEventListener('loadedmetadata',function(){console.log('autoplay:loadedmetadata');});
	autoplay.addEventListener('loadeddata',function(){console.log('autoplay:loadeddata');});
	autoplay.addEventListener('waiting',function(){console.log('autoplay:waiting');});
	autoplay.addEventListener('playing',function(){console.log('autoplay:playing');});
	autoplay.addEventListener('canplay',function(){console.log('autoplay:canplay');});
	autoplay.addEventListener('canplaythrough',function(){console.log('autoplay:canplaythrough');});
	autoplay.addEventListener('seeking',function(){console.log('autoplay:seeking');});
	autoplay.addEventListener('seeked',function(){console.log('autoplay:seeked');});
	autoplay.addEventListener('timeupdate',function(){console.log('autoplay:timeupdate');});
	autoplay.addEventListener('ended',function(){console.log('autoplay:ended');});
	autoplay.addEventListener('ratechange',function(){console.log('autoplay:ratechange');});
	autoplay.addEventListener('durationchange',function(){console.log('autoplay:durationchange');});
	autoplay.addEventListener('volumechange',function(){console.log('autoplay:volumechange');});

	noautoplay.addEventListener('loadstart',function(){console.log('noautoplay:loadstart');});
	noautoplay.addEventListener('progress',function(){console.log('noautoplay:progress');});
	noautoplay.addEventListener('suspend',function(){console.log('noautoplay:suspend');});
	noautoplay.addEventListener('load',function(){console.log('noautoplay:load');});
	noautoplay.addEventListener('abort',function(){console.log('noautoplay:abort');});
	noautoplay.addEventListener('error',function(){console.log('noautoplay:error');});
	noautoplay.addEventListener('emptied',function(){console.log('noautoplay:emptied');});
	noautoplay.addEventListener('stalled',function(){console.log('noautoplay:stalled');});
	noautoplay.addEventListener('play',function(){console.log('noautoplay:play');});
	noautoplay.addEventListener('pause',function(){console.log('noautoplay:pause');});
	noautoplay.addEventListener('loadedmetadata',function(){console.log('noautoplay:loadedmetadata');});
	noautoplay.addEventListener('loadeddata',function(){console.log('noautoplay:loadeddata');});
	noautoplay.addEventListener('waiting',function(){console.log('noautoplay:waiting');});
	noautoplay.addEventListener('playing',function(){console.log('noautoplay:playing');});
	noautoplay.addEventListener('canplay',function(){console.log('noautoplay:canplay');});
	noautoplay.addEventListener('canplaythrough',function(){console.log('noautoplay:canplaythrough');});
	noautoplay.addEventListener('seeking',function(){console.log('noautoplay:seeking');});
	noautoplay.addEventListener('seeked',function(){console.log('noautoplay:seeked');});
	noautoplay.addEventListener('timeupdate',function(){console.log('noautoplay:timeupdate');});
	noautoplay.addEventListener('ended',function(){console.log('noautoplay:ended');});
	noautoplay.addEventListener('ratechange',function(){console.log('noautoplay:ratechange');});
	noautoplay.addEventListener('durationchange',function(){console.log('noautoplay:durationchange');});
	noautoplay.addEventListener('volumechange',function(){console.log('noautoplay:volumechange');});
}).catch(function (error){
	console.error('could not get user media:', error);
	return;
});