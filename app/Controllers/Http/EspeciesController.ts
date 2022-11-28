// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Especie from "App/Models/Especie"
import EspecieValidator from "App/Validators/EspecieValidator"

export default class EspeciesController {
    index({request}){
        const page = request.input('page', 1)

        return Especie.query()
                    .preload('racas', (AnimalPreload) => {
                        AnimalPreload.preload('animais')
                    })
                    .paginate(page, 5)

    }
    
    async store({request}){
        const dados = await request.validate(EspecieValidator)
        return Especie.create(dados)
    }

    show({request}) {
        const id = request.param('id')
        return Especie.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const especie = await Especie.findOrFail(id)
        return especie.delete()

    }

    async update({request}) {
        const id = request.param('id')
        const especie = await Especie.findOrFail(id)

        const dados = request.only(['nome'])

        especie.merge(dados)
        return especie.save()
    }
}
