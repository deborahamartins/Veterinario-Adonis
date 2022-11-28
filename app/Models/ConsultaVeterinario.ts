import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ConsultaVeterinario extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public consultaId: number

  @column()
  public veterinarioId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
