import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'animais'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 50).notNullable()
      table.integer('idade')
      table.enum('sexo', ['F', 'M']).notNullable()
      table.string('cor', 20)
      table.decimal('peso')
      table.integer('proprietario_id').unsigned().references('id').inTable('proprietarios').notNullable()
      table.integer('raca_id').unsigned().references('id').inTable('racas').notNullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
