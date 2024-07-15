function checkDrivingAge() {
    let age = prompt("Introduce tu edad:");
    if (age !== null) {
        age = parseInt(age);
        if (age >= 18) {
            alert("Ya puedes conducir.");
        } else {
            alert("No puedes conducir aún.");
        }
    }
}

function checkGrade() {
    let nota = prompt("Introduce tu nota:");
    if (nota !== null) {
        nota = parseFloat(nota);
        let calificacion;
        if (nota >= 0 && nota < 3) {
            calificacion = "Muy deficiente";
        } else if (nota >= 3 && nota < 5) {
            calificacion = "Insuficiente";
        } else if (nota >= 5 && nota < 6) {
            calificacion = "Suficiente";
        } else if (nota >= 6 && nota < 7) {
            calificacion = "Bien";
        } else if (nota >= 7 && nota < 9) {
            calificacion = "Notable";
        } else if (nota >= 9 && nota <= 10) {
            calificacion = "Sobresaliente";
        } else {
            calificacion = "Nota inválida";
        }
        alert("Tu calificación es: " + calificacion);
    }
}

function concatenateStrings() {
    let result = "";
    while (true) {
        let input = prompt("Introduce una cadena de texto (o pulsa cancelar para finalizar):");
        if (input === null) {
            break;
        }
        if (result) {
            result += "-" + input;
        } else {
            result = input;
        }
    }
    alert("Cadenas concatenadas: " + result);
}

function calcularLetraDNI() {
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    while (true) {
        let numero = prompt("Introduce el número del DNI (entre 0 y 99999999) o pulsa cancelar para salir:");
        if (numero === null) {
            break;
        }
        numero = parseInt(numero);
        if (isNaN(numero) || numero < 0 || numero > 99999999) {
            alert("Número inválido. Por favor, introduce un número entre 0 y 99999999.");
        } else {
            let resto = numero % 23;
            let letra = letras.charAt(resto);
            alert("La letra de tu DNI es: " + letra);
        }
    }
}
