import  express  from 'express'

//En el archivo de rutas creo una variable
//Encargada de definir todos los ENDPOINTS de mi API

//Por cada servicio que ofrece mi API debo tener un ENDPOINT o RUTA
export let rutas=express.Router()
//Defino las rutas para cada servicio de mi API:

//Registro de una habitación 
rutas.post('/api/hotel/habitaciones', function (req, res) {
    res.send('Estamos registrando una habitación')
  })

//Buscar todas las habitaciones 
rutas.get('/api/hotel/habitaciones', function (req, res) {
    res.send('Estamos buscando habitaciones')
  })

//Buscar por id una habitación
rutas.get('/api/hotel/habitaciones/:id', function (req, res) {
    res.send('Estamos buscando una habitacion por ID')
  })

//Editar datos de una habitación
rutas.put('/api/hotel/habitaciones/:id', function (req, res) {
    res.send('Estamos editando una habitación')
  })
