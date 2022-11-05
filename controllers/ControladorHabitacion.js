//Una clase controlador establece los metodos(Acciones) que vamos a realizar en BD
//Y está alíneado con el archivo de rutas
import {ServicioHabitacion} from '../services/ServicioHabitacion.js'

export class ControladorHabitacion{
    constructor(){}
  async  agregarHabitacion(request,response){
        let datosARegistrar=request.body
        let objetoServicio= new ServicioHabitacion()

        try{
            await objetoServicio.agregarHabitacion(datosARegistrar)
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
  async  consultarHabitaciones(request,response){
        let objetoServicio= new ServicioHabitacion()
        try{
            response.status(200).json({
                "mensaje":"Exito en la consulta",
                "data": await objetoServicio.buscarHabitaciones()
            })

        }
        catch(error){
            response.status(400).json({
                "mensaje":"Fallamos en la operacion "+error,
                "data":null
            })

        }
    }
   async consultarHabitacion(request,response){
        let id=request.params.id
        let objetoServicio= new ServicioHabitacion()


        try{
            response.status(200).json({
                "mensaje":"Exito en la consulta",
                "data":await objetoServicio.buscarHabitacion(id)
            })

        }
        catch(error){
            response.status(400).json({
                "mensaje":"Fallamos en la operación "+error,
                "data":null
            })

        }
    }
   async editarHabitacion(request,response){
        let id=request.params.id
        let datosAEdit=request.body
        let objetoServicio= new ServicioHabitacion()
        try{
            await objetoServicio.editarHabitacion(id,datosAEdit)
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