import  express  from 'express'
import { rutas } from '../routes/rutasAPI.js'

export class API{
    constructor(){
        this.app = express()
        this.atenderPeticiones()

    }
    levantarServidor(){
        this.app.listen(process.env.PORT, function(){
            console.log('Servidor encendido '+process.env.PORT)
        })
    }
    conectarConBD(){}

    atenderPeticiones(){

        this.app.use('/',rutas)
        
    }
}