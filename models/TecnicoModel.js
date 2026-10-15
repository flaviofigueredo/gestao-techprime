export class TecnicoModel {
    #credencial;
    tecnico = [];

    constructor(nomeCompleto, credencialAcesso, turnoTrabalho){
        this.#credencial = credencialAcesso;
        this.nomeCompleto = nomeCompleto;
        this.turnoTrabalho = turnoTrabalho;
    }
    get credencialAcesso(){
        return this.#credencial;
    }

    

    contratarTecnico(nomeCompleto, credencialAcesso, turnoTrabalho){
        if (credencialAcesso === null || credencialAcesso === undefined || !credencialAcesso) {
            throw new Error("ERR_CREDENCIAL_VAZIA");
        }
        if (nomeCompleto === null || nomeCompleto === undefined || !nomeCompleto) {
            throw new Error("ERR_NOME_VAZIO");
        }
        if (turnoTrabalho === null || turnoTrabalho === undefined || !turnoTrabalho) {
            throw new Error("ERR_TURNO_VAZIO");
        }
        if (typeof credencialAcesso !== "number" || isNaN(credencialAcesso) || credencialAcesso < 0) {
            throw new Error("ERR_CREDENCIAL_INVALIDA");
        }
        if (typeof nomeCompleto !== "string") {
            throw new Error("ERR_NOME_INVALIDO");
        }
        if (turnoTrabalho !== "Manhã" && turnoTrabalho !== "Tarde" && turnoTrabalho !== "Noite") {
            throw new Error("ERR_TURNO_INVALIDO");
        }   
        
        const tecnico = new TecnicoModel(nomeCompleto, credencialAcesso, turnoTrabalho);
        this.tecnico.push(tecnico);
}
    listarEquipe(){
        console.log(this.tecnico);
    }
}