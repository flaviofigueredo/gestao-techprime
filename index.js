import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { AuditoriaController } from './controllers/AuditoriaController.js';
import { EquipamentoController } from './controllers/EquipamentoController.js';
import { TecnicoController } from './controllers/TecnicoController.js';
import { EquipamentoModel } from './models/EquipamentoModel.js';
import { TecnicoModel } from './models/TecnicoModel.js';

const rl = readline.createInterface({ input, output });

const equipamentoController = new EquipamentoController();
const tecnicoController = new TecnicoController();
const auditoriaController = new AuditoriaController();

const exibir = (resposta) => console.log(JSON.stringify(resposta, null, 2));

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
                const tag = await rl.question("Insira a Tag de Patrimônio: ");
                const tipo = await rl.question("Insira o Tipo do Equipamento [Desktop, Notebook ou Servidor]: ");
                const ram = await rl.question("Insira a capacidade da Memória RAM [em GBs]: ");
                exibir(equipamentoController.processarEntradaEquipamento(tag, tipo.trim(), ram));
                break;

            case 2:
                exibir(equipamentoController.consultarCatalogo());
                break;
            case 3:
                const nome = await rl.question("Insira o Nome Completo do Técnico: ");
                const credencial = await rl.question("Insira a Credencial de Acesso (crachá): ");
                const turno = await rl.question("Insira o Turno de Trabalho [Manhã, Tarde ou Noite]: ");
                exibir(tecnicoController.processarAdmissao(nome, credencial, turno.trim()));
                break;

            case 4:
                exibir(tecnicoController.consultarEquipe());
                break;

            case 5:
                exibir(auditoriaController.gerarRelatorioGeral());
                break;
            
            case 0:
                sistemaRodando = false;
                console.log("Encerrando o sistema. Até logo!");
                break;

            default:
                console.log("Opção Inválida. Digite Corretamente.");
                break;
        }
    }

    rl.close();
}

IniciarSistema();
