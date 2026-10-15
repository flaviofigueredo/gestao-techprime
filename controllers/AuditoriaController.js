import { EquipamentoModel } from '../models/EquipamentoModel.js'
import { TecnicoModel } from '../models/TecnicoModel.js'

export class AuditoriaController {
    listafinal = [];

    gerarRelatorioGeral(){
        const listaitens = EquipamentoModel.listarInventario();
        const listapersons = TecnicoModel.listarEquipe();
        this.listafinal.push(listaitens, listapersons);
        console.log(this.listafinal);
        return this.listafinal;
    }
}