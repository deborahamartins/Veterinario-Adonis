import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Tratamento from './Tratamento'
import Veterinario from './Veterinario'
import Animal from './Animal'

export default class Consulta extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public dataHora: DateTime

  @column()
  public valor: number

  @column()
  public animalId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => Tratamento, {
    pivotTable: 'diagnosticos'})
  public tratamentos: ManyToMany<typeof Tratamento>

  @manyToMany(() => Veterinario, {
    pivotTable: 'consulta_veterinarios'})
  public veterinarios: ManyToMany<typeof Veterinario>

  @belongsTo( ()=>Animal )
  public animal: BelongsTo<typeof Animal>
}
