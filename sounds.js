class sounds {
	constructor(alphabet, sound, image){
		this.alphabet = alphabet;
		this.sound = sound;
		this.image = image;
	}
}

const soundS = new sounds('s', 'sound/s.mpe', 'image/snake.jpeg');
document.write(soundS.alphabet);

function playSound(sound){
	var audio = new Audio(sound);

	audio.pause();
	audio.oncanplaythrough = function(){
	audio.play();
	}

	audio.loop = false;

	audio.onended = function(){
	audio.pause();
	}

}