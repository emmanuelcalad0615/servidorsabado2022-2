import  express  from 'express'
import { ControladorHabitacion } from '../controllers/ControladorHabitacion.js'
import { ControladorReservas } from '../controllers/ControladorReserva.js'

//En el archivo de rutas creo una variable
//Encargada de definir todos los ENDPOINTS de mi API

//Por cada servicio que ofrece mi API debo tener un ENDPOINT o RUTA
export let rutas=express.Router()

//Creo un objeto de la clase ControladorHabitacion

let controlHabitacion=new ControladorHabitacion()


//Defino las rutas para cada servicio de mi API:


rutas.post('/api/hotel/habitaciones',controlHabitacion.agregarHabitacion)

rutas.get('/api/hotel/habitaciones',controlHabitacion.consultarHabitaciones)

rutas.get('/api/hotel/habitaciones/:id',controlHabitacion.consultarHabitacion)

rutas.put('/api/hotel/habitaciones/:id',controlHabitacion.editarHabitacion)

let controlReserva= new ControladorReservas()
//Rustas para servicios de reservas
rutas.post('/api/hotel/reservas',controlReserva.agregarReserva)

rutas.get('/api/hotel/reservas',controlReserva.consultarReservas)

rutas.get('/api/hotel/reservas/:id',controlReserva.consultarReserva)

rutas.put('/api/hotel/reservas/:id',controlReserva.editarReserva)
