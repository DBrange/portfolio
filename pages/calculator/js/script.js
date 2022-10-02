const d = document;

const $numbers = d.querySelectorAll('.number');
const $operators = d.querySelectorAll('.operator');
const $prevNumber = d.querySelector('.prev-number');
const $currentNumber = d.querySelector('.current-number');

const display = new Display($prevNumber, $currentNumber);

const calc = new Calculator()

$numbers.forEach(el => {
  el.addEventListener('click', () => display.getNumber(el.innerHTML))
})

$operators.forEach(el => {
  el.addEventListener('click', () => display.getOperator(el.value))
})