import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { AuditoriaController } from './controllers/AuditoriaController.js';
import { EquipamentoController } from './controllers/EquipamentoController.js';
import { TecnicoController } from './controllers/TecnicoController.js';
import { EquipamentoModel } from './models/EquipamentoModel.js';
import { TecnicoModel } from './models/TecnicoModel.js';

const rl = readline.createInterface({ input, output });
IniciarSistema();

async function IniciarSistema() {
    let sistemaRodando = true;

    while(sistemaRodando === true){
        console.log("\n Selecione o que deseja fazer:");
        console.log("1 - Cadastrar Equipamento");
        console.log("2 - Listar Equipamentos");
        console.log("3 - Cadastrar Técnico");
        console.log("4 - Listar Técnicos");
        console.log("5 - Relatório de Auditoria Geral")
        console.log("0 - Sair do Sistema")
        let opcao = parseInt(await rl.question("Informe a opção escolhida: "));

        switch (opcao){

            case 1:
                const equipamento = new EquipamentoController();
                const tagPatrimonio = parseInt(await rl.question("Insira a Tag de Patrimônio: "));
                const tipoEquipamento = await rl.question("Insira o Tipo do Equipamento: ");
                const capacidadeRAM = parseInt(await rl.question("Insira a capacidade da Memória RAM [em GBs]: "));
                equipamento.processarEntradaEquipamento(tagPatrimonio, tipoEquipamento, capacidadeRAM);
                break;

            case 2:
                const listaa = new EquipamentoModel();
                listaa.listarInventario();
                break;

            case 3:
                const tecnico = new TecnicoController();
                const nomeCompleto = await rl.question("Insira o Nome do Funcionário: ");
                const credencialAcesso = parseInt(await rl.question("Insira o Número da Credencial: "));
                const turno = await rl.question("Insira o Turno de Trabalho [Manhã, Tarde ou Noite]: ");
                tecnico.processarAdmissao(nomeCompleto, credencialAcesso, turno);
                break;

            case 4:
                const listab = new TecnicoModel();
                listab.listarEquipe();
                break;

            case 5:
                const auditor = new AuditoriaController();
                auditor.gerarRelatorioGeral();
                break;
            
            case 0:
                sistemaRodando = false;
                break;

            default:
                console.log("Opção Inválida. Digite Corretamente.");
                break;
        }
    }

    rl.close();
}
