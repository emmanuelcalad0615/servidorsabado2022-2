import  express  from 'express'
import { rutas } from '../routes/rutasAPI.js'
import { conectarConBaseDatos } from '../database/conexionDataBase.js'

export class API{
    constructor(){
        this.app = express()
        this.conectarConBD()
        this.atenderPeticiones()

    }
    levantarServidor(){
        this.app.listen(process.env.PORT, function(){
            console.log('Servidor encendido '+process.env.PORT)
        })
    }
    conectarConBD(){
        conectarConBaseDatos()

    }

    atenderPeticiones(){
        this.app.use(express.json())
        this.app.use('/',rutas)
        //Habilita la recepción de datos por el body de la petición
    }
}