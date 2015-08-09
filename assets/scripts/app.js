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
        basic   : [],
        hra     : [],
        salary  : []
    };

    this.get = function(id) {
        return data[id];
    }
    this.set = function(id, value){
        data[id] = value;
        var listenerFnArr = listenerFns[id];
        listenerFnArr.forEach(function(listenerFn){
            listenerFn();
        });
    }
    this.addEventListener = function(id, listenerFn) {
        listenerFns[id].push(listenerFn);
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

function SalaryCalculatorView(calculator, $root) {

    function updateBasic() {

        calculator.set('basic', document.querySelector($root + '#basic').value.toInt());
    }

    function updateHra() {

        calculator.set('hra', document.querySelector($root + '#hra').value.toInt());
    }

    // Interfacing method with view
    function calculate() {

        calculator.calculate();

    }

    calculator.addEventListener('basic', function() {

        document.querySelector($root + '#basic').value = calculator.get('basic');

    });
    calculator.addEventListener('hra', function() {

        document.querySelector($root + '#hra').value = calculator.get('hra');

    });

    calculator.addEventListener('salary', function() {

        document.querySelector($root + '#salary span').innerHTML = calculator.get('salary');

    });

    document.querySelector($root + '#calculate').onclick = calculate;
    document.querySelector($root + '#basic').onchange = updateBasic;
    document.querySelector($root + '#hra').onchange = updateHra;

}

var calculator = new SalaryCalculator();
SalaryCalculatorView(calculator, '#view1 ');
SalaryCalculatorView(calculator, '#view2 ');

