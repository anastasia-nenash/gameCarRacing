import {Vector} from '../types';
import {Car} from './car'

import randomInt from '../setup'

export class CarEnemy extends Car{
    
    constructor(
        carWeight: number,
        carHeight: number,
        position: Vector,
        image: string,
        carSpeed: number
        
    ){
        super(carWeight, carHeight, position, image, carSpeed);
        this.randPos();
    }


    moveCarEnemy(): void{
        let v = this.speed;
        setInterval(()=>{ 
            this.pos.y += v;
        },10);
    }
    randPos(): void{
        this.pos.x = randomInt(200, 720);
    }

}