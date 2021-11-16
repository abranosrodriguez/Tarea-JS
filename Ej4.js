/**
 * @function Arte
    * @function cine
    * @property {string} duracion Tiempo que dura el objecto
    * @property {string} genero Tipo de genero
    * @property {string} material Tipo de material
    * @property {string} epoca Epoca 
    * @property {string} autor De quien es
    * @property {string} estilo De que estilo es
 */
function Arte() {

    function Cine(duracion, genero) {
        this.duracion = duracion;
        this.genero = genero;
    }
    var cine = new Cine("30 min", "Terror")
    Cine.prototype.Genero = function () {
        console.log("La película era de género de " + cine.genero)

    }
    Cine.prototype.Duracion = function () {
        console.log("La pelicula duró " + cine.duracion)
    }

    function Escultura(material, epoca) {
        this.material = material;
        this.epoca = epoca;
    }
    var escultura = new Escultura("Marmol Blanco", "XVI")
    Escultura.prototype.Material = function () {
        console.log("La escultura estaba echa de " + escultura.material)
    }
    Escultura.prototype.Epoca = function () {
        console.log("La escultura estaba echa de " + escultura.epoca)
    }

    function Pintura(autor, estilo) {
        this.autor = autor;
        this.estilo = estilo;
    }
    var pintura = new Pintura("Vincent van Gogh", "Posimpresionista")
    Pintura.prototype.Autor = function () {
        console.log("La pintura es de " + pintura.autor)
    }
    Pintura.prototype.Estilo = function () {
        console.log("La pintura es del " + pintura.estilo)
    }

    function Teatro(duracion, epoca) {
        this.duracion = duracion;
        this.epoca = epoca;
    }
    var teatro = new Teatro("1h", "XVI")
    Teatro.prototype.Duracion = function () {
        console.log("La obra tiene una duracion de " + teatro.duracion)
    }
    Teatro.prototype.Epoca = function () {
        console.log("La obra es de la época " + teatro.epoca)
    }

    cine.Genero()
    cine.Duracion()

    escultura.Material()
    escultura.Epoca()

    pintura.Autor()
    pintura.Estilo()

    teatro.Duracion()
    teatro.Epoca()

}
Arte()
