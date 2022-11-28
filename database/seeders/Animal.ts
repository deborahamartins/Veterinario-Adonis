import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Animal from 'App/Models/Animal'

export default class extends BaseSeeder {
  public async run () {
    await Animal.createMany([
      {nome: 'Bela', idade: 2, sexo: 'F', cor: 'caramelo', peso: 5.8, proprietarioId: 3, racaId: 6},
      {nome: 'Marley', idade: 1, sexo: 'M', peso: 8, proprietarioId: 1, racaId: 7},
      {nome: 'Babalu', idade: 6, sexo: 'F', cor: 'preto', peso: 3.5, proprietarioId: 5, racaId: 4},
      {nome: 'Nina', sexo: 'F', cor: 'preto', peso: 11.9, proprietarioId: 2, racaId: 1},
      {nome: 'Bolinha', idade: 4, sexo: 'M', cor: 'amarelo', proprietarioId: 9, racaId: 10},
      {nome: 'Chiclete', idade: 2, sexo: 'M', cor: 'branco', peso: 7, proprietarioId: 4, racaId: 3},
      {nome: 'Babi', idade: 3, sexo: 'F', cor: 'branco e caramelo', peso: 2.2, proprietarioId: 8, racaId: 1},
      {nome: 'Mel', sexo: 'F', cor: 'marrom', proprietarioId: 7, racaId: 5},
      {nome: 'Toddy', idade: 1, sexo: 'M', cor: 'marrom', peso: 7.4, proprietarioId: 10, racaId: 7},
      {nome: 'Bidu', idade: 2, sexo: 'M', cor: 'preto e branco', peso: 12, proprietarioId: 6, racaId: 1},
    ])
  }
}
