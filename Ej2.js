function random() {
    var numero = Math.floor(Math.random() * (100 - 0) + 0)
    contador=0
    intentos=5
        while (contador != 6) {
            var numero_usuario = prompt("Dame un número para comprobar si has acertado: ")
            if (numero_usuario != Number(numero_usuario)) {
                alert("Solo se aceptan números")
                contador--
                intentos++
            }else{

            
           
                if (Number(numero_usuario) != numero ) {
                    if (numero < numero_usuario) {
                        alert("El número es menor, te quedan " + intentos + " intentos")

                        
                    }else{
                        alert("El número es mayor, te quedan " + intentos + " intentos")
                    }

                }
                if (Number(numero_usuario) == numero) {
                    contador++
                    alert("Has acertado el número en el intento " + contador)
                    break;
                    
                }

                if (contador == 5) {
                    alert("Has usado todos tus intentos, por lo cual pierdes")
                    var opcion = prompt("¿Quieres volver a jugar? Si | No")
                    var opcion = opcion.toLowerCase()
                    if (opcion == "si") {
                        contador=0
                        intentos=5
                        
                    }else{
                        break;
                    }
                }
            }
            contador++ 
            intentos--        
            console.log("El numero secreto es: " + numero)
            console.log("Contador "+contador)
        }
}


random()