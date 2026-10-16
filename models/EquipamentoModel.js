export class EquipamentoModel {

  static #bancoFalso = [];

  constructor(tagPatrimonio, tipoEquipamento, capacidadeRam) {
  this.tagPatrimonio = tagPatrimonio;
  this.tipoEquipamento = tipoEquipamento;
  this.capacidadeRam = capacidadeRam;
  }

  static registrarAtivo(tagPatrimonio, tipoEquipamento, capacidadeRam) {
    const tag = String(tagPatrimonio ?? "").trim();
    if (tag === "") {
      throw new Error("A Tag de Patrimônio não pode ficar vazia.");
    }

    const TIPOS_VALIDOS = ["Desktop", "Notebook", "Servidor"];
    if (!TIPOS_VALIDOS.includes(tipoEquipamento)) {
      throw new Error("Tipo inválido. Use: Desktop, Notebook ou Servidor.");
    }

    const ram = Number(capacidadeRam);
    if (!Number.isFinite(ram)) {
      throw new Error("A capacidade de RAM deve ser um número.");
    }
    if (ram < 8) {
      throw new Error("RAM mínima é 8GB.");
    }

    const novoAtivo = new EquipamentoModel(tag, tipoEquipamento, ram);
    EquipamentoModel.#bancoFalso.push(novoAtivo);
    return novoAtivo;
  }

  static listarInventario() {
    return [...EquipamentoModel.#bancoFalso];
  }
}