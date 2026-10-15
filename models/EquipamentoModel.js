export class EquipamentoModel {

  static #bancoFalso = [];

  constructor(tagPatrimonio, tipoEquipamento, capacidadeRam) {
  this.tagPatrimonio = tagPatrimonio;
  this.tipoEquipamento = tipoEquipamento;
  this.capacidadeRam = capacidadeRam;
  }

  registrarAtivo(tagPatrimonio, tipoEquipamento, capacidadeRam) {
    if (tagPatrimonio === "") {
      throw new Error("A Tag de Patrimônio não pode ficar vazia.");
    }

    const ram = capacidadeRam;
    if (isNaN(ram) || ram < 8) {
      throw new Error("RAM mínima é 8GB.");
    }
    const novoAtivo = new EquipamentoModel(tagPatrimonio, tipoEquipamento, capacidadeRam);
    EquipamentoModel.#bancoFalso.push(novoAtivo);
    return novoAtivo;
  }
  static listarInventario() {
    console.log(EquipamentoModel.#bancoFalso);
  }
}