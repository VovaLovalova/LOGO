const priceForOneBefore = document.querySelector('#price-for-one-before');
const priceForOneAfter = document.querySelector('#price-for-one-after');
const priceTotalBefore = document.querySelector('#price-total-before');
const priceTotalAfter = document.querySelector('#price-total-after');

const buttonMinus = document.querySelector('#button-minus');
const buttonPlus = document.querySelector('#button-plus');

const output = document.querySelector('#amount-output');

function checkOutput () {
    let number = Number(output.value);
    if (number === 1) {
    buttonMinus.classList.remove('amount__button--minus');
    buttonMinus.classList.add('amount__button--minus-disabled');
    }
}

function onPlusClick () {
    let number = Number(output.value);
    number += 1;
    output.value = number;
    buttonMinus.classList.add('amount__button--minus');
    buttonMinus.classList.remove('amount__button--minus-disabled');
}

function onMinusClick () {
    let number = Number(output.value);
    if (number > 1) {
        let number = Number(output.value);
        number -= 1;
        output.value = number;
    }
    checkOutput();
}

checkOutput();

buttonMinus.addEventListener('click', onMinusClick);

buttonPlus.addEventListener('click', onPlusClick);

// function getPriceTotalBefore () {
//     let price = priceForOneBefore.value;

// }

console.log(priceForOneBefore.length);