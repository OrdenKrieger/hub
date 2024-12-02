import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table
        .integer('role_id')
        .unsigned()
        .defaultTo(1)
        .references('id')
        .inTable('roles')
        .onDelete('SET NULL') // Foreign key to roles
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      // Drop foreign key constraint (if named manually)
      table.dropForeign('role_id')
      table.dropColumn('role_id')
    })
  }
}
