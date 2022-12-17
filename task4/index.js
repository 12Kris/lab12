let amount = document.getElementById('input1');
let quantity = document.getElementById('input2');
let result = document.getElementById('result');

function getSeconds(amount, quantity) {
    quantity2 = parseInt(quantity.value);
    switch (amount.value) {
        case 'години':
            result.innerHTML = 3600 * quantity2;
            break;
        case 'хвилини':
            result.innerHTML = 60 * quantity2;
            break;
        case 'секунди':
            result.innerHTML = quantity2;
            break;
        default:
            result.innerHTML = -1;
            break;
    }

}