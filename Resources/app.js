var win = Ti.UI.createWindow({
	backgroundImage:'takeda.png'
    });

Titanium.UI.orientation = Titanium.UI.LANDSCAPE_LEFT;

Video = {}; 
Video.view = Ti.UI.createView();
Video.videoObject = null;
var mymovies=['movie1.mov','movie2.mov','movie3.mov','movie4.mov'];
var mycounter=1;

Video.init = function()
{
	Video.videoObject = Titanium.Media.createVideoPlayer({
		contentURL:'movie1.mov',
		backgroundColor:'#111',
		//backgroundImage:'takeda.png',
		movieControlMode:Titanium.Media.VIDEO_CONTROL_HIDDEN,
		scalingMode:Titanium.Media.VIDEO_SCALING_MODE_FIT,
		//top:100,
		movieControlStyle:Titanium.Media.VIDEO_CONTROL_EMBEDDED,
		height:768,
		width:1024,
		autoplay:false
	});
	
	Video.videoObject.addEventListener('complete',
					   function(){
					       if (mycounter<(mymovies.length)){
						   Video.videoObject.setMedia(mymovies[mycounter++]);
						   Video.videoObject.show();
						   Video.videoObject.pause();
					       }
					       if(mycounter>=(mymovies.length)){
						   mycounter=0;
						   Video.videoObject.setMedia(mymovies[mycounter]);
						   Video.videoObject.show();
						   Video.videoObject.pause();			
						   mycounter++;
					       }
					   }
					   );
	
	
	Video.view.add(Video.videoObject);
};

Video.init();
win.add(Video.view);
win.open();
Video.videoObject.play();
