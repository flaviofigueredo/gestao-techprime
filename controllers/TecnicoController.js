import { TecnicoModel } from "../models/TecnicoModel.js";

export class TecnicoController {
    processarAdmissao(nomeCompleto, credencialAcesso, turnoTrabalho) {
        try{
            console.log("Processando admissão de técnico...");
            TecnicoModel.contratarTecnico(nomeCompleto, credencialAcesso, turnoTrabalho);
            console.log("Técnico admitido com sucesso!");
        } catch (erro) {
            console.error("Erro ao admitir técnico:", erro.message);
        }
    }

}