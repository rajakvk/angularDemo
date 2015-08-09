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

    var data = {
        basic  : 0,
        hra    : 0,
        salary : 0
    },
    listenerFns = {
        basic   : null,
        hra     : null
    };

    this.get = function(id) {
        return data[id];
    }
    this.set = function(id, value){
        data[id] = value;
        var listenerFn = listenerFns[id];
        if(typeof listenerFn === 'function')
            listenerFn();
    }
    this.addEventListener = function(id, listenerFn) {
        listenerFns[id] = listenerFn;
    }
    //this.onSalaryChange = null;

}

// method - Behaviour
SalaryCalculator.prototype.calculate = function() {

    var salary = this.get('basic') + this.get('hra');
    this.set('salary', salary);
    /*if(typeof this.onSalaryChange === 'function')
        this.onSalaryChange();*/

}

var calculator = new SalaryCalculator();

function updateBasic() {

    calculator.set('basic', document.querySelector('#basic').value.toInt());
}

function updateHra() {

    calculator.set('hra', document.querySelector('#hra').value.toInt());
}

// Interfacing method with view
function calculate() {

    calculator.calculate();

}

calculator.addEventListener('basic', function() {

    document.querySelector('#basic').value = calculator.get('basic');

});
calculator.addEventListener('hra', function() {

    document.querySelector('#hra').value = calculator.get('hra');

});

calculator.addEventListener('salary', function() {

    document.querySelector('#salary span').innerHTML = calculator.get('salary');

});

document.querySelector('#calculate').onclick = calculate;
document.querySelector('#basic').onchange = updateBasic;
document.querySelector('#hra').onchange = updateHra;