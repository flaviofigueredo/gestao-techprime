import { EquipamentoModel } from "../models/EquipamentoModel.js";

export class EquipamentoController{
    processarEntradaEquipamento(tagPatrimonio, tipoEquipamento, capacidadeRam) {
    try {
      const ativo = new EquipamentoModel(tagPatrimonio, tipoEquipamento, capacidadeRam);
      ativo.registrarAtivo(tagPatrimonio, tipoEquipamento, capacidadeRam);
      console.log('[STATUS]: 201 | Equipamento cadastrado com sucesso! | ATIVO');
    } 
    catch (erro) {

      console.log('[STATUS]: 400 | Falha ao cadastrar equipamento. | ERRO');

    } finally {

      console.log("🔒 Operação encerrada com segurança.");

    }
}

  consultarCatalogo() {
    const consultar = EquipamentoModel.listarconsultar();
    console.log(`[STATUS]: 200 | TOTAL: ${consultar.length} | DADOS: ${consultar}`);
  }
}