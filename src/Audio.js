#define _AUDIO_STATE_STOP	0
#define _AUDIO_STATE_PLAY	1

function __Audio(){
	this.element = null;
	this.state = _AUDIO_STATE_STOP;
	this.volume = 100;
}

function loadAudio( src ){
	try {
		var audio = new __Audio();
		audio.element = new Audio( "" );
		audio.element.autoplay = false;
		audio.element.src = src;
		audio.element.load();
		return audio;
	} catch( e ){}
	return null;
}

function isAudioLoaded( audio ){
	if( audio != null ){
		try {
			if( audio.element.readyState >= 4 ){
				return true;
			}
		} catch( e ){}
	}
	return false;
}

function playAudio( audio ){
	if( audio != null ){
		if( audio.state == _AUDIO_STATE_PLAY ){
			try {
				if( !audio.element.ended ){
					audio.element.pause();
					audio.element.currentTime = 0;
				}
			} catch( e ){}
		}
		try {
			audio.element.loop = false;
			audio.element.play();
			audio.state = _AUDIO_STATE_PLAY;
		} catch( e ){}
	}
}
