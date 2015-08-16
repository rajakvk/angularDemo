var utils = angular.module('utils', []);
utils.value('defaultLimitLength', 20);
utils.filter('limitText', function (defaultLimitLength) {
    return function (data, limitLength) {
        limitLength = limitLength || defaultLimitLength;
        return (data.length > limitLength) ? data.substr(0, limitLength) + '...' : data;
    };
});
