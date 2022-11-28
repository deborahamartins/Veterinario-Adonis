import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Proprietario from 'App/Models/Proprietario'

export default class extends BaseSeeder {
  public async run () {
    await Proprietario.createMany([
      {nome: 'Ana Luiza Gomes', cpf:'446.201.361-15', telefone: '12 98888-7898', cep: '22222-900', logradouro: 'Quadra 200 conjunto 12 casa 6', bairro: 'Recanto das Emas', email: 'aninha@gmail.com'},
      {nome: 'Enzo Gabriel Martins', cpf:'562.147.823-15', telefone: '15 99979-6773', cep: '72304-100', logradouro: 'Quadra 303 conjunto 27 casa 11', bairro: 'Samambaia', email: 'enzo.gabriel@gmail.com'},
      {nome: 'Letícia Silva', cpf:'832.650.681-88', telefone: '61 98654-9090', cep: '81300-997', logradouro: 'QNN 3 conjunto A casa 35', bairro: 'Ceilândia', email: 'lele123@gmail.com'},
      {nome: 'Thiago Antunes', cpf:'878.323.812-30', telefone: '61 98402-3323', cep: '73026-533', logradouro: 'Quadra 6 Área Especial 03', bairro: 'Sobradinho', email: 'thigo.antunes@gmail.com'},
      {nome: 'Gabriela Arcanjo', cpf:'125.006.005-21', telefone: '61 99976-2343-7898', cep: '72587-020', logradouro: 'Conjunto S Quadra 3', bairro: 'Santa Maria', email: 'gabiarcanjo123@gmail.com'},
      {nome: 'Paulo Junior Souza', cpf:'530.505.552-03', telefone: '61 98321-6120', cep: '71693-258', logradouro: 'Residencial São Gabriel Rua 08', bairro: 'São Sebastião', email: 'paulo.junior@gmail.com'},
      {nome: 'Gabriel Menezes', cpf:'585.335.174-59', telefone: '61 98272-4058', cep: '70790-147', logradouro: 'Quadra SGAN 914 Módulo G', bairro: 'Asa Norte', email: 'gabigol1010@gmail.com'},
      {nome: 'Maria Luiza Santos', cpf:'110.775.138-10', telefone: '61 99255-5625', cep: '72320-016', logradouro: 'Quadra QR 410 Conjunto 14', bairro: 'Samambaia', email: 'malu.santos@gmail.com'},
      {nome: 'Vinicius Chaves', cpf:'780.878.874-09', telefone: '61 98409-1251', cep: '72238-220', logradouro: 'Quadra SHPS Quadra 402', bairro: 'Setor Habitacional Pôr do Sol (Ceilândia)', email: 'vinicius.chaves@gmail.com'},
      {nome: 'Eloah Ferreira', cpf:'485.303.255-08', telefone: '61 98081-2900', cep: '71680-367', logradouro: 'Condomínio Mirante das Paineiras', bairro: 'Setor Habitacional Jardim Botânico (Lago Sul)', email: 'eloah.f@gmail.com'},
      {nome: 'Alice Oliveira', cpf:'187.710.685-20', telefone: '61 99524-3198', cep: '71015-061', logradouro: 'Quadra QE 14 Conjunto F', bairro: 'Guará I', email: 'alice123@gmail.com'},
    ])
  }
}
