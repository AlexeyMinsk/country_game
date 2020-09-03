"use strict";

function GameLogic() {

    let hero = document.getElementById('chipolino');
    let inTown = document.getElementById('in-town');
    let frame = document.getElementById('mode-town');
    let gameArea = document.getElementById('game-area');
    let progress = document.getElementById('progress');

    let moved = false;
    let city;
    let shift = {};
    let movedImg = null;
    let movedImgCoords;
    let frameCoords;
    let cssSelector;
    let curentScaleHero = 1;

    this.initialListener = function () {

        let towns = document.getElementsByClassName('town');
        let exit = frame.getElementsByClassName("exit")[0];
        let arrows = frame.getElementsByClassName('arrow');

        for(let i = 0; i < towns.length; i++){
            //towns[i].addEventListener('click', toTown);
            //towns[i].ondragstart = () => false;
        }

        for(let i = 0; i < arrows.length; i++)
            arrows[i].addEventListener('click', changeGame);

        exit.addEventListener('click', exitTown);
        document.addEventListener('keydown', exitTown);
        gameArea.addEventListener('gameover', gameOver);

        document.body.style.height = document.documentElement.clientHeight + 'px';
        document.body.onresize = () => {
            document.body.style.height = document.documentElement.clientHeight + 'px';
        }
        document.addEventListener('mousemove', () => {
            sound.playSound(sound.mainTheme, true);
            sound.playSound(sound.welcomeContry);
        }, {once:true});
    }//повесить обработчики на города

    function toTown(event) {//обработчик

        if(moved || city == event.target)   return;
        if(city)    city.style.zIndex = '';
        city = event.target;
        city.style.zIndex = 0;
        moveHero();

        function moveHero() {

            let townCoords = city.getBoundingClientRect();
            let heroRoad = {};
            const step = 5;
            moved = true;
            heroRoad.top = hero.getBoundingClientRect().top;
            heroRoad.left = hero.getBoundingClientRect().left;

            heroRoad.verticalDistance = heroRoad.top +  hero.offsetHeight - townCoords.bottom -
                hero.offsetHeight / 2 * (1 - city.dataset.distance);
            heroRoad.horizontalDistance = townCoords.left - heroRoad.left -
                hero.offsetWidth / 2 * (1 - city.dataset.distance);
            let counterStep = Math.abs(heroRoad.verticalDistance) > Math.abs(heroRoad.horizontalDistance) ?
                heroRoad.verticalDistance / step : heroRoad.horizontalDistance / step;
            counterStep = Math.round(Math.abs(counterStep));
            heroRoad.verticalSpeed = heroRoad.verticalDistance / counterStep;
            heroRoad.horizontalSpeed = heroRoad.horizontalDistance / counterStep;
            heroRoad.stepScale = (curentScaleHero - city.dataset.distance) / counterStep;

            let stop = setInterval(() => {
                if(!counterStep-- ) {//цикл закончен
                    clearInterval(stop);
                    //city.style.zIndex = '';
                    moved = false;
                    curentScaleHero = +city.dataset.distance;
                    openTown();
                    return;
                }

                heroRoad.top = heroRoad.top - heroRoad.verticalSpeed;
                hero.style.top = heroRoad.top + 'px';
                heroRoad.left = heroRoad.left + heroRoad.horizontalSpeed;
                hero.style.left = heroRoad.left + 'px';
                curentScaleHero -= heroRoad.stepScale;
                scaleHero(curentScaleHero, heroRoad.horizontalDistance);
            },10);

            function scaleHero(value, mirror) {
                hero.style.transform = `scale(${mirror < 0 ? -value : value},${value})`;
            }
        }//движение героя на главном экране
    }

    function exitTown(event) {
        if(event.type == 'keydown' && event.keyCode != 27)
            return;

        inTown.classList.add('close');
        let arrows = inTown.getElementsByClassName('arrow');
        arrows[0].classList.add('close');
        arrows[1].classList.add('close');
        frame.style.opacity = "";
        frame.style.transform = "";
        gameArea.innerHTML = "";
        sound.stopPlayed();
        sound.playSound(sound.mainTheme, true);
    }

    function openTown() {

        sound.stopPlayed();
        let demonstrationStep = 0.05;
        materials.numberGame = 0;

        inTown.classList.remove('close');

        let stop = setInterval(function () {
            frame.style.opacity = +frame.style.opacity + demonstrationStep;
            frame.style.transform = 'scale(' + +frame.style.opacity + ')';
            if(frame.style.opacity == 1) {
                clearInterval(stop);
                frameCoords = frame.getBoundingClientRect();
            }
        }, 20);

        welcomeScreen();
    }

    function welcomeScreen() {

        paternWelcomeScreen(gameArea, city).addEventListener('click', changeGame);
        sound.playSound(sound.welcome, true);
    }

    function gameOver(event) {

        paternGameOver(gameArea);
    }

    function gameLauncer() {

        let nameCity = city.getAttribute('name');

        if(materials.numberGame == materials[nameCity].length)
            materials.numberGame = 0;
        else if(materials.numberGame < 0)
            materials.numberGame = materials[nameCity].length - 1;

        progress.style.width = materials.numberGame / (materials[nameCity].length - 1) * 100 +'%';
        let objData = materials[nameCity][materials.numberGame];

        cssSelector = objData.patern(gameArea, {
			imagesCount: objData.images.length,
			basketCount: objData.basket || 3
		});
        addEventMousedown();
    }

    function changeGame(event) {

        gameArea.innerHTML = "";

        if(event.target.classList.contains('next'))
            materials.numberGame++;
        else if(event.target.classList.contains('back'))
            materials.numberGame--;
        else{
            let arrows = inTown.getElementsByClassName('arrow');
            arrows[0].classList.remove('close');
            arrows[1].classList.remove('close');
            gameArea.classList.remove('welcome-screen-fone');
        }

        gameLauncer();
    }

    function addEventMousedown() {

        let DnD_element = gameArea.querySelectorAll('[draggable]');
		
        for(let i = 0; i < DnD_element.length; i++){
            DnD_element[i].addEventListener('mousedown', startDragAndDrop);
        }
    }

    function startDragAndDrop(event) {//вешает обработчики mousemove, mouseup определяет movedImg фиксирует сдвиг
		
        movedImg = event.target;
		checkMovedImg(movedImg);
        movedImg.style.zIndex = '1';
        movedImg.ondragstart = () => false;
        movedImgCoords = movedImg.getBoundingClientRect();

        let cells = gameArea.querySelectorAll(cssSelector);
		
        for(let i = 0; i < cells.length; i++) {
            сellCoords[i] = cells[i].getBoundingClientRect();
        }

        shift.x = event.clientX - movedImgCoords.left;
        shift.y = event.clientY - movedImgCoords.top;

        inTown.addEventListener("mousemove", targetMove);
        inTown.addEventListener('mouseup', endDrag);
    }

    function targetMove(event) {

        movedImg.style.left = event.clientX - frameCoords.left - shift.x + 'px';
        movedImg.style.top = event.clientY - frameCoords.top - shift.y + 'px';
        movedImgCoords = movedImg.getBoundingClientRect();
        checkPosition();
    }

    function checkPosition() {
		
        const areal = 20;

        for(let i = 0; i < сellCoords.length; i++) {

            if (сellCoords[i].left - areal < movedImgCoords.left)
                if (сellCoords[i].right + areal > movedImgCoords.right)
                    if (сellCoords[i].top - areal < movedImgCoords.top)
                        if (сellCoords[i].bottom + areal > movedImgCoords.bottom) {
                            selectCell(i);
                            break;
                        }

            deleteSelect();
        }


        function selectCell(num) {
            if(movedImg.dataset.key == num){
                movedImg.classList.add('accept');
                сellCoords.key = num;
            }else{
                movedImg.classList.add('cancel');
            }
        }

        function deleteSelect() {
            movedImg.classList.remove('accept');
            movedImg.classList.remove('cancel');
        }
    }

    function endDrag(event) {

        inTown.removeEventListener("mousemove", targetMove);
        inTown.removeEventListener("mouseup", endDrag);

        if(movedImg.classList.contains('accept')){
            movedImg.style.left = (сellCoords[сellCoords.key].left - frameCoords.left) /
                gameArea.clientWidth * 100 + '%';
            movedImg.style.top = (сellCoords[сellCoords.key].top - frameCoords.top) /
                gameArea.clientHeight * 100 + '%';
            movedImg.removeEventListener('mousedown', startDragAndDrop);
            movedImg.removeAttribute('data-key');
            sound.playSound(sound.getMark(true));
            end();
        }else {
            movedImg.classList.remove('cancel');
            movedImg.style.left = '';
            movedImg.style.top = '';
			checkMovedImg(movedImg, 'cancel');
            sound.playSound(sound.getMark());
        }

        movedImg.style.zIndex = '';
        movedImg.classList.remove('accept');
        movedImg = null;

        function end() {

            if(!(gameArea.querySelector('[data-key]')))
                gameArea.dispatchEvent(new CustomEvent('gameover'));
        }
    }
	
	function checkMovedImg(img, act = "start"){
	
		if(img.dataset.heap == 5 || img.dataset.heap == 4){
			if(act == "start"){
				img.classList.add("heap3-size");
				img.classList.remove("heap5-size");
				img.classList.remove("heap4-size");
				
			}
			else if(act == "cancel"){
				img.classList.add("heap" + img.dataset.heap + "-size");
				img.classList.remove("heap3-size");
			}
		}
	}
};
