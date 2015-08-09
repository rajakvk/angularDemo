/**
 * adding toInt method to String object
 * author rajakvk <rajakvk at gmail dot com>
 */
if(!String.toInt) {
  /**
   * Returns integer value if a string value is passed.
   * @name toInt
   * @methodOf String
   * @param {*} none 
   * @returns {Number}
   * @example 
   * $('#hra').val().toInt();
   * typeof $('#hra').val();  // string
   * typeof $('#hra').val().toInt();  // number
   */
    String.prototype.toInt = function(){

        return this.length ? Number.parseInt(this, 10) : this;

    }

}

// Class - Model
function SalaryCalculator(){

    this.basic  = 0;
    this.hra    = 0;
    this.salary = 0;
    this.onSalaryChange = null;

}

// method - Behaviour
SalaryCalculator.prototype.calculate = function() {

    this.salary  = this.basic + this.hra;
    if(typeof this.onSalaryChange === 'function')
        this.onSalaryChange();

}

var calculator = new SalaryCalculator();

function updateBasic() {

    calculator.basic = document.querySelector('#basic').value.toInt();
}

function updateHra() {

    calculator.hra = document.querySelector('#hra').value.toInt();
}

// Interfacing method with view
function calculate() {

    calculator.calculate();

}

calculator.onSalaryChange = function() {

    document.querySelector('#salary span').innerHTML = calculator.salary;

}

document.querySelector('#calculate').onclick = calculate;
document.querySelector('#basic').onchange = updateBasic;
document.querySelector('#hra').onchange = updateHra;