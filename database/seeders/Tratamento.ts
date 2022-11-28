import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Tratamento from 'App/Models/Tratamento'

export default class extends BaseSeeder {
  public async run () {
    await Tratamento.createMany([
      {nome: 'antibiotico', duracao: 28, data: new Date(2022, 10, 18)},
      {nome: 'anti-inflamatório', duracao: 14, data: new Date(2022, 1, 3)},
      {nome: 'miltefosina', duracao: 120, data: new Date(2021, 4, 12)},
      {nome: 'eutanásia', duracao: 0, data: new Date(2022, 8, 8)},
      {nome: 'Antiemético', duracao: 7, data: new Date(2020, 2, 21)},
      {nome: 'anticonvulsivantes ', duracao: 30, data: new Date(2022, 6, 16)},
      {nome: 'antibiotico', duracao: 7, data: new Date(2021, 5, 8)},
      {nome: 'anti-inflamatório', duracao: 10, data: new Date(2018, 9, 11)},
      {nome: 'miltefosina', duracao: 60, data: new Date(2019, 8, 27)},
      {nome: 'Antiemético', duracao: 3, data: new Date(2022, 10, 29)},
      {nome: 'anticonvulsivantes ', duracao: 21, data: new Date(2020, 3, 24)},
    ])
  }
}
