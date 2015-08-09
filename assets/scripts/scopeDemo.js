// required angular.min.js 
angular.bootstrap(document.body, []);
var scope = angular.element(document.body).scope();

function SalaryCalculator(){

    this.basic  = 0;
    this.hra    = 0;
    this.salary = 0;

}

scope.calculator = new SalaryCalculator();

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
