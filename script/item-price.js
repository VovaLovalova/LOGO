const priceForOneBefore = document.querySelector('#price-for-one-before');
const priceForOneAfter = document.querySelector('#price-for-one-after');
const priceTotalBefore = document.querySelector('#price-total-before');
const priceTotalAfter = document.querySelector('#price-total-after');

const buttonMinus = document.querySelector('#button-minus');
const buttonPlus = document.querySelector('#button-plus');

const output = document.querySelector('#amount-output');

function getPriceBeforeCount () {
    let forOneBefore = Number(priceForOneBefore.value);
    let number = Number(output.value);
    let totalBefore = forOneBefore * number;
    priceTotalBefore.value = totalBefore;
}

function getPriceAfterCount () {
    let forOneAfter = Number(priceForOneAfter.value);
    let number = Number(output.value);
    let totalAfter = forOneAfter * number;
    priceTotalAfter.value = totalAfter;
}

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
    getPriceBeforeCount();
    getPriceAfterCount();
}

function onMinusClick () {
    let number = Number(output.value);
    if (number > 1) {
        let number = Number(output.value);
        number -= 1;
        output.value = number;
    }
    checkOutput();
    getPriceBeforeCount();
    getPriceAfterCount();
}

getPriceBeforeCount();
getPriceAfterCount();
checkOutput();

buttonMinus.addEventListener('click', onMinusClick);

buttonPlus.addEventListener('click', onPlusClick);
