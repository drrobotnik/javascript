const encodeRot13 = str => str.split('')
    .map(char => String.fromCharCode(
        char.charCodeAt(0) + (char.toLowerCase() < 'n' ? 13 : -13)
    )).join('');

const decodeRot13 = str => str.split('')
    .map(char => String.fromCharCode(
        char.charCodeAt(0) + (char.toLowerCase() < 'n' ? 13 : -13)
    )).join('');


let encode = document.getElementById('encode');
let decode = document.getElementById('decode');
let output = document.getElementById('textarea-input');

encode.addEventListener('click', () => {
    output.value = encodeRot13(output.value);
});

decode.addEventListener('click', () => {
    output.value = decodeRot13(output.value);
});