function buttonPressed(buttonValue) {
    var resultado = document.getElementById("resultado");

    if (buttonValue == '=') {
        resultado.value = eval(resultado.value);
    }
    else if (buttonValue == 'C') {
        resultado.value = '';
    }
    else if (buttonValue == '+/-') {
        resultado.value = -1 * resultado.value;
    }
    else {
        resultado.value += buttonValue;
    }
}