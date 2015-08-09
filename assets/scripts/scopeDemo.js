// required angular.min.js 
String.prototype.toInt = function(){
    return parseInt(this, 10);
}

angular.bootstrap(document.body, []);
var scope = angular.element(document.body).scope();

function SalaryCalculator(){

    this.basic  = 0;
    this.hra    = 0;
    this.salary = 0;

}

SalaryCalculator.prototype.calculate = function(){
    this.salary = this.basic.toInt() + this.hra.toInt();
}

scope.calculator = new SalaryCalculator();

function basicChange(){
    var that = this;
    scope.$apply(function(){
        scope.calculator.basic = that.value;
    });
}

function hraChange(){
    var that = this;
    scope.$apply(function(){
        scope.calculator.hra = that.value;
    });
}

function calculate(){
    scope.$apply(function(){
        scope.calculator.calculate();
    });
}

function bindDirective() {
    var ele = document.querySelectorAll('input[app-model]');
    for(var i=0;i<ele.length;i++) {
        var model = ele[i].attributes['app-model'].value;
        scope.$watch(model, function(newValue, oldValue){
            ele.innerHTML = newValue;
            var salary = newValue.toInt() + scope.calculator.hra.toInt();
            document.querySelector('#salary span').innerHTML = salary;
        });
    }
}

// scope.$watch("calculator.basic", function(newValue, oldValue){
//     document.querySelector('#basic').innerHTML = newValue;
//     var salary = newValue.toInt() + scope.calculator.hra.toInt();
//     document.querySelector('#salary span').innerHTML = salary;
// });

// scope.$watch("calculator.hra", function(newValue, oldValue){
//     document.querySelector('#hra').innerHTML = newValue;
//     var salary = scope.calculator.basic.toInt() + newValue.toInt();
//     document.querySelector('#salary span').innerHTML = salary;
// });

scope.$watch("calculator.salary", function(newValue, oldValue){
    document.querySelector('#salary span').innerHTML = newValue;
});

document.querySelector('#basic').onchange = basicChange;
document.querySelector('#hra').onchange = hraChange;
document.querySelector('#calculate').onclick = calculate;

bindDirective();
