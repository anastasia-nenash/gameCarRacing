import {Vector} from '../types';

export class Car {
    private carImage : HTMLImageElement = new Image();
    constructor(
        private carWeight: number,
        private carHeight: number,
        private position: Vector,
        image: string,
        private carSpeed: number
        
    ){
        this.carImage.src = image;
    }

    get weight(): number{
        return this.carWeight;
    }
    get height(): number{
        return this.carHeight;
    }
    get pos(): Vector{
        return this.position;
    }
    get speed(): number{
        return this.carSpeed;
    }
    get image(): HTMLImageElement{
        return this.carImage;
    }

    set setPos(pos : Vector){
        this.position = pos;
    }
    set setSpeed(v : number){
        this.carSpeed = v;
    }

}