class Display{
  constructor($prevNumber, $currentNumber) {
    this.$prevNumber = $prevNumber;
    this.$currentNumber = $currentNumber;
    this.calculator = new Calculator();
    this.currentNumber = '';
    this.prevNumber = '';
    this.operator = '';
    this.signs = {
      add: '+',
      subtract: '-',
      divide: '%',
      multiply: 'x'
    }
  }

  getNumber(number) {
    if (number === "." && this.currentNumber.includes(".")) return;
    this.currentNumber = this.currentNumber.toString() + number.toString();
    this.printNumber();
  }

  printNumber() {
    this.$currentNumber.textContent = this.currentNumber;
    this.$prevNumber.textContent = `${this.prevNumber || '0'} ${this.signs[this.operator] || ''} ` ;
  }

  eraseAll() {
    this.currentNumber = '';
    this.prevNumber = '';
    this.operator = undefined;
    this.printNumber();
  }

  erase() {
    this.currentNumber = this.currentNumber.toString().slice(0, -1);
    this.printNumber();
  }

  calculate() {
    const currentNumber = parseFloat(this.currentNumber);
    const prevNumber = parseFloat(this.prevNumber);

    if (isNaN(currentNumber) || isNaN(prevNumber)) return;
    this.currentNumber = this.calculator[this.operator](prevNumber, currentNumber) || '0';
  }

  getOperator(operator) {
    if (this.operator !== 'equal') {
      this.calculate()
    }
    this.operator = operator;
    this.prevNumber = this.currentNumber || this.prevNumber;
    this.currentNumber = '';
    this.printNumber();
  }


}