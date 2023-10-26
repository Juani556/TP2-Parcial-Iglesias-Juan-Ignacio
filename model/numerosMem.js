class NumerosMem {

    constructor() {
        this.numeros = []
    }

    guardarNumero = async (numero) => {
        this.numeros.push(numero)
    }

    obtenerNumeros = async () => {
        return this.numeros
    }


}

export default NumerosMem