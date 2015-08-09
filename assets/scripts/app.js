function calculate() {

    var basic   = document.querySelector('#basic').value,
        hra     = document.querySelector('#hra').value,
        salary  = Number.parseInt(basic) + Number.parseInt(hra);

    document.querySelector('#salary span').innerHTML = salary;

}
