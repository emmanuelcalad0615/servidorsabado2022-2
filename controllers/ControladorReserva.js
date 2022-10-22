export class ControladorReservas{
    constructor(){}
    agregarReserva(request,response){
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
    consultarReservas(request,response){
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
    consultarReserva(request,response){
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
    editarReserva(request,response){
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