'use strict'
const Developer = use('App/Models/Developer')
let query = Developer.query()
const queries = use('App/Functions/Query')
const schema = 'Developer'
class DeveloperController {
  async index({ request, response }) {
    const data = request.only(['search', 'id', 'name'])
    const { page, order, limit } = request.get()
    if (order === 'id') {
      query = Developer.query().orderBy(order, 'DESC')
    } else {
      query = Developer.query().orderBy(order)
    }

    if (data.search) {
      const search = data.search
      queries({ search, query, schema })
    }
    if (data.id || data.name) {
      data.id ? query.orWhere('id', '=', data.id) : ''
      data.name ? query.orWhere('name', 'LIKE', '%' + data.name + '%') : ''
    }
    return query.paginate(page, limit)
  }

  async store({ request, response }) {
    try {
      const data = request.only(['name', 'sex', 'age', 'hobby', 'date_birth'])
      const developer = await Developer.create(data)
      return developer
    } catch (err) {
      return response.send({
        message: 'Ocorreu um erro ao inserir os dados de desenvolvedor, por favor verifique!'
      })
    }
  }

  async show({ params, response }) {
    try {
      const developer = await Developer.findOrFail(params.id)
      return developer
    } catch (err) {
      return response.send({
        message: 'Ocorreu um erro ao exibir os dados de desenvolvedor, por favor verifique!'
      })
    }
  }

  async update({ params, request, response }) {
    try {
      const developer = await Developer.findOrFail(params.id)
      const data = request.only(['name', 'sex', 'age', 'hobby', 'date_birth'])
      developer.merge(data)
      await developer.save()
      return developer
    } catch (err) {
      return response.send({
        message: 'Ocorreu um erro ao atualizar os dados de desenvolvedor, por favor verifique!'
      })
    }
  }
  async destroy({ params, response }) {
    try {
      const developer = await Developer.findOrFail(params.id)
      await developer.delete()
      return 'Desenvolvedor excluido com sucesso!'
    } catch (err) {
      return response.send({
        message: 'Ocorreu um erro ao excluir os dados de desenvolvedor, por favor verifique!'
      })
    }
  }
}

module.exports = DeveloperController
