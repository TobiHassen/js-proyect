function calculadora() {
let n1 = parseFloat(prompt("Ingrese un numero"));
let option = prompt("Ingrese la operacion quiere hacer  * + - /");
let n2 = parseFloat(prompt("Ingrese un numero"));
let res;
let esc;


switch (option) {
    case "*":
        res = multiplicar(n1, n2);
        alert(n1 + "*" + n2 + "=" + res);
        esc = prompt("Ingrese esc para salir o enter para continuar");
    break;

    case "+":
        res = sumar(n1, n2);
        alert(n1 + "+" + n2 + "=" + res);
        esc = prompt("Ingrese esc para salir o enter para continuar");
    break;

    case "-":
        res = restar(n1, n2);
        alert(n1 + "-" + n2 + "=" + res);
        esc = prompt("Ingrese esc para salir o enter para continuar");
    break;


    case "/":
        if (n2 == 0) {
            alert("No se puede dividir por 0, por favor ingrese otro divisor");
            n2 = parseFloat(prompt("Ingrese otro divisor"));
        }
        res = dividir(n1, n2);
        alert(n1 + "/" + n2 + "=" + res);
        esc = prompt("Ingrese esc para salir o enter para continuar");
    break;


    case "t":
        for (let i = 1; i <= n2; i++) {
            res = n1 * i;
            alert(n1 + "*" + i + "=" + res);
        }
        esc = prompt("Ingrese esc para salir o enter para continuar");
    break;


    default:
        alert("Opción no válida. Por favor ingrese una opción válida.");
        break;
}

return esc;
}

function multiplicar(n1, n2) {
    return n1 * n2;
}

function sumar(n1, n2) {
    return n1 + n2;
}

function restar(n1, n2) {
    return n1 - n2;
}


function dividir(n1, n2) {
    return n1 / n2;
}

let resultado = calculadora();
console.log(resultado);