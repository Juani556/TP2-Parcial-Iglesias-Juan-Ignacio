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

        return {
            promedio: numeros.reduce((acum, numero) => acum + numero, 0) / numeros.length
        }

    }

    obtenerMinMax = async () => {

        const numeros = await this.model.obtenerNumeros()

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