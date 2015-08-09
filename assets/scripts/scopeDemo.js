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
    this.salary = this.basic + this.hra;
}

scope.calculator = new SalaryCalculator();

// function calculate(){
//     scope.$apply(function(){
//         scope.calculator.calculate();
//     });
// }

function bindDirective() {
    var ele = document.querySelectorAll('input[app-model]');
    for(var i=0;i<ele.length;i++) {

        var model = ele[i].attributes['app-model'].value;
        var that = ele[i];
        scope.$watch(model, function(newValue, oldValue){
            that.innerHTML = newValue;
        });

        ele[i].onchange = function(){
            var that = this;
            var model = this.attributes['app-model'].value;
            scope.$apply(function(){
                scope.$eval(model +' = ' + that.value);
            });
        }
    }
}

function onewayDirective() {
    var ele = document.querySelectorAll('[app-bind]');
    for(var i=0;i<ele.length;i++) {
        var model = ele[i].attributes['app-bind'].value;
        var that = ele[i];
        scope.$watch(model, function(newValue, oldValue){
            that.innerHTML = newValue;
        });
    }
}

function appClickDirective() {
    var ele = document.querySelectorAll('[app-click]');
    for(var i=0;i<ele.length;i++) {
        var that = ele[i];
        ele[i].onclick = function(){
            var model = that.attributes['app-click'].value;
            scope.$apply(function(){
                scope.$eval(model);
            })
        }
    }
}
scope.$watch('calculator.salary', function(newValue, oldValue){
    document.querySelector('#salary').innerHTML = newValue;
});
// document.querySelector('#calculate').onclick = calculate;

bindDirective();
onewayDirective();
appClickDirective();