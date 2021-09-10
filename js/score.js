export default class Score {
    constructor() {

        this.plusButton = document.querySelectorAll('.plus');
        this.minusButton = document.querySelectorAll('.minus');



        this.plusButton.forEach(plusBtn => plusBtn.addEventListener('click', () => this.addValue(plusBtn)));
        this.minusButton.forEach(minusBtn => minusBtn.addEventListener('click', () => this.minusValue(minusBtn)));


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


}

/*
this.resetButton = document.querySelector('#reset');

this.resetButton.for(reset => reset.addEventListener('click', () => this.reset(reset)));

function reset (){
    const clear = document.querySelector('#amount');
    clear.addEventListener('click', () => {
        reset.for(input => input.value='');
    });


}

*/










