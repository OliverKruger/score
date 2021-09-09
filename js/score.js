export default class Score{

    constructor() {

       this.plusButton = document.querySelector('#plus');
        this.minusButton = document.querySelector('#minus');

        this.plusButton.addEventListener('click', (e) => this.addValue(e));
        this.minusButton.addEventListener('click', (e) => this.minusValue(e));




    }

    addValue(e){

    };

    minusValue(e){


    };
}