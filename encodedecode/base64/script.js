let encode = document.getElementById('encode');
let decode = document.getElementById('decode');
let output = document.getElementById('textarea-input');

encode.addEventListener('click', () => {
    output.value = btoa(output.value);
});

decode.addEventListener('click', () => {
    output.value = atob(output.value);
});