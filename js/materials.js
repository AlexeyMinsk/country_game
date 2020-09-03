let materials = {

    numberGame: 0,

    cleanness: [
        {//1 игра
            patern: paternPuzzle,

            images: ['img/city_cleanness/game_1/0.gif', 'img/city_cleanness/game_1/1.jpg',
                'img/city_cleanness/game_1/2.jpg'],

            AcceptImg: ['img/city_cleanness/game_1/3.png', 'img/city_cleanness/game_1/4.png',
                'img/city_cleanness/game_1/5.png'],

            keyValue: [1, 2, 0]
        },
        {//2 игра
            patern: paternGameSelected,

            images: ['img/city_cleanness/game_2/0.jpg', 'img/city_cleanness/game_2/1.jpg',
                'img/city_cleanness/game_2/2.png', 'img/city_cleanness/game_2/3.jpg',
                'img/city_cleanness/game_2/4.png', 'img/city_cleanness/game_2/5.jpg'],

            correct: [2]
        },
		{//3 игра
            patern: paternGameSelected,

            images: ['img/city_cleanness/game_3/0.jpg', 'img/city_cleanness/game_3/1.png',
                'img/city_cleanness/game_3/2.jpg', 'img/city_cleanness/game_3/3.jpg',
                'img/city_cleanness/game_3/4.png', 'img/city_cleanness/game_3/5.png'],

            correct: [2, 3, 5]
        },
		{//4 игра
            patern: paternGameSelected,

            images: ['img/city_cleanness/game_4/0.jpg', 'img/city_cleanness/game_4/1.jpg',
                'img/city_cleanness/game_4/2.jpg', 'img/city_cleanness/game_4/3.jpg',
                'img/city_cleanness/game_4/4.jpg', 'img/city_cleanness/game_4/5.jpg'],

            correct: [1]
        },
		{//5 игра
            patern: paternGameSelected,

            images: ['img/city_cleanness/game_5/0.jpg', 'img/city_cleanness/game_5/1.png',
                'img/city_cleanness/game_5/2.png', 'img/city_cleanness/game_5/3.png',
                'img/city_cleanness/game_5/4.png', 'img/city_cleanness/game_5/5.png'],

            correct: [1, 2, 5]
        }
    ],
    usefulHabits:[
        {//1
            patern: paternGameSelected,

            counter: 0,

            images: [
				'img/city_useful-habits/game_1/0.jpg', 'img/city_useful-habits/game_1/1.jpg',
				'img/city_useful-habits/game_1/2.jpg', 'img/city_useful-habits/game_1/3.jpg',
				'img/city_useful-habits/game_1/4.jpg', 'img/city_useful-habits/game_1/5.jpg'
			],

            correct: [0, 5]
        },
		{//2
            patern: paternGameSelected,

            counter: 0,

            images: [
				'img/city_useful-habits/game_2/0.jpg', 'img/city_useful-habits/game_2/1.jpg',
				'img/city_useful-habits/game_2/2.jpg'
			],

            correct: [1]
        },
		{//3
            patern: paternGameSelected,

            counter: 0,

            images: [
				'img/city_useful-habits/game_3/0.jpg', 'img/city_useful-habits/game_3/1.jpg',
				'img/city_useful-habits/game_3/2.jpg', 'img/city_useful-habits/game_3/3.jpg',
				'img/city_useful-habits/game_3/4.jpg', 'img/city_useful-habits/game_3/5.jpg'
			],

            correct: [1, 4, 5]
        },
		{//4
            patern: paternGameSelected,

            counter: 0,

            images: [
				'img/city_useful-habits/game_4/0.png', 'img/city_useful-habits/game_4/1.jpg',
				'img/city_useful-habits/game_4/2.png', 'img/city_useful-habits/game_4/3.jpg',
				'img/city_useful-habits/game_4/4.png', 'img/city_useful-habits/game_4/5.png'
			],

            correct: [1, 2, 5]
        },
		{//5
            patern: paternGameSelected,

            counter: 0,

            images: [
				'img/city_useful-habits/game_5/0.jpg', 'img/city_useful-habits/game_5/1.jpg',
				'img/city_useful-habits/game_5/2.png', 'img/city_useful-habits/game_5/3.jpg',
				'img/city_useful-habits/game_5/4.jpg', 'img/city_useful-habits/game_5/5.jpg'
			],

            correct: [0, 1, 3, 4]
        },
		{//6
            patern: paternGameSelected,

            counter: 0,

            images: [
				'img/city_useful-habits/game_6/0.jpg', 'img/city_useful-habits/game_6/1.jpg',
				'img/city_useful-habits/game_6/2.jpg', 'img/city_useful-habits/game_6/3.jpg',
				'img/city_useful-habits/game_6/4.jpg', 'img/city_useful-habits/game_6/5.jpg'
			],

            correct: [0, 3, 5]
        },
		{//7
            patern: paternGameSelected,

            counter: 0,

            images: [
				'img/city_useful-habits/game_7/0.jpg', 'img/city_useful-habits/game_7/1.jpg'
			],

            correct: [0]
        },
		{//8
            patern: paternGameSelected,

            counter: 0,

            images: [
				'img/city_useful-habits/game_8/0.jpg', 'img/city_useful-habits/game_8/1.jpg',
				'img/city_useful-habits/game_8/2.jpg', 'img/city_useful-habits/game_8/3.jpg',
				'img/city_useful-habits/game_8/4.jpg', 'img/city_useful-habits/game_8/5.jpg'
			],

            correct: [0, 1, 3]
        },
		{//9
            patern: paternGameSelected,

            counter: 0,

            images: [
				'img/city_useful-habits/game_9/0.png', 'img/city_useful-habits/game_9/1.jpg',
				'img/city_useful-habits/game_9/2.jpg', 'img/city_useful-habits/game_9/3.jpg',
				'img/city_useful-habits/game_9/4.jpg', 'img/city_useful-habits/game_9/5.jpg'
			],

            correct: [0, 1, 2, 3, 4, 5]
        }
    ],
    amazingPeople:[
        {
            hero: 'img/hero/kolobok.png',

            patern: paternShowItems,

            handler: handlerShowItems,

            selector: 'boy-face _',

            counter: 0,

            query: ['Покажи глаза', 'Покажи нос', 'Покажи лоб', 'Покажи рот', 'Покажи волосы', 'Покажи подбородок',
                'Покажи щёки', 'Покажи уши'],

            images: ['img/city_amazing-people/game_3/face.png', 'img/city_amazing-people/game_3/chin.png',
                'img/city_amazing-people/game_3/forehead.jpg', 'img/city_amazing-people/game_3/hair.png',
                'img/city_amazing-people/game_3/Left-cheek.png', 'img/city_amazing-people/game_3/Right-cheek.png',
                'img/city_amazing-people/game_3/Left-ear.png', 'img/city_amazing-people/game_3/Right-ear.png',
                'img/city_amazing-people/game_3/left-eye.jpg', 'img/city_amazing-people/game_3/right-eye.jpg',
                'img/city_amazing-people/game_3/mouth.jpg', 'img/city_amazing-people/game_3/nose.jpg']
        },
        {
            hero: 'img/hero/kolobok.png',

            patern: paternShowItems,

            handler: handlerShowItems,

            selector: 'girl-face _',

            counter: 0,

            query: ['Покажи глаза', 'Покажи нос', 'Покажи лоб', 'Покажи рот', 'Покажи волосы', 'Покажи подбородок',
                'Покажи щёки', 'Покажи уши'],

            images: ['img/city_amazing-people/game_4/face.png', 'img/city_amazing-people/game_4/chin.jpg',
                'img/city_amazing-people/game_4/forehead.jpg', 'img/city_amazing-people/game_4/hair-1.png',
                'img/city_amazing-people/game_4/hair-2.png', 'img/city_amazing-people/game_4/hair-3.png',
                'img/city_amazing-people/game_4/Left-cheek.png', 'img/city_amazing-people/game_4/Right-cheek.jpg',
                'img/city_amazing-people/game_4/Left-ear.png', 'img/city_amazing-people/game_4/Right-ear.png',
                'img/city_amazing-people/game_4/left-eye.jpg', 'img/city_amazing-people/game_4/right-eye.jpg',
                'img/city_amazing-people/game_4/mouth.jpg', 'img/city_amazing-people/game_4/nose.jpg']
        },
        {
            hero: 'img/hero/garlic.png',

            patern: paternPuzzle,

            images: ['img/city_amazing-people/game_5/cactus.png', 'img/city_amazing-people/game_5/flower.png',
                'img/city_amazing-people/game_5/ibon.png'],

            AcceptImg: ['img/city_amazing-people/game_5/ear.png', 'img/city_amazing-people/game_5/hands.png',
                'img/city_amazing-people/game_5/nose.png'],

            keyValue: [2, 0, 1]
        },
        {
            hero: 'img/hero/garlic.png',

            patern: paternPuzzle,

            images: ['img/city_amazing-people/game_6/lemon.png', 'img/city_amazing-people/game_6/violin.png',
                'img/city_amazing-people/game_6/mirror.png'],

            AcceptImg: ['img/city_amazing-people/game_6/tongue.png', 'img/city_amazing-people/game_6/eye.png',
                'img/city_amazing-people/game_5/ear.png'],

            keyValue: [0, 2, 1]
        },
        {
            hero: 'img/hero/Dasha.png',

            patern: paternPartyBoby,

            paternSelector: 'girl-party',

            images: ['img/city_amazing-people/game_1/body.png', 'img/city_amazing-people/game_1/head.png',
                'img/city_amazing-people/game_1/left-hand.png', 'img/city_amazing-people/game_1/right-hand.png',
                'img/city_amazing-people/game_1/left-leg.png', 'img/city_amazing-people/game_1/right-leg.png'],

            AcceptImg: ['img/city_amazing-people/game_1/anti-body.png', 'img/city_amazing-people/game_1/anti-head.png',
                'img/city_amazing-people/game_1/anti-left-hand.png', 'img/city_amazing-people/game_1/anti-right-hand.png',
                'img/city_amazing-people/game_1/anti-left-leg.png', 'img/city_amazing-people/game_1/anti-right-leg.png'],

            keyValue: [0, 1, 2, 3, 4, 5]
        },
        {
            hero: 'img/hero/Sasha.png',

            patern: paternPartyBoby,

            paternSelector: 'boy-party',

            images: ['img/city_amazing-people/game_2/body.png', 'img/city_amazing-people/game_2/head.png',
                'img/city_amazing-people/game_2/left-hand.png', 'img/city_amazing-people/game_2/right-hand.png',
                'img/city_amazing-people/game_2/left-leg.png', 'img/city_amazing-people/game_2/right-leg.png'],

            AcceptImg: ['img/city_amazing-people/game_2/anti-body.png', 'img/city_amazing-people/game_2/anti-head.png',
                'img/city_amazing-people/game_2/anti-left-hand.png', 'img/city_amazing-people/game_2/anti-right-hand.png',
                'img/city_amazing-people/game_2/anti-left-leg.png', 'img/city_amazing-people/game_2/anti-right-leg.png'],

            keyValue: [0, 1, 2, 3, 4, 5]
        },
        {
            patern: paternWithoutInteraction,

            hero: 'img/hero/Neznajka.png',

            selector: 'lack',

            images: ['img/city_amazing-people/game_8/boy-1.png', 'img/city_amazing-people/game_8/girl-1.png',
                'img/city_amazing-people/game_8/boy-2.png', 'img/city_amazing-people/game_8/girl-2.png']
        }/*,
        {//1
            patern: paternShowItems,

            handler: handlerShowItems,

            selector: 'family _',

            counter: 0,

            query: ['Покажи где дедушка', 'Покажи где бабушка', 'Покажи где папа', 'Покажи где мама',
                'Покажи где мальчик', 'Покажи где девочка'],

            images: ['img/city_amazing-people/game_7/room.png', 'img/city_amazing-people/game_7/grandfather.png',
                'img/city_amazing-people/game_7/grandmother.png', 'img/city_amazing-people/game_7/dad.png',
                'img/city_amazing-people/game_7/mother.png', 'img/city_amazing-people/game_7/son.png',
                'img/city_amazing-people/game_7/daughter.png']
        },
        {//2
            patern: paternShowItems,

            handler: handlerShowItems,

            selector: 'family _',

            counter: 0,

            query: ['Покажи где у мамы дочка', 'Покажи где у дочки папа', 'Покажи где у мамы сын',
                'Покажи где у сына папа', 'Покажи где у папы дочка', 'Покажи где у папы сын',
                'Покажи где у дедушки сын', 'Покажи где у дедушки внучка', 'Покажи где у дедушки внук',
                'Покажи где у внука дедушка', 'Покажи где у внучки бабушка'],

            images: ['img/city_amazing-people/game_7/room.png', 'img/city_amazing-people/game_7/grandfather.png',
                'img/city_amazing-people/game_7/grandmother.png', 'img/city_amazing-people/game_7/dad.png',
                'img/city_amazing-people/game_7/mother.png', 'img/city_amazing-people/game_7/son.png',
                'img/city_amazing-people/game_7/daughter.png']
        },
        {//3
            patern: paternShowItems,

            handler: handlerShowItems,

            selector: 'family _',

            counter: 0,

            selectedArr: [],

            query: ['Покажи, где взрослые?', 'Покажи, где взрослые?', 'Покажи, где взрослые?',
                'Покажи, где взрослые?', 'Покажи, где дети?', 'Покажи, где дети?'],

            images: ['img/city_amazing-people/game_7/room.png', 'img/city_amazing-people/game_7/grandfather.png',
                'img/city_amazing-people/game_7/grandmother.png', 'img/city_amazing-people/game_7/dad.png',
                'img/city_amazing-people/game_7/mother.png', 'img/city_amazing-people/game_7/son.png',
                'img/city_amazing-people/game_7/daughter.png']
        }*/
    ],
	security:[
		  {//1
            patern: paternGameSelected,

            counter: 0,

            images: [
				'img/city_security/game_1/0.jpg', 'img/city_security/game_1/1.jpg',
				'img/city_security/game_1/2.jpg', 'img/city_security/game_1/3.png',
				'img/city_security/game_1/4.jpg', 'img/city_security/game_1/5.jpg'
			],

            correct: [0, 2, 5]
        },
		{//2
            patern: paternGameSelected,

            counter: 0,

            images: [
				'img/city_security/game_2_3/0.png', 'img/city_security/game_2_3/1.jpg',
				'img/city_security/game_2_3/2.jpg'
			],

            correct: [0]
        },
		{//3
            patern: paternGameSelected,

            counter: 0,

            images: [
				'img/city_security/game_2_3/0.png', 'img/city_security/game_2_3/1.jpg',
				'img/city_security/game_2_3/2.jpg'
			],

            correct: [2]
        },
		{//4
            patern: paternGameSelected,

            counter: 0,

            images: [
				'img/city_security/game_4/0.png', 'img/city_security/game_4/1.jpg',
				'img/city_security/game_4/2.png', 'img/city_security/game_4/3.png',
				'img/city_security/game_4/4.png', 'img/city_security/game_4/5.jpg'
			],

            correct: [0, 1, 2, 3, 4]
        },
		{//5
            patern: paternGameSelected,

            counter: 0,

            images: [
				'img/city_security/game_5/0.png', 'img/city_security/game_5/1.jpg',
				'img/city_security/game_5/2.jpg', 'img/city_security/game_5/3.png',
				'img/city_security/game_5/4.png', 'img/city_security/game_5/5.png'
			],

            correct: [1, 2, 5]
        },
		{//6
            patern: paternGameSelected,

            counter: 0,

            images: [
				'img/city_security/game_6/0.jpg', 'img/city_security/game_6/1.jpg',
				'img/city_security/game_6/2.jpg', 'img/city_security/game_6/3.jpg',
				'img/city_security/game_6/4.jpg', 'img/city_security/game_6/5.jpg'
			],

            correct: [1, 2, 3, 4]
        },
		{//7
            patern: paternGameSelected,

            counter: 0,

            images: [
				'img/city_security/game_7/0.jpg', 'img/city_security/game_7/1.jpg',
				'img/city_security/game_7/2.jpg', 'img/city_security/game_7/3.jpg',
				'img/city_security/game_7/4.jpg', 'img/city_security/game_7/5.jpg'
			],
            correct: [0,1 ,2, 3, 5]
        }
	],
	friendship:[
		{//1
            patern: paternWithoutInteraction,

            hero: 'img/hero/Neznajka.png',

            selector: 'one-image',

            images: ['img/city_friendship/game_1/0.jpg']
        },
		{//2
            patern: paternWithoutInteraction,

            hero: 'img/hero/Neznajka.png',

            selector: 'one-image',

            images: ['img/city_friendship/game_2/0.jpg']
        },
		{//3
            patern: paternWithoutInteraction,

            hero: 'img/hero/Neznajka.png',

            selector: 'one-image',

            images: ['img/city_friendship/game_3/0.jpg']
        },
		{//4
            patern: paternWithoutInteraction,

            hero: 'img/hero/Neznajka.png',

            selector: 'one-image',

            images: ['img/city_friendship/game_4/0.png']
        },
		{//5
            patern: paternWithoutInteraction,

            hero: 'img/hero/Neznajka.png',

            selector: 'one-image',

            images: ['img/city_friendship/game_5/0.jpg']
        },
		{//6
            patern: paternWithoutInteraction,

            hero: 'img/hero/Neznajka.png',

            selector: 'one-image',

            images: ['img/city_friendship/game_6/0.jpg']
        }
		
	],
	assistants:[
		{//1
            patern: paternWithoutInteraction,

            hero: 'img/hero/Neznajka.png',

            selector: 'one-image',

            images: ['img/city_assistants/game_1/0.jpg']
        },
		{//2
            patern: paternGameSelected,

            counter: 0,

            images: [
				'img/city_assistants/game_2/0.jpg', 'img/city_assistants/game_2/1.jpg',
				'img/city_assistants/game_2/2.jpg', 'img/city_assistants/game_2/3.jpg',
				'img/city_assistants/game_2/4.jpg', 'img/city_assistants/game_2/5.jpg'
			],

            correct: [0, 1, 3, 4, 5]
        }
	],
	"self-service":[
		{//1
            patern: paternPuzzle,
			
			basket: 1,
			
            images: ['img/city_self-service/game_1/0.jpg'],

            AcceptImg: [
				'img/city_self-service/game_1/5.jpg', 'img/city_self-service/game_1/1.jpg',
                'img/city_self-service/game_1/2.jpg', 'img/city_self-service/game_1/3.jpg',
				'img/city_self-service/game_1/4.jpg'
			],

            keyValue: [1]
        },
        {//2
            patern: paternGameSelected,

            images: [
				'img/city_self-service/game_2/0.jpg', 'img/city_self-service/game_2/1.jpg',
                'img/city_self-service/game_2/2.jpg', 'img/city_self-service/game_2/3.jpg',
                'img/city_self-service/game_2/4.jpg', 'img/city_self-service/game_2/5.jpg'
			],

            correct: [5]
        }
	]
}

