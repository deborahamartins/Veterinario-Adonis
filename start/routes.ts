/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.resource('/proprietarios', 'ProprietariosController').apiOnly()
  Route.resource('/veterinarios', 'VeterinariosController').apiOnly()
  Route.resource('/tratamentos', 'TratamentosController').apiOnly()
  Route.resource('/consultas', 'ConsultasController').apiOnly()
  Route.resource('/consultaVeterinarios', 'ConsultaVeterinariosController').apiOnly()
  Route.resource('/diagnosticos', 'DiagnosticosController').apiOnly()
  Route.resource('/especies', 'EspeciesController').apiOnly()
  Route.resource('/racas', 'RacasController').apiOnly()
  Route.resource('/animais', 'AnimaisController').apiOnly()
  Route.resource('/teste', 'TestesController').apiOnly()
  
}).middleware('auth')


Route.post('/users', 'UsersController.store').middleware('auth')
Route.post('/login', 'UsersController.login')
