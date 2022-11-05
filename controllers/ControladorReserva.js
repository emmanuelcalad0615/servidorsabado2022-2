import { ServicioReserva } from "../services/ServicioReserva.js"


export class ControladorReservas{
    constructor(){}
    async agregarReserva(request,response){
        let datosARegistrar=request.body
        let objetoServicio= new ServicioReserva()
        
        try{
            await objetoServicio.agregarReserva(datosARegistrar)
            response.status(200).json({
                "mensaje":"Exito al agregar la habitacion",
                "data":null
            })

        }
        catch(error){
            response.status(400).json({
                "mensaje":"Fallamos en la operacion "+error,
                "data":null
            })

        }
    }
    async consultarReservas(request,response){
        let objetoServicio= new ServicioReserva()
        try{
            response.status(200).json({
                "mensaje":"Exito en la consulta",
                "data":await objetoServicio.buscarReservas()
            })

        }
        catch(error){
            response.status(400).json({
                "mensaje":"Fallamos en la operacion "+error,
                "data":null
            })

        }
    }
    async consultarReserva(request,response){
        let id=request.params.id
        let objetoServicio= new ServicioReserva()
        try{
            response.status(200).json({
                "mensaje":"Exito en la consulta",
                "data":await objetoServicio.buscarReserva(id)
            })

        }
        catch(error){
            response.status(400).json({
                "mensaje":"Fallamos en la operación "+error,
                "data":null
            })

        }
    }
    async editarReserva(request,response){
        let id=request.params.id
        let datosAEdit=request.body
        let objetoServicio= new ServicioReserva()
        try{
            await objetoServicio.editarReserva(id,datosAEdit)
            response.status(200).json({
                "mensaje":"Exito en la edición",
                "data":null
            })

        }
        catch(error){
            response.status(400).json({
                "mensaje":"Fallamos en la operación "+error,
                "data":null
            })

        }
    }

}