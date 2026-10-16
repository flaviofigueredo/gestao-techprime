export class TecnicoModel {
    #credencial;
    static #bancoFalso = [];

    constructor(nomeCompleto, credencialAcesso, turnoTrabalho){
        this.#credencial = credencialAcesso;
        this.nomeCompleto = nomeCompleto;
        this.turnoTrabalho = turnoTrabalho;
    }  

    static contratarTecnico(nomeCompleto, credencialAcesso, turnoTrabalho) {
    
    const credencial = String(credencialAcesso ?? "").trim();
    if (credencial === "") {
      throw new Error("A Credencial de Acesso não pode ficar vazia.");
    }
    if (!/^\d+$/.test(credencial)) {
      throw new Error("A Credencial de Acesso deve conter apenas números.");
    }

    const nome = String(nomeCompleto ?? "").trim();
    if (nome === "") {
      throw new Error("O Nome Completo não pode ficar vazio.");
    }

    const TURNOS_VALIDOS = ["Manhã", "Tarde", "Noite"];
    if (!TURNOS_VALIDOS.includes(turnoTrabalho)) {
      throw new Error('Turno inválido. Use "Manhã", "Tarde" ou "Noite".');
    }

    const tecnico = new TecnicoModel(nome, credencial, turnoTrabalho);
    TecnicoModel.#bancoFalso.push(tecnico);
    return tecnico;
    }

    static listarEquipe(){
        return [...TecnicoModel.#bancoFalso];
    }
}