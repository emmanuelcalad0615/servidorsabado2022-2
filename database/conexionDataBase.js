import mongoose from 'mongoose';

export async function conectarConBaseDatos(){

    try{
        await mongoose.connect(process.env.DATABASE);
        console.log("Exito conectandonos con la Base de Datos")
    }
    catch(error){

        console.log("Error en bd: "+error)
    }



}
