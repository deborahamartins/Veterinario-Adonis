// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Tratamento from "App/Models/Tratamento"
import TratamentoValidator from "App/Validators/TratamentoValidator"

export default class TratamentosController {
    index({request}){
        const page = request.input('page', 1)

        return Tratamento.query()
                    .preload('consultas', (VetPreload) => {
                        VetPreload.preload('veterinarios')
                    })
                    .paginate(page, 5)

    }
    
    async store({request}){
        const dados = await request.validate(TratamentoValidator)
        return Tratamento.create(dados)
    }

    show({request}) {
        const id = request.param('id')
        return Tratamento.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const tratamento = await Tratamento.findOrFail(id)
        return tratamento.delete()

    }

    async update({request}) {
        const id = request.param('id')
        const tratamento = await Tratamento.findOrFail(id)

        const dados = request.only(['nome', 'duracao', 'data'])

        tratamento.merge(dados)
        return tratamento.save()
    }
}
