import NumerosMem from "../model/numerosMem.js";

class Service {

    constructor() {
        this.model = new NumerosMem()
    }

    guardarNumero = (numeroInput) => {
        this.model.guardarNumero(numeroInput.numero)
    }

    obtenerNumeros = async () => {
        return {
            numeros: await this.model.obtenerNumeros()
        }
    }

    obtenerPromedio = async () => {
        
        const numeros = await this.model.obtenerNumeros()

        if (numeros.length < 1) {
            return {
                mensaje: "No hay numeros ingresados"
            }
        }

        return {
            promedio: (numeros.reduce((acum, numero) => acum + numero, 0) / numeros.length).toFixed(2)
        }

    }

    obtenerMinMax = async () => {

        const numeros = await this.model.obtenerNumeros()

        if (numeros.length < 1) {
            return {
                mensaje: "No hay numeros ingresados"
            }
        }

        return {
            min: numeros.reduce((ant, actual) => Math.min(ant, actual)),
            max : numeros.reduce((ant, actual) => Math.max(ant, actual))
        }
    }

    obtenerCantidad = async () => {
        const numeros = await this.model.obtenerNumeros()

        return {
            cantidad: numeros.length
        }
    }

}

export default Service