import {CanvasView} from './view/CanvasView';
import {CarMain} from './spriets/car-main';
import {CarEnemy} from './spriets/car-enemy';

import CAR from "./images/car1.png";
import CAR_ENEMY from './images/car2.png';

import {
    CAR_WIDTH,
    CAR_HEIGHT,
    CAR_STARTX,
    CAR_STARTY,
    CAR_SPEED,
    CAR_ENEMY_SRARTY
} from './setup';

let gameOver = null;
let score = {value:0, speed: 2};
let reqId: number;

function setGameOver(view: CanvasView){
    view.drawInfo('Game Over!');
    gameOver = false;
}

function startGame(view: CanvasView){
    view.drawInfo('');
    view.drawScore(0);
    score.value = 0;
    

    const car = new CarMain(
        CAR_WIDTH,
        CAR_HEIGHT,
        { x: CAR_STARTX, y: CAR_STARTY},
        CAR,
        CAR_SPEED
    );
    const cars:CarEnemy[] = []

    setInterval(()=>{
        const carEn = new CarEnemy(
            CAR_WIDTH,
            CAR_HEIGHT,
            {x: 200, y: CAR_ENEMY_SRARTY},
            CAR_ENEMY,
            score.speed);
        cars.push(carEn);
        carEn.moveCarEnemy();
    }, 1000)


    gameLoop(view,car, cars);
}

function gameLoop(
    view: CanvasView,
    carMain:CarMain,
    carsEn: CarEnemy[]
){
    view.clear();
     
    view.drawCar(carMain);
    view.drawCarEnemy(carsEn, score);

    if ((carMain.isMovingLeft && carMain.pos.x > 200) || 
    (carMain.isMovingRight && carMain.pos.x < 800 - carMain.weight)){
        carMain.moveCar();
    }
    
    for (let i = 0; i < carsEn.length; i++) {
        if (carMain.pos.x < carsEn[i].pos.x + carsEn[i].weight &&
            carMain.pos.x + carMain.weight > carsEn[i].pos.x &&
            carMain.pos.y < carsEn[i].pos.y + carsEn[i].height &&
            carMain.pos.y + carMain.height > carsEn[i].pos.y) {
            setGameOver(view);
            view.clear();
            cancelAnimationFrame(reqId);
            return;
        }
    }
   


    reqId = requestAnimationFrame(() => gameLoop(view, carMain,carsEn));
}

const view = new CanvasView('#playField');

view.initStartButtom(startGame);