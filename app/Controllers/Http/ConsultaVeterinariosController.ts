// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import ConsultaVeterinario from "App/Models/ConsultaVeterinario"
import ConsultaVeterinarioValidator from "App/Validators/ConsultaVeterinarioValidator"

export default class ConsultaVeterinariosController {
    index({request}){
        const page = request.input('page', 1)

        return ConsultaVeterinario.query()
                    .paginate(page, 5)

    }
    
    async store({request}){
        const dados = await request.validate(ConsultaVeterinarioValidator)
        return ConsultaVeterinario.create(dados)
    }

    show({request}) {
        const id = request.param('id')
        return ConsultaVeterinario.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const consultaVeterinario = await ConsultaVeterinario.findOrFail(id)
        return consultaVeterinario.delete()

    }

    async update({request}) {
        const id = request.param('id')
        const consultaVeterinario = await ConsultaVeterinario.findOrFail(id)

        const dados = request.only(['consultaId', 'veterinarioId'])

        consultaVeterinario.merge(dados)
        return consultaVeterinario.save()
    }
}
