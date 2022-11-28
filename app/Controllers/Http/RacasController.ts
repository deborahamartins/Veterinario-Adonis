// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Raca from "App/Models/Raca"
import RacaValidator from "App/Validators/RacaValidator"

export default class RacasController {
    index({request}){
        const page = request.input('page', 1)

        return Raca.query()
                    .preload('animais')
                    .paginate(page, 5)

    }
    
    async store({request}){
        const dados = await request.validate(RacaValidator)
        return Raca.create(dados)
    }

    show({request}) {
        const id = request.param('id')
        return Raca.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const raca = await Raca.findOrFail(id)
        return raca.delete()

    }

    async update({request}) {
        const id = request.param('id')
        const raca = await Raca.findOrFail(id)

        const dados = request.only(['nome', 'especieId'])

        raca.merge(dados)
        return raca.save()
    }
}
