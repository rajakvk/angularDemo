// required angular.min.js 
angular.bootstrap(document.body, []);
var scope = angular.element(document.body).scope();

scope.$watch("name", function(newValue, oldValue){
    console.log('old value:' + oldValue + " new value: "+ newValue);
});

scope.$apply(function(){
    scope.name = 'rajakvk';
});

scope.$apply(function(){
    scope.name = 'ashok';
});

