import Service from "../service/service.js";

class Controlador {

    constructor() {
        this.service = new Service()
    }

    guardarNumero = (req, res) => {
        this.service.guardarNumero(req.body)
        res.end()
    }
    
    obtenerNumeros = async (req, res) => {
        return await this.service.obtenerNumeros()
    }

    obtenerPromedio = async (req, res) => {
        return await this.service.obtenerPromedio()
    }

    obtenerMinMax = async (req, res) => {
        return await this.service.obtenerMinMax()
    }

    obtenerCantidad = async (req, res) => {
        return await this.service.obtenerCantidad()
    }


}

export default Controlador