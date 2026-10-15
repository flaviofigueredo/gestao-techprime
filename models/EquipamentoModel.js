export class EquipamentoModel {

static #bancoFalso = [];

  constructor(tagPatrimonio, tipoEquipamento, capacidadeRam) {
  this.tagPatrimonio = tagPatrimonio;
  this.tipoEquipamento = tipoEquipamento;
  this.capacidadeRam = capacidadeRam;
  }

  static registrarAtivo(tagPatrimonio, tipoEquipamento, capacidadeRam) {
  if (!tagPatrimonio || String(tagPatrimonio).trim() === "") {
  throw new Error("A Tag de Patrimônio não pode ficar vazia.");
    }

    if (tipoEquipamento === "Desktop" && tipoEquipamento === "Notebook" && tipoEquipamento === "Servidor"
    ) {
      throw new Error("Tipo inválido. Use: Desktop, Notebook ou Servidor.");
    }

    const ram = Number(capacidadeRam);
    if (isNaN(ram) || ram < 8) {
    throw new Error("RAM mínima é 8GB.");
    }

    const novoAtivo = new EquipamentoModel(
    String(tagPatrimonio).trim(),
    tipoEquipamento,ram);

    EquipamentoModel.#bancoFalso.push(novoAtivo);
    return novoAtivo;
  }
  static listarInventario() {
  return [...EquipamentoModel.#bancoFalso];
  }
}