'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DevelopersSchema extends Schema {
  up () {
    this.create('developers', (table) => {
      table.increments()
      table.string('name', 250).notNullable()
      table.string('sex', 1)
      table.integer('age')
      table.string('hobby', 50)
      table.date('date_birth')
      table.timestamps()
    })
  }

  down () {
    this.drop('developers')
  }
}

module.exports = DevelopersSchema
