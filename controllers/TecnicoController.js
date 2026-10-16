import { TecnicoModel } from "../models/TecnicoModel.js";

export class TecnicoController {
    processarAdmissao(nomeCompleto, credencialAcesso, turnoTrabalho) {
    try {
      const tecnico = TecnicoModel.contratarTecnico(
        nomeCompleto,
        credencialAcesso,
        turnoTrabalho
      );
      return {
        status: 201,
        mensagem: "Técnico admitido com sucesso!",
        dados: tecnico
      };
    } catch (erro) {
      return {
        status: 400,
        mensagem: "Falha ao admitir técnico.",
        erro: erro.message
      };
    }
  }

  consultarEquipe() {
    const equipe = TecnicoModel.listarEquipe();
    return {
      status: 200,
      total: equipe.length,
      dados: equipe
    };
  }

}