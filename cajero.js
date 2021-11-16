function retirada_billetes(cantidad) {
    var cantidad = cantidad
    var billetes
    var isCero = false
    var billete500 = 0, billete200 = 0, billete100 = 0, billete50 = 0, billete50 = 0, billete20 = 0, billete10 = 0, billete5 = 0
    while(!isCero){
        if(cantidad >= 500){
            cantidad = cantidad -500
            billete500++
        }else if(cantidad >= 200){
            cantidad = cantidad -200
            billete200++
        }else if(cantidad >= 100){
            cantidad = cantidad -100
            billete100++
        }else if(cantidad >= 50){
            cantidad = cantidad -50
            billete50++
        }else if(cantidad >= 20){
            cantidad = cantidad -20
            billete20++
        }else if(cantidad >= 10){
            cantidad = cantidad -10
            billete10++
        }else if(cantidad >= 5){
            cantidad = cantidad -5
            billete5++
        }else{
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
    if((cantidad_a_testar%5)==0){
        isMultiplo = true
    }

    return isMultiplo
}