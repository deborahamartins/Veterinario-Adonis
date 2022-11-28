// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Veterinario from "App/Models/Veterinario"
import VeterinarioValidator from "App/Validators/VeterinarioValidator"

export default class VeterinariosController {
    index({request}){
        const page = request.input('page', 1)

        return Veterinario.query()
                    .preload('consultas')
                    .paginate(page, 10)

    }
   
    async store({request}){
        const dados = await request.validate(VeterinarioValidator)
        return Veterinario.create(dados)
    }

    show({request}) {
        const id = request.param('id')
        return Veterinario.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const veterinario = await Veterinario.findOrFail(id)
        return veterinario.delete()

    }

    async update({request}) {
        const id = request.param('id')
        const veterinario = await Veterinario.findOrFail(id)

        const dados = request.only(['nome', 'cpf', 'telefone', 'email', 'crmv', 'estado', 'cep', 'logradouro', 'bairro'])

        veterinario.merge(dados)
        return veterinario.save()
    }
}
