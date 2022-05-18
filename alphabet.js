const alphabet = {
	"a":{
		alphabet: 'Aa',
		image:'images/ant.jpg',
		sound: 'sounds/a.mp3',
		name: 'Ant'
	},
	"b":{
		alphabet: 'Bb',
		image:'images/bed.png',
		sound: 'sounds/b.mp3',
		name: 'Ball'
	},
	"c":{
		alphabet: 'Cc',
		image:'images/cat.jpg',
		sound: 'sounds/c.mp3',
		name: 'Cat'
	},
	"d":{
		alphabet: 'Dd',
		image:'images/drum.png',
		sound: 'sounds/d.mp3',
		name: 'Drum'
	},
	"e":{
		alphabet: 'Ee',
		image:'images/egg.jpg',
		sound: 'sounds/e.mp3',
		name: 'Egg'
	},
	"F":{
		alphabet: 'Ff',
		image:'images/fish.jpg',
		sound: 'sounds/F.mp3',
		name: 'Fish'
	},
	"G":{
		alphabet: 'Gg',
		image:'images/g.jpg',
		sound: 'sounds/G.mp3',
		name: 'Cat'
	},
	"H":{
		alphabet: 'Hh',
		image:'images/h.png',
		sound: 'sounds/H.mp3',
		name: 'Hat'
	},
	"I":{
		alphabet: 'Ii',
		image:'images/i.png',
		sound: 'sounds/I.mp3',
		name: 'Ink'
	},
	"J":{
		alphabet: 'Jj',
		image:'images/j.jpg',
		sound: 'sounds/J.mp3',
		name: 'Jug'
	},
	"k":{
		alphabet: 'kk',
		image:'images/k.jpg',
		sound: 'sounds/k.mp3',
		name: 'Kettle'
	},
	"l":{
		alphabet: 'll',
		image:'images/l.jpg',
		sound: 'sounds/l.mp3',
		name: 'Lollipop'
	},
	"m":{
		alphabet: 'm',
		image:'images/m.jpg',
		sound: 'sounds/m.mp3',
		name: 'milk'
	},
	"n":{
		alphabet: 'n',
		image:'images/n.jpg',
		sound: 'sounds/n.mp3',
		name: 'Net'
	},
	"o":{
		alphabet: 'oo',
		image:'images/o.jpg',
		sound: 'sounds/o.mp3',
		name: 'Orange'
	},
	"p":{
		alphabet: 'pp',
		image:'images/p.jpg',
		sound: 'sounds/p.mp3',
		name: 'Pawpaw'
	},
	"q":{
		alphabet: 'qq',
		image:'images/q.jpg',
		sound: 'sounds/q.mp3',
		name: 'Queen'
	},
	"r":{
		alphabet: 'rr',
		image:'images/r.jpg',
		sound: 'sounds/r.mp3',
		name: 'Rag'
	},
	"s":{
		alphabet: 'Ss',
		image:'images/snake.jpg',
		sound: 'sounds/s.mp3',
		name: 'Snake'
	},
	"t":{
		alphabet: 'tt',
		image:'images/t.jpg',
		sound: 'sounds/t.mp3',
		name: 'tennis'
	},
	"u":{
		alphabet: 'uu',
		image:'images/u.png',
		sound: 'sounds/u.mp3',
		name: 'Umbrella'
	},
	"v":{
		alphabet: 'vv',
		image:'images/v.png',
		sound: 'sounds/v.mp3',
		name: 'Van'
	},
	"w":{
		alphabet: 'Ww',
		image:'images/w.jpg',
		sound: 'sounds/w.mp3',
		name: 'w'
	},
	"x":{
		alphabet: 'Xx',
		image:'images/x.jpg',
		sound: 'sounds/x.mp3',
		name: 'X-ray'
	},
	"y":{
		alphabet: 'Yy',
		image:'images/y.jpg',
		sound: 'sounds/y.mp3',
		name: 'yogurt'
	},
	"z":{
		alphabet: 'Zz',
		image:'images/z.jpg',
		sound: 'sounds/z.mp3',
		name: 'Zebra'
	},
}
function playSound(sound){
	var audio = new Audio(sound);

	audio.oncanplaythrough = function(){
	audio.play();
	}

	audio.loop = false;

	audio.onended = function(){
	audio.pause();
	}

}

function allLetters(){
	const contentDiv = document.getElementById('content');
	// Object.keys(alphabet).forEach(function(key){
	// 	var image = alphabet[key].image;
	// 	var imgSrc = `<img  src=${image} width="40" height="40">`;
	// 	document.write(imgSrc);
	// })

	// console.log(Object.keys(alphabet))
	var content = "";
	for(var keys of Object.keys(alphabet)){
		console.log(alphabet[keys].alphabet)
		content += `<div class="col-md-2 col-sm-4 pb-3"><div class="card">
          <img src="${alphabet[keys].image}" width="150px"  height="150px" class="card-img-top" alt=${alphabet[keys].alphabet}>
          <div class="card-body center-align">
            ${alphabet[keys].alphabet} <span class="text-primary" onclick="playSound('${alphabet[keys].sound}')"> ${alphabet[keys].name}</span>
          </div>
        </div></div>`;
	}

	contentDiv.innerHTML=content;
}

allLetters();