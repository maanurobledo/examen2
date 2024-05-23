import { calculate, clean } from './buildings.js';

export function registerEvents() {
    const calculateBtn = document.getElementById('calculate-btn');
    const cleanBtn = document.getElementById('clean-btn');

    calculateBtn.addEventListener('click', calculate);
    cleanBtn.addEventListener('click', clean);
}
