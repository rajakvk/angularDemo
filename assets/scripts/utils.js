var utils = angular.module('utils', []);
utils.filter('limitText', function () {
    return function (data, limitLength) {
        limitLength = limitLength || 20;
        return (data.length > limitLength) ? data.substr(0, limitLength) + '...' : data;
    };
});
