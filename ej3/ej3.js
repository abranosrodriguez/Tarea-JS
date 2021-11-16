function Informacion() {
    this.nombre = prompt("Dame tu nombre: ")
    this.apellidos = prompt("Dame tu apellidos: ")
    this.telefono = prompt("Dame tu numero de telefono: ")
    this.email = prompt("Dame tu email: ")
}
var informacion = new Informacion()
console.log(informacion)

informacion_correcta = false
while (!informacion_correcta) {
    alert("Tus datos son: " +
        "\nNombre: " + informacion.nombre + 
        "\nApellidos: " + informacion.apellidos +
        "\nTelefono: " + informacion.telefono + 
        "\nEmail: " + informacion.email
    )
    informacion_correcta = !informacion_correcta
}

