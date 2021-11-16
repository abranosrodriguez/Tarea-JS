/**
    * Programa para generar un número aleatorio con un máximo de 5 intentos para un usuario y si no lo hacierta tiene la posibilidad de volverlo a intentar
    * @function random
    * @property {number} numero Es el numero generado
    * @property {number} contador Es un contador
    * @property {number} intentos Cuenta el numero de intentos, max 5 y va restando hasta 0
    * @property {number} numero_usuario El usuario da un numero para saber si acertó
    * @property {number} opcion Le preguntamos al usuario si quiere volver a jugar
*/
function random() {
    var numero = Math.floor(Math.random() * (100 - 0) + 0) //Generamos el número aleatorio
    contador = 0
    intentos = 5
    while (contador != 6) {
        var numero_usuario = prompt("Dame un número para comprobar si has acertado: ") //Le pedimos un numero al usuario
        if (numero_usuario != Number(numero_usuario)) {
            alert("Solo se aceptan números")
            contador--
            intentos++
        } else {



            if (Number(numero_usuario) != numero) { //Le decimos al usuario que si es menor o mayor al que ha introducido
                if (numero < numero_usuario) {
                    alert("El número es menor, te quedan " + intentos + " intentos")


                } else {
                    alert("El número es mayor, te quedan " + intentos + " intentos")
                }

            }
            if (Number(numero_usuario) == numero) {
                contador++
                alert("Has acertado el número en el intento " + contador)
                break;

            }

            if (contador == 5) { //Si el usuario gasto todos los intentos le pregunta si quieres volver a jugar o no
                alert("Has usado todos tus intentos, por lo cual pierdes")
                var opcion = prompt("¿Quieres volver a jugar? Si | No")
                var opcion = opcion.toLowerCase()
                if (opcion == "si") {
                    contador = 0
                    intentos = 5

                } else {
                    break;
                }
            }
        }
        contador++
        intentos--
        console.log("El numero secreto es: " + numero)
        console.log("Contador " + contador)
    }
}


random()