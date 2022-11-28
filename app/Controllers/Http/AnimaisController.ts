// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Animal from "App/Models/Animal"
import AnimalValidator from "App/Validators/AnimalValidator"

export default class AnimaisController {
    index({request}){
        const page = request.input('page', 1)

        return Animal.query()
                    .preload('consultas', (AnimalPreload) => {
                        AnimalPreload.preload('tratamentos')
                    })
                    .paginate(page, 5)

    }

    async store({request}){
        const dados = await request.validate(AnimalValidator)
        return Animal.create(dados)
    }

    show({request}) {
        const id = request.param('id')
        return Animal.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const animal = await Animal.findOrFail(id)
        return animal.delete()

    }

    async update({request}) {
        const id = request.param('id')
        const animal = await Animal.findOrFail(id)

        const dados = request.only(['nome', 'idade', 'sexo', 'cor', 'peso', 'proprietarioId', 'racaId'])

        animal.merge(dados)
        return animal.save()
    }
}
