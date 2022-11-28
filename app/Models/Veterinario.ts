import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Consulta from './Consulta'

export default class Veterinario extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public cpf: string

  @column()
  public telefone: string

  @column()
  public email: string

  @column()
  public crmv: number

  @column()
  public estado: string

  @column()
  public cep: string

  @column()
  public logradouro: string

  @column()
  public bairro: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => Consulta, {
    pivotTable: 'consulta_veterinarios'})
  public consultas: ManyToMany<typeof Consulta>
}
