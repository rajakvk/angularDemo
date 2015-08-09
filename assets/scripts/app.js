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

// Interfacing method with view
function calculate() {

    var calculator = new SalaryCalculator();
        calculator.basic   = document.querySelector('#basic').value.toInt(),
        calculator.hra     = document.querySelector('#hra').value.toInt();

        // Calculate depends on basic, hra value (to be populated before invoking)
        var salary = calculator.calculate();

    document.querySelector('#salary span').innerHTML = salary;

}

document.querySelector('#calculate').onclick = calculate;