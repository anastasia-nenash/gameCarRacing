const canvas: HTMLCanvasElement | null = document.querySelector('#playField');

export const CAR_WIDTH = 50;
export const CAR_HEIGHT = 100;
export const CAR_SPEED = 10;
export const CAR_STARTX = 470;
export const CAR_STARTY = 450;
export const CAR_ENEMY_SRARTY = 100;


export default function randomInt (min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}