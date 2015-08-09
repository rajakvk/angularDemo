// required angular.min.js 
angular.bootstrap(document.body, []);
var scope = angular.element(document.body).scope();

function SalaryCalculator(){

    this.basic  = 0;
    this.hra    = 0;
    this.salary = 0;

}

scope.calculator = new SalaryCalculator();