let sound = {

    mainTheme:'sound/main_theme.mp3',

    welcomeContry:'sound/voiceover/welc.mp3',

    getMark: function (flag) {
        let accept = ['sound/voiceover/ok_1.mp3', 'sound/voiceover/ok_2.mp3', 'sound/voiceover/ok_3.mp3',
            'sound/voiceover/ok_4.mp3'];

        let cancel =  ['sound/voiceover/cancel_1.mp3', 'sound/voiceover/cancel_2.mp3', 'sound/voiceover/cancel_3.mp3',
            'sound/voiceover/cancel_4.mp3'];

        let random;

        if(flag) {
            random = Math.random() * (accept.length - 1);
            return accept[Math.round(random)];
        } else {
            random = Math.random() * (cancel.length - 1);
            return cancel[Math.round(random)];
        }
    },

    welcome:'sound/sound_city.mp3',

    played: [],

    playSound: function (what, flag) {
        let audio = document.createElement('audio');
        document.body.appendChild(audio);
        audio.src = what;
        let playPromise = audio.play();

        if (playPromise !== undefined) {
            playPromise.then(_ => {
                // Automatic playback started!
                // Show playing UI.
            })
                .catch(error => {
                    // Auto-play was prevented
                    // Show paused UI.
                    console.log('error', error);
                });
        }
        sound.played.push(audio);

        if(flag) {
            audio.loop = 'true';
            audio.volume = 0.8;
        }
    },

    stopPlayed: function () {
        sound.played.forEach(function (item) {
            item.pause();
        });
        sound.played.length = 0;
    }
}

