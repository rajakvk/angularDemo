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

}

// method - Behaviour
SalaryCalculator.prototype.calculate = function() {

    this.salary  = this.basic + this.hra;
    return this.salary;

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

    var salary = calculator.calculate();

    // still view not dumb enough; after invoking calculate method only salary updated
    document.querySelector('#salary span').innerHTML = salary;

}

document.querySelector('#calculate').onclick = calculate;
document.querySelector('#basic').onchange = updateBasic;
document.querySelector('#hra').onchange = updateHra;