import { EquipamentoModel } from '../models/EquipamentoModel.js'
import { TecnicoModel } from '../models/TecnicoModel.js'

export class AuditoriaController {
    listafinal = [];

    gerarRelatorioGeral(){
        const listafirst = new EquipamentoModel();
        const listasecond = new TecnicoModel();
        const listaitens = listafirst.listarInventario();
        const listapersons = listasecond.listarEquipe();
        this.listafinal.push(listaitens, listapersons);
        return this.listafinal;
    }
}