import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ConsultaVeterinario from 'App/Models/ConsultaVeterinario'

export default class extends BaseSeeder {
  public async run () {
    await ConsultaVeterinario.createMany([
      {consultaId: 2, veterinarioId: 1},
      {consultaId: 4, veterinarioId: 2},
      {consultaId: 1, veterinarioId: 3},
      {consultaId: 5, veterinarioId: 4},
      {consultaId: 3, veterinarioId: 5},
      {consultaId: 6, veterinarioId: 6},
      {consultaId: 8, veterinarioId: 1},
      {consultaId: 7, veterinarioId: 2},
      {consultaId: 10, veterinarioId: 3},
      {consultaId: 11, veterinarioId: 4},
      {consultaId: 9, veterinarioId: 7},
    ])
  }
}
