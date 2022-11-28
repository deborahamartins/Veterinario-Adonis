import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Diagnostico from 'App/Models/Diagnostico'

export default class extends BaseSeeder {
  public async run () {
    await Diagnostico.createMany([
      {nome: 'Erlichiose', gravidade: 'M', consultaId: 5, tratamentoId: 2},
      {nome: 'Otite', gravidade: 'A', consultaId: 1, tratamentoId: 1},
      {nome: 'Leishmaniose', gravidade: 'B', consultaId: 2, tratamentoId: 3},
      {nome: 'Raiva', gravidade: 'M', consultaId: 1, tratamentoId: 5},
      {nome: 'Parvovirose', gravidade: 'B', consultaId: 3, tratamentoId: 4},
      {nome: 'Cinomose', gravidade: 'A', consultaId: 5, tratamentoId: 6},
      {nome: 'Erlichiose', gravidade: 'B', consultaId: 6, tratamentoId: 2},
      {nome: 'Raiva', gravidade: 'B', consultaId: 8, tratamentoId: 5},
      {nome: 'Parvovirose', gravidade: 'A', consultaId: 7, tratamentoId: 7},
    ])
  }
}
