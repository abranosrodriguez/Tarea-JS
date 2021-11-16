function main() {
    var cantidad_pedida_usuario
    var cantidad_de_billetes
    
    cantidad_pedida_usuario = entrada_de_usuario("Introduce una cantidad a retirar: ")
    if(multiplo_de_5_0(cantidad_pedida_usuario)){
        cantidad_de_billetes = retirada_billetes(cantidad_pedida_usuario)
          salida_por_consola(cantidad_de_billetes)
    }else{
        salida_por_consola("Cantidad no valida")
    } 
    
}
main()