function paternWelcomeScreen(to, city) {

    let cityAttributeName = city.getAttribute('name');
	
    let deco = {
        //cleanness:[],

        //usefulHabits:[],

        amazingPeople:['img/city_amazing-people/game_3/face.png', 'img/city_amazing-people/game_2/head.png',
            'img/city_amazing-people/game_5/hands.png', 'img/hero/chipolino.png']

    }

    to.classList.add('welcome-screen-fone');
    let nameElement = document.createElement('h1');
    nameElement.textContent = getNameCity();
    nameElement.className = 'welcome-screen-city';
    to.appendChild(nameElement);

    let button = document.createElement('button');
    button.className = 'welcome-screen-button';
    button.textContent = 'Играть'
    to.appendChild(button);
    button.style.left = ((to.clientWidth - button.offsetWidth) / 2) / + to.clientWidth * 100 + '%';

    for(let i = 0; i < 4; i++){
        let img = document.createElement('img');
        if(!deco[cityAttributeName])
            img.src = 'img/no-foto.jpg';
        else
            img.src = deco[cityAttributeName][i];
        to.appendChild(img);
        img.className = 'welcome-screen _' + i;
    }

    return button;

    function getNameCity() {

        switch(cityAttributeName){
            case 'cleanness':
                return 'Город Чистоты';
            case 'usefulHabits':
                return 'Город Бережливости';
            case 'amazingPeople':
                return 'Город Удивительных Людей';
			case 'security':
                return 'Город Безопасности';
            default:
                return 'Секретный Город';
        }
    }
}

function paternPuzzle(to, options) {

	paternPuzzleObj = {
		"3": createPuzzle3x3,
		"1": createPuzzle5x1,
		"4": createPuzzle4x4,
		__proto__: this
	}
	
    let selector = paternPuzzleObj[options.basketCount]();

    addHero.call(this, to);

    return selector;
	
	function createPuzzle3x3(){
		
		let basket = document.createElement('div');
		basket.classList.add('basket');
		to.appendChild(basket);

		for(let i = 0; i < 3; i++){
			let basketElement = document.createElement('div');
			basketElement.classList.add('basket3x3-element');
			basket.appendChild(basketElement);
	
			for(let o = 0; o < 2; o++){
				let cell = document.createElement('div');
				cell.classList.add('basket3x3-element-cell');
				basketElement.appendChild(cell);
			}
	
			let img = document.createElement('img');
			img.src = this.images[i];
			basketElement.childNodes[0].appendChild(img);
	
			let heapImg = document.createElement('img');
			heapImg.src = this.AcceptImg[i];
			heapImg.setAttribute('data-key', this.keyValue[i]);
			heapImg.classList.add('heap3');
			heapImg.classList.add('heap');
			heapImg.classList.add('heap3-size');
			heapImg.dataset.heap = 3;
			heapImg.setAttribute('draggable', '');
			to.appendChild(heapImg);
		}
		return '.basket3x3-element-cell:nth-of-type(even)';
	}
	
	function createPuzzle5x1() {
	
		let basket = document.createElement('div');
		basket.classList.add('basket');
		to.appendChild(basket);

		let basketElement = document.createElement('div');
		basketElement.classList.add('basket5x1-element');
		basket.appendChild(basketElement);
	
		for(let o = 0; o < 2; o++){
			let cell = document.createElement('div');
			cell.classList.add('basket5x1-element-cell');
			basketElement.appendChild(cell);
		}
	
		let img = document.createElement('img');
		img.src = this.images[0];
		basketElement.childNodes[0].appendChild(img);
	
		for(let i = 0; i < 5; i++){
			let heapImg = document.createElement('img');
			heapImg.src = this.AcceptImg[i];

			if(this.keyValue[0] === i)
				heapImg.setAttribute('data-key', '0');
			
			heapImg.classList.add('heap5');
			heapImg.classList.add('heap');
			heapImg.classList.add('heap5-size');
			heapImg.dataset.heap = 5;
			heapImg.setAttribute('draggable', '');
			to.appendChild(heapImg);
		}
		return '.basket5x1-element-cell:nth-of-type(even)';
	}
	
	function createPuzzle4x4(){
	
	}
}

