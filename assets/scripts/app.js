function calculate() {
    var basic = document.querySelector('#basic').value;
    var hra = document.querySelector('#hra').value;
    var salary = basic + hra;
    document.querySelector('#salary span').innerHTML = salary;
}
