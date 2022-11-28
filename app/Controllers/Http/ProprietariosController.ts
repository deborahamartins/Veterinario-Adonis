// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Proprietario from "App/Models/Proprietario"
import ProprietarioValidator from "App/Validators/ProprietarioValidator"

export default class ProprietariosController {
    index({request}){
        const page = request.input('page', 1)

        return Proprietario.query()
                    .preload('animais', (ConsultaPreload) => {
                        ConsultaPreload.preload('consultas')
                    })
                    .paginate(page, 5)

    }
    
    async store({request}){
        const dados = await request.validate(ProprietarioValidator)
        return Proprietario.create(dados)
    }

    show({request}) {
        const id = request.param('id')
        return Proprietario.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const proprietario = await Proprietario.findOrFail(id)
        return proprietario.delete()

    }

    async update({request}) {
        const id = request.param('id')
        const proprietario = await Proprietario.findOrFail(id)

        const dados = request.only(['nome', 'cpf', 'telefone', 'cep', 'logradouro', 'bairro', 'email'])

        proprietario.merge(dados)
        return proprietario.save()
    }
}