function paternGameSelected(to, options){

	imageCount = options.imagesCount;
    this.counter = 0;
	let div = document.createElement('div');
	div.className = 'selectedGame wrapper';
	to.appendChild(div);
	
    for(let i = 0; i < imageCount; i++){
        let elem = document.createElement('img');
        elem.src = this.images[i];
        elem.className = 'selectedGame _' + i;
        div.appendChild(elem);
        elem.addEventListener('click', checkSelected.bind(this));

        for(let n = 0; n < this.correct.length; n++)
            if(i == this.correct[n])
                elem.setAttribute('good', '');
    }

    addHero.call(this, to);

    function checkSelected(event) {

        if(event.target.hasAttribute('good')) {
            event.target.classList.add('accept');
            this.counter++;
            sound.playSound(sound.getMark(true));

            if(this.counter == this.correct.length)
                to.dispatchEvent(new CustomEvent('gameover'));
        }
        else {
            event.target.classList.add('cancel');
            sound.playSound(sound.getMark());
        }
    }
}

function paternPartyBoby(to){

    for(let i = 0; i < (this.images.length + this.AcceptImg.length); i++){
        let elem = document.createElement('img');

        if(i < 6){
            elem.src = this.images[i];
            elem.setAttribute('draggable', "");
            elem.setAttribute('data-key', this.keyValue[i]);
            elem.className = this.paternSelector + ' _' + i;
        }else{
            elem.src = this.AcceptImg[i - 6];
            elem.className = 'anti-' + this.paternSelector + ' _-' + (i - 6);
        }

        to.appendChild(elem);
    }

    addHero.call(this, to);

    return '.anti-' + this.paternSelector;
}

