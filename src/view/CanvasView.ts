import { CarEnemy } from '~/spriets/car-enemy';
import {Car} from '../spriets/car'

export class CanvasView{
    canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D | null;
    private scoreDisplay: HTMLObjectElement | null;
    private start: HTMLObjectElement | null;
    private info: HTMLObjectElement | null;

    constructor(canvasName : string) {
        this.canvas = document.querySelector(canvasName) as HTMLCanvasElement;
        this.context = this.canvas.getContext('2d');
        this.scoreDisplay = document.querySelector('#score');
        this.info = document.querySelector('#info');
        this.start = document.querySelector('#start'); 

    }
    clear() : void {
        this.context?.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    initStartButtom(startFunction : (view: CanvasView) => void) : void{
        this.start?.addEventListener('click', () => startFunction(this));
    }

    drawScore(score: number): void{
        if (this.scoreDisplay) this.scoreDisplay.innerHTML = score.toString();
    }

    drawInfo(text: string): void{
        if (this.info) this.info.innerHTML = text;
    }

    drawCar(carM: Car): void{
        if (!carM) return;

        this.context?.drawImage(
            carM.image,
            carM.pos.x,
            carM.pos.y,
            carM.weight,
            carM.height
        );
    }
    drawCarEnemy(carEn: CarEnemy[], score: any): void {
        for (let i = 0; i < carEn.length; i++) {
            this.drawCar(carEn[i]);
            if (carEn[i].pos.y > 550) {
                carEn.splice(i, 1);
                score.value++;
                if (score.value % 5 == 0 && score.value != 0) {
        
                    score.speed += 1;
                    if (score.time > 300){
                        score.time -= 300;
                    }
                
                }
                this.drawScore(score.value);
            }
        }


    }
}