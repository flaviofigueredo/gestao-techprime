import { EquipamentoModel } from '../models/EquipamentoModel.js'
import { TecnicoModel } from '../models/TecnicoModel.js'

export class AuditoriaController {
    
    gerarRelatorioGeral() {
    const equipamentos = EquipamentoModel.listarInventario();
    const tecnicos = TecnicoModel.listarEquipe();

    return {
      status: 200,
      titulo: "Relatório de Auditoria Geral",
      totais: {
        equipamentos: equipamentos.length,
        tecnicos: tecnicos.length
      },
      equipamentos,
      tecnicos
    };
  }
}