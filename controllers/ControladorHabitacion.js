//Una clase controlador establece los metodos(Acciones) que vamos a realizar en BD
//Y está alíneado con el archivo de rutas

export class ControladorHabitacion{
    constructor(){}
    agregarHabitacion(request,response){
        try{
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
    consultarHabitaciones(request,response){
        try{
            response.status(200).json({
                "mensaje":"Exito en la consulta",
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
    consultarHabitacion(request,response){
        try{
            response.status(200).json({
                "mensaje":"Exito en la consulta",
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
    editarHabitacion(request,response){
        try{
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