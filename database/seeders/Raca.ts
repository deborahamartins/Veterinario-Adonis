import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Raca from 'App/Models/Raca'

export default class extends BaseSeeder {
  public async run () {
    await Raca.createMany([
      {nome:'SRD(Sem Raça Definida)', especieId: 1},
      {nome:'SRD(Sem Raça Definida)', especieId: 2},
      {nome:'Yorkshire', especieId: 1},
      {nome:'Poodle', especieId: 1},
      {nome:'Labrador', especieId: 1},
      {nome:'Pitbull', especieId: 1},
      {nome:'Persa', especieId: 2},
      {nome:'Siamês', especieId: 2},
      {nome:'Angorá', especieId: 2},
      {nome:'Calopsita', especieId: 4},
      {nome:'Papagaio', especieId: 4},
    ])
  }
}
