let input = document.getElementById('input');
let input2 = document.getElementById('input2');
let div = document.getElementById('element');

function setInnerText(input, input2) {
    switch (input.value) {
        case 'element':
            div.innerText = input2.value;
            break;
        default:
            div.innerText = 'false';
            break;
    }
}