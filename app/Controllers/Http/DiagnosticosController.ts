// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Diagnostico from "App/Models/Diagnostico"
import DiagnosticoValidator from "App/Validators/DiagnosticoValidator"

export default class DiagnosticosController {
    index({request}){
        const page = request.input('page', 1)

        return Diagnostico.query()
                    .paginate(page, 5)

    }
    
    async store({request}){
        const dados = await request.validate(DiagnosticoValidator)
        return Diagnostico.create(dados)
    }

    show({request}) {
        const id = request.param('id')
        return Diagnostico.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const diagnostico = await Diagnostico.findOrFail(id)
        return diagnostico.delete()

    }

    async update({request}) {
        const id = request.param('id')
        const diagnostico = await Diagnostico.findOrFail(id)

        const dados = request.only(['nome', 'gravidade', 'consultaId', 'tratamentoId'])

        diagnostico.merge(dados)
        return diagnostico.save()
    }
}
