import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Especie from 'App/Models/Especie'

export default class extends BaseSeeder {
  public async run () {
    await Especie.createMany([
      {nome: 'Cão'},
      {nome: 'Gato'},
      {nome: 'Roedor'},
      {nome: 'Ave'},
      {nome: 'Silvestre'},
    ])
  }
}
