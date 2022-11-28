import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'veterinarios'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 100).notNullable()
      table.string('cpf', 14).notNullable()
      table.string('telefone', 11).notNullable()
      table.string('email', 100).notNullable()
      table.integer('crmv', 4).notNullable()
      table.string('estado', 30).notNullable()
      table.string('cep', 9).notNullable()
      table.string('logradouro', 100)
      table.string('bairro', 50)

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