function paternShowItems(to) {

    let obj = this;
    this.counter = 0;
    this.area = document.createElement('div');
    to.appendChild(this.area);


    for(let i = 0; i < this.images.length; i++){

        let party = document.createElement('img');
        party.src = this.images[i];
        party.className = this.selector + i;
        this.area.appendChild(party);
    }

    if(this.hero)
        addHero.call(this, to);

    this.bindHandler = this.handler.bind(this);
    this.area.addEventListener('click', this.bindHandler);

    query.call(this);
}

function paternWithoutInteraction(to) {

    for(let i = 0; i < this.images.length; i++){

        let party = document.createElement('img');
        party.src = this.images[i];
        party.className = this.selector;
        to.appendChild(party);
    }

    addHero.call(this, to);
}

function paternGameOver(to) {

    let message = document.createElement('div');
    message.className = 'game-over';
    message.innerHTML = 'Молодец! Повторить?</br>';
    to.appendChild(message);
    let img = document.createElement('img');
    img.src = 'img/fresh.png';
    img.className = 'game-over-refresh';
    message.appendChild(img);
    img.addEventListener('click', event =>{
        materials.numberGame--;
        let arrow = document.querySelector('.arrow.next');
        arrow.dispatchEvent(new MouseEvent('click'));
    })
    message.style.left = (to.clientWidth - message.offsetWidth) / 2 / to.clientWidth * 100 + '%';
    message.style.top = (to.clientHeight - message.offsetHeight) / 2 / to.clientHeight * 100 + '%';
}

