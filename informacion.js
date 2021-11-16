function datos_usuario_introducidos() {
    //Recogemos la informacion del usuario
    function Perfil() {
        this.nombre = prompt("Dame tu nombre: ")
        this.apellidos = prompt("Dame tu apellidos: ")
        this.direccion = prompt("Dame tu direccion: ")
        this.telefono = prompt("Dame tu numero de telefono: ")
        if (Number(this.telefono) != this.telefono) {
            alert("Solo se aceptan numeros")
            this.telefono = null
        }
        this.email = prompt("Dame tu email: ")
    }
    var perfil = new Perfil()
    console.log("Datos antes de modificar \n" +
        "\nNombre: " + perfil.nombre +
        "\nApellidos: " + perfil.apellidos +
        "\nDireccion: " + perfil.direccion +
        "\nTelefono: " + perfil.telefono +
        "\nEmail: " + perfil.email
    )

    informacion_correcta = false
    while (!informacion_correcta) {

        var valores_usuario = prompt("Tus datos son: " +
            "\nNombre: " + perfil.nombre +
            "\nApellidos: " + perfil.apellidos +
            "\nDireccion: " + perfil.direccion +
            "\nTelefono: " + perfil.telefono +
            "\nEmail: " + perfil.email +
            "\nEs correcta esta informacion? [Si | No]"
        )
        var valores_usuario = valores_usuario.toLocaleLowerCase()
        if (valores_usuario == "si") {
            alert("Tus datos se han 'guardado' correctamente")
            informacion_correcta = !informacion_correcta
        } else if (valores_usuario == "no") {
            var dato_para_modificar = prompt("Que dato quieres modificar? [Nombre | Apellidos | Direccion | Telefono | Email]")
            var dato_para_modificar = dato_para_modificar.toLocaleLowerCase()
            if (dato_para_modificar == "nombre") {
                dato_para_modificar = prompt("Dame un nombre nuevo :" + "\nNombre Actual [ " + perfil.nombre + " ] ")
                perfil.nombre = dato_para_modificar
            }
            if (dato_para_modificar == "apellidos") {
                dato_para_modificar = prompt("Dame un apellido nuevo :" + "\nApellido Actual [ " + perfil.apellidos + " ] ")
                perfil.apellidos = dato_para_modificar
            }

            if (dato_para_modificar == "direccion") {
                dato_para_modificar = prompt("Dame una direccion nueva :" + "\nDireccion Actual [ " + perfil.direccion + " ] ")
                perfil.direccion = dato_para_modificar
            }
            if (dato_para_modificar == "telefono") {
                dato_para_modificar = prompt("Dame un telefono nuevo :" + "\nTelefono Actual [ " + perfil.telefono + " ] ")
                if (Number(dato_para_modificar != dato_para_modificar)) {
                    perfil.telefono = dato_para_modificar
                } else {
                    alert("ERROR - Solo se aceptan numeros")
                }

            }
            if (dato_para_modificar == "email") {
                dato_para_modificar = prompt("Dame un correo nuevo :" + "\nCorreo Actual [ " + perfil.email + " ] ")
                perfil.email = dato_para_modificar
            }
        }

        console.log("Dato modicado: " + dato_para_modificar)

    }
    console.log(perfil)
    console.log("Datos Finales: \n" + "Nombre: " + perfil.nombre + "\n" + "Apellidos: " + perfil.apellidos + "\n" + "Direccion: " + perfil.direccion + "\n" + "Telefono: " + perfil.telefono + "\n" + "Correo: " + perfil.email)
}
