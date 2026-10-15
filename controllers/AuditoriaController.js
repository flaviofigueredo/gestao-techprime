import { listarInventario } from './EquipamentoModel.js'
import { listarEquipe } from 'TecnicoModel.js'

export class AuditoriaController {
    listafinal = [];

    gerarRelatorioGeral(){
        const listaitens = listarInventario();
        const listapersons = listarEquipe();
        this.listafinal.push(listaitens, listapersons);
        return this.listafinal;
    }
}