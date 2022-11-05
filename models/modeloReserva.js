import mongoose from 'mongoose';

//Definiendo nuestro esquema de datos 
const Schema = mongoose.Schema;

const EsquemaReserva= new Schema({

    fechaEntrada:{
        require:true,
        type:Date
    },
    fechaSalida:{
        require:true,
        type:Date
    },
    numNinos:{
        require:true,
        type:Number
    },
    numAdultos:{
        require:true,
        type:Number

    },
    idHabitacion:{
        required:true,
        type:String

    },
    costoReserva:{
        required:true,
        type:Number
    }

})

export const modeloReserva = mongoose.model('reserva', EsquemaReserva)