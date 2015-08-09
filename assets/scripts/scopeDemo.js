// required angular.min.js 
angular.bootstrap(document.body, []);
var scope = angular.element(document.body).scope();

function SalaryCalculator(){

    this.basic  = 0;
    this.hra    = 0;
    this.salary = 0;

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
        scope.calculator.salary = parseInt(scope.calculator.basic) + parseInt(scope.calculator.hra);
    });
}

scope.$watch("calculator.basic", function(newValue, oldValue){
    var salary = parseInt(newValue) + parseInt(scope.calculator.hra);
    document.querySelector('#salary span').innerHTML = salary;
});

scope.$watch("calculator.hra", function(newValue, oldValue){
    var salary = parseInt(newValue) + parseInt(scope.calculator.basic);
    document.querySelector('#salary span').innerHTML = salary;
});

scope.$watch("calculator.salary", function(newValue, oldValue){
    document.querySelector('#salary span').innerHTML = newValue;
});

document.querySelector('#basic').onchange = basicChange;
document.querySelector('#hra').onchange = hraChange;
document.querySelector('#calculate').onclick = calculate;