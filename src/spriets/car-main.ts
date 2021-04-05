import {Vector} from '../types';
import { Car } from './car';

export class CarMain extends Car {
    private moveLeft: boolean;
    private moveRight: boolean;
    constructor(
        carWeight: number,
        carHeight: number,
        position: Vector,
        image: string,
        carSpeed: number
    ){
        super(carWeight, carHeight, position, image, carSpeed);
        document.addEventListener('keydown', this.handleKeyDown);
        document.addEventListener('keyup', this.handleKeyUp);
        this.moveLeft = false;
        this.moveRight = false;
    }
    get isMovingLeft(): boolean {
        return this.moveLeft;
    }
    
    get isMovingRight(): boolean {
        return this.moveRight;
    }


    handleKeyUp = (e: KeyboardEvent): void => {
        if (e.key === 'ArrowLeft' || e.code === 'ArrowLeft') this.moveLeft = false;
        if (e.key === 'ArrowRight' || e.code === 'ArrowRight') this.moveRight = false;
    }
    handleKeyDown = (e: KeyboardEvent): void => {
        if (e.key === 'ArrowLeft' || e.code === 'ArrowLeft') this.moveLeft = true;
        if (e.key === 'ArrowRight' || e.code === 'ArrowRight') this.moveRight = true;
    }
    moveCar(): void {
        if (this.moveLeft) this.setPos = {x:this.pos.x -= this.speed,y:this.pos.y};
        if (this.moveRight) this.setPos = { x:this.pos.x += this.speed,y:this.pos.y};
    }
    
}