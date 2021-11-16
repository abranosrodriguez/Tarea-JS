/**
 * @function retirada_billetes
    * @property {number} cantidad Le pedimos al usuario una cantidad de dinero
    * @property {number} billetes
    * @property {boolean} isCero Si el resultado es 0 se cambia y finaliza el bucle
    * @property {number} billete500,billetes200,billetes100,billetes50,billetes20,billetes10,billetes5 Para meter la cantidad que se ha sacado de dicho billete 
 */

/**
 * @function multiplo_de_5_0
    * @property {number} cantidad_a_testar Comprobará si es multiplo el número introducido
    * @property {boolean} isMultiplo Si el resultado es true hrá el programa en caso contrario no
 */
function retirada_billetes(cantidad) {
    var cantidad = cantidad
    var billetes
    var isCero = false
    var billete500 = 0, billete200 = 0, billete100 = 0, billete50 = 0, billete50 = 0, billete20 = 0, billete10 = 0, billete5 = 0
    while (!isCero) {
        if (cantidad >= 500) {
            cantidad = cantidad - 500
            billete500++
        } else if (cantidad >= 200) {
            cantidad = cantidad - 200
            billete200++
        } else if (cantidad >= 100) {
            cantidad = cantidad - 100
            billete100++
        } else if (cantidad >= 50) {
            cantidad = cantidad - 50
            billete50++
        } else if (cantidad >= 20) {
            cantidad = cantidad - 20
            billete20++
        } else if (cantidad >= 10) {
            cantidad = cantidad - 10
            billete10++
        } else if (cantidad >= 5) {
            cantidad = cantidad - 5
            billete5++
        } else {
            isCero = !isCero //isCero = true
        }
    }
    billetes = "500 ->" + billete500 +
        "\n200 ->" + billete200 +
        "\n100 ->" + billete100 +
        "\n50 ->" + billete50 +
        "\n20 ->" + billete20 +
        "\n10 ->" + billete10 +
        "\n5 ->" + billete5
    return billetes
}

function multiplo_de_5_0(cantidad) {
    var cantidad_a_testar = cantidad
    var isMultiplo = false
    if ((cantidad_a_testar % 5) == 0) {
        isMultiplo = true
    }

    return isMultiplo
}