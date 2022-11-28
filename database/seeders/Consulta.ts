import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Consulta from 'App/Models/Consulta'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  public async run () {
    await Consulta.createMany([
      {dataHora: DateTime.fromSQL('2017-05-15 09:00'), valor: 300.00, animalId:5},
      {dataHora: DateTime.fromSQL('2022-01-18 13:00'), valor: 280.00, animalId:1},
      {dataHora: DateTime.fromSQL('2022-03-02 08:30'), valor: 320.00, animalId:2},
      {dataHora: DateTime.fromSQL('2019-08-11 15:30'), valor: 250.00, animalId:7},
      {dataHora: DateTime.fromSQL('2020-10-22 16:10'), valor: 440.00, animalId:4},
      {dataHora: DateTime.fromSQL('2020-07-22 10:15'), valor: 200.00, animalId:3},
      {dataHora: DateTime.fromSQL('2022-11-03 11:00'), valor: 444.50, animalId:6},
      {dataHora: DateTime.fromSQL('2022-05-05 18:40'), valor: 580.00, animalId:10},
      {dataHora: DateTime.fromSQL('2018-09-10 11:30'), valor: 180.00, animalId:9},
      {dataHora: DateTime.fromSQL('2021-03-24 14:20'), valor: 360.00, animalId:8},
      {dataHora: DateTime.fromSQL('2018-08-10 20:00'), valor: 720.00, animalId:7},
      {dataHora: DateTime.fromSQL('2022-11-11 14:20'), valor: 120.50, animalId:1},

    ])
  }
}
