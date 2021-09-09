export default class Score {
    constructor() {


        this.plusButton = document.querySelectorAll('.plus');
        this.minusButton = document.querySelectorAll('.minus');

        this.plusButton.forEach(plusBtn => plusBtn.addEventListener('click', () => this.addValue(plusBtn)));
        this.minusButton.forEach(minusBtn => minusBtn.addEventListener('click', () => this.minusValue(minusBtn)));

    }

    addValue(plusBtn) {
        const input = plusBtn.previousElementSibling;

        input.value = parseInt(input.value) + 1;
    };

    minusValue(minusBtn) {
        const input = minusBtn.nextElementSibling;

        input.value = parseInt(input.value) - 1;

    };

}