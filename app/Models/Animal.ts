import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Proprietario from './Proprietario'
import Consulta from './Consulta'
import Raca from './Raca'

export default class Animal extends BaseModel {

  public static table = 'animais'

  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public idade: number

  @column()
  public sexo: string

  @column()
  public cor: string

  @column()
  public peso: number

  @column()
  public proprietarioId: number

  @column()
  public racaId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo( ()=>Proprietario )
  public proprietario: BelongsTo<typeof Proprietario>

  @hasMany( ()=>Consulta )
  public consultas: HasMany<typeof Consulta>

  @belongsTo( ()=>Raca )
  public raca: BelongsTo<typeof Raca>
}
