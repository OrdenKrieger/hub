import { DateTime } from 'luxon'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Role from '#models/role'

export default class User extends BaseModel {
  @column({ isPrimary: true, serializeAs: null })
  declare id: number

  @column()
  declare name: string | null

  @column()
  declare nickName: string | null

  @column()
  declare email: string

  @column.dateTime({ autoCreate: true, serializeAs: null })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  declare updatedAt: DateTime | null

  @column()
  declare roleId: number // The role_id column in the users table

  @belongsTo(() => Role)
  declare role: BelongsTo<typeof Role>
}
