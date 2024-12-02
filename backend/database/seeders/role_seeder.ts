import Role from '#models/role'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Add roles to the database
    await Role.createMany([
      { name: 'user', description: 'Default role for regular users' },
      { name: 'admin', description: 'Administrator with advanced privileges' },
      { name: 'super_admin', description: 'Super admin with full system access' },
    ])
  }
}
