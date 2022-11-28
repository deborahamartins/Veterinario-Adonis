// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Consulta from "App/Models/Consulta"
import ConsultaValidator from "App/Validators/ConsultaValidator"

export default class ConsultasController {
    index({request}){
        const page = request.input('page', 1)

        return Consulta.query()
                    .preload('veterinarios')
                    .paginate(page, 5)

    }
    
    async store({request}){
        const dados = await request.validate(ConsultaValidator)
        return Consulta.create(dados)
    }

    show({request}) {
        const id = request.param('id')
        return Consulta.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const consulta = await Consulta.findOrFail(id)
        return consulta.delete()

    }

    async update({request}) {
        const id = request.param('id')
        const consulta = await Consulta.findOrFail(id)

        const dados = request.only(['dataHora', 'valor', 'animalId'])

        consulta.merge(dados)
        return consulta.save()
    }
}
