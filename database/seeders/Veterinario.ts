import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Veterinario from 'App/Models/Veterinario'

export default class extends BaseSeeder {
  public async run () {
    await Veterinario.createMany([
      {nome: 'Amanda Nunes', cpf: '416.675.514-50', telefone: '61 98999-0709', email: 'amanda.nunes@gmail.com', crmv: 2390, estado: 'BA', cep: '71884-450', logradouro: 'Quadra QS 12', bairro: 'Riacho Fundo II'},
      {nome: 'Brenda Hadassa', cpf: '562.791.731-86', telefone: '61 99357-7896', email: 'brenda_hadassa_castro@gmail.com', crmv: 1218, estado: 'DF', cep: '72650-300', logradouro: 'Quadra Quadra 802 Conjunto 18', bairro: 'Recanto das Emas'},
      {nome: 'Carlos Eduardo', cpf: '308.903.191-46', telefone: '61 98941-5236', email: 'carlos.eduardo@gmail.com', crmv: 1115, estado: 'PA', cep: '71884-450', logradouro: 'Quadra QS 12', bairro: 'Riacho Fundo II'},
      {nome: 'Iago Lucas', cpf: '833.498.231-30', telefone: '61 99828-9431', email: 'iago.lucas@gmail.com', crmv: 5781, estado: 'MG', cep: '72301-709', logradouro: 'Quadra QR 115 Conjunto 9', bairro: 'Samambaia'},
      {nome: 'Ricardo Otávio', cpf: '065.117.461-94', telefone: '61 99474-7137', email: 'ricardo.otavio@gmail.com', crmv: 8810, estado: 'DF', cep: '70683-670', logradouro: 'Quadra SQNW 106 Bloco H', bairro: 'Setor Noroeste'},
      {nome: 'Bárbara Daniela', cpf: '308.897.231-68', telefone: '61 99607-2844', email: 'babi.daniela@gmail.com', crmv: 3766, estado: 'DF', cep: '72543-222', logradouro: 'Quadra CL 213 Bloco B', bairro: 'Santa Maria'},
      {nome: 'Renan Gomes', cpf: '340.625.211-72', telefone: '61 99246-3081', email: 'renan.gomes@gmail.com', crmv: 1991, estado: 'DF', cep: '72650-685', logradouro: 'Quadra Quadra 804 Conjunto 12', bairro: 'Recanto das Emas'},
      {nome: 'Elaine Peixoto', cpf: '358.057.081-16', telefone: '61 98909-3741', email: 'elaine.peixoto@gmail.com', crmv: 1224, estado: 'GO', cep: '72503-243', logradouro: 'Quadra CL 403 Bloco C', bairro: 'Santa Maria'},
      {nome: 'Carolina Alves', cpf: '509.877.021-14', telefone: '61 98544-2781', email: 'carolina.alves@gmail.com', crmv: 4389, estado: 'DF', cep: '72251-603', logradouro: 'Quadra QNO 6 Conjunto C', bairro: 'Ceilândia'},
      {nome: 'Murilo Ramos', cpf: '265.836.381-85', telefone: '61 98715-5751', email: 'murilo.ramos@gmail.com', crmv: 2792, estado: 'DF', cep: '72270-413', logradouro: 'Quadra QNQ 4 Conjunto 13', bairro: 'Ceilândia'},
      {nome: 'Kevin Barros', cpf: '095.229.811-25', telefone: '61 98684-3575', email: 'kevin.barros@gmail.com', crmv: 6190, estado: 'DF', cep: '72003-180', logradouro: 'Rua 10 Chácara 330', bairro: 'Vicente Pires'},
    ])
  }
}
