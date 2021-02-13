'use strict'
const Developer = use('App/Models/Developer')

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class DeveloperSeeder {
  async run () {
    await Developer.create({
      name: 'Lucas',
      sex: 'M',
      age: '25',
      hobby:'Games',
      date_birth:'1996-01-19'
    })
  }
}

module.exports = DeveloperSeeder