//____________________________________________service function______________________________________________________

function addHero(to) {
    if(!this.hero)  return;

    let img = document.createElement('img');
    img.src = this.hero;
    img.className = 'game-area-hero';
    to.appendChild(img);
}

function query() {

    alert(this.query[this.counter]);
}

function handlerShowItems(event) {

    let target = event.target;
    let flag = false;

    switch(materials.numberGame){
        case 0:
            gameBoyFace(this.counter);
            break;
        case 1:
            gameGirlFace(this.counter);
            break;
        case 7:
            game7(this.counter);
            break;
        case 8:
            game8(this.counter);
            break;
        case 9:
            game9.call(this, this.counter);
            break;
    }

    if(flag){
        sound.playSound(sound.getMark(true));
        //alert('Молодец!');
        this.counter++;
    }else{
        sound.playSound(sound.getMark());
        //alert('Попробуй ещё раз!');
    }

    if(this.counter < this.query.length)    query.call(this);
    else {
        this.area.removeEventListener('click', this.bindHandler);
        this.area.dispatchEvent(new CustomEvent('gameover', {bubbles:true, detail: this}));
        delete this.area;
        delete this.bindHandler;
    }

    function gameBoyFace(value) {

        switch(value){
            case 0:
                if(target.classList.contains('_8') || target.classList.contains('_9'))
                    flag = true;
                break;
            case 1:
                if(target.classList.contains('_11'))
                    flag = true;
                break;
            case 2:
                if(target.classList.contains('_2'))
                    flag = true;
                break;
            case 3:
                if(target.classList.contains('_10'))
                    flag = true;
                break;
            case 4:
                if(target.classList.contains('_3'))
                    flag = true;
                break;
            case 5:
                if(target.classList.contains('_1'))
                    flag = true;
                break;
            case 6:
                if(target.classList.contains('_4') || target.classList.contains('_5'))
                    flag = true;
                break;
            case 7:
                if(target.classList.contains('_6') || target.classList.contains('_7'))
                    flag = true;
                break;
        }
    }

    function gameGirlFace(value) {

        switch(value){
            case 0:
                if(target.classList.contains('_10') || target.classList.contains('_11'))
                    flag = true;
                break;
            case 1:
                if(target.classList.contains('_13'))
                    flag = true;
                break;
            case 2:
                if(target.classList.contains('_2'))
                    flag = true;
                break;
            case 3:
                if(target.classList.contains('_12'))
                    flag = true;
                break;
            case 4:
                if(target.classList.contains('_3') || target.classList.contains('_4') ||
                    target.classList.contains('_5'))
                    flag = true;
                break;
            case 5:
                if(target.classList.contains('_1'))
                    flag = true;
                break;
            case 6:
                if(target.classList.contains('_6') || target.classList.contains('_7'))
                    flag = true;
                break;
            case 7:
                if(target.classList.contains('_8') || target.classList.contains('_9'))
                    flag = true;
                break;
        }
    }

    function game7(value) {

        switch(value){
            case 0:
                if(target.classList.contains('_1'))
                    flag = true;
                break;
            case 1:
                if(target.classList.contains('_2'))
                    flag = true;
                break;
            case 2:
                if(target.classList.contains('_3'))
                    flag = true;
                break;
            case 3:
                if(target.classList.contains('_4'))
                    flag = true;
                break;
            case 4:
                if(target.classList.contains('_5'))
                    flag = true;
                break;
            case 5:
                if(target.classList.contains('_6'))
                    flag = true;
                break;
        }
    }

    function game8(value){

        switch(value){
            case 0:
                if(target.classList.contains('_6'))
                    flag = true;
                break;
            case 1:
                if(target.classList.contains('_3'))
                    flag = true;
                break;
            case 2:
                if(target.classList.contains('_5'))
                    flag = true;
                break;
            case 3:
                if(target.classList.contains('_3'))
                    flag = true;
                break;
            case 4:
                if(target.classList.contains('_6'))
                    flag = true;
                break;
            case 5:
                if(target.classList.contains('_5'))
                    flag = true;
                break;
            case 6:
                if(target.classList.contains('_3'))
                    flag = true;
                break;
            case 7:
                if(target.classList.contains('_6'))
                    flag = true;
                break;
            case 8:
                if(target.classList.contains('_5'))
                    flag = true;
                break;
            case 9:
                if(target.classList.contains('_1'))
                    flag = true;
                break;
            case 10:
                if(target.classList.contains('_2'))
                    flag = true;
                break;
        }
    }

    function game9(value){

        if(value < 4){
            if(target.classList.contains('_5') || target.classList.contains('_6'))
                return;

            if(this.selectedArr.every((n)=>{
                if(target.classList.contains(n))
                    return false;
                return true;
                })) {
                this.selectedArr.push(target.classList[1]);
                flag = true;
            }
        }else{
            if(value == 4)  this.selectedArr.length = 0;

            if(!(target.classList.contains('_5') || target.classList.contains('_6')))
                return;

            if(this.selectedArr.every((n)=>{
                    if(target.classList.contains(n))
                        return false;
                    return true;
                })) {
                this.selectedArr.push(target.classList[1]);
                flag = true;
            }
        }
    }
}

/*
export {materials, sound, paternPuzzle, paternPartyBoby, paternShowItems, paternWithoutInteraction,
    paternWelcomeScreen, paternGameOver};*/
