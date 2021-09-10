export default class Score {
    constructor() {

        this.plusButton = document.querySelectorAll('.plus');
        this.minusButton = document.querySelectorAll('.minus');
        this.resetButton = document.querySelector('#reset');


        this.plusButton.forEach(plusBtn => plusBtn.addEventListener('click', () => this.addValue(plusBtn)));
        this.minusButton.forEach(minusBtn => minusBtn.addEventListener('click', () => this.minusValue(minusBtn)));
        this.resetButton.for(reset => reset.addEventListener('click', () => this.reset(reset)));

    };



    addValue(plusBtn) {
        const input = plusBtn.previousElementSibling;

        input.value = parseInt(input.value) + 1;
        this.getValue();
    };

    minusValue(minusBtn) {
        const input = minusBtn.nextElementSibling;

        input.value = parseInt(input.value) - 1;

        this.getValue();

    };

    getValue(){
        const arr = document.querySelectorAll('.input')
        let total= 0;
        for(let i = 0; i < arr.length; i++){
            if(parseInt(arr[i].value)){
                total += parseInt(arr[i].value);
            }
        }

        document.querySelector('#amount').value = total;
    }

reset(){
    plz.forEach(input => input.value = '');
}


}










