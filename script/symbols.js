const comment = document.querySelector('.comments__field');
const symbols = document.querySelector('.comments__symbols');

function onCountSymbols() {
    const text = comment.value;
    const textlength = text.length;
    symbols.textContent = `${textlength}`;
}

comment.addEventListener('input', onCountSymbols);