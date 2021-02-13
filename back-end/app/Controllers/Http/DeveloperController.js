'use strict'
const Developer = use('App/Models/Developer')
class DeveloperController {
  async index({ request, response }) {
    try {
      const developer = request.all()
      return developer
    } catch (err) {
      return response.send({
        message: 'Ocorreu um erro ao exibir os dados de desenvolvedor, por favor verifique!'
      })
    }
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
