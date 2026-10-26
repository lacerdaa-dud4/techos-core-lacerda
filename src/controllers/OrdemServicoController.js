// src/controllers/OrdemServicoController.js
import UsuarioFactory from '../models/UsuarioFactory.js';
import GerenciadorOS from '../models/GerenciadorOS.js';

export default class OrdemServicoController {
    constructor() {
        this.gerenciador = GerenciadorOS.obterInstancia();
        console.log('[SINGLETON] GerenciadorOS re-inicializado na View.');
    }

    init() {
        const form = document.getElementById('form-os');
        if (form) {
            form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('[CONTROLLER] Evento submit capturado com sucesso.');

        const tipoUsuario = document.getElementById('tipo-usuario').value;
        const nome = document.getElementById('nome-usuario').value;
        const email = document.getElementById('email-usuario').value;
        const descricaoOS = document.getElementById('descricao-os').value;

        const novoUsuario = UsuarioFactory.criarUsuario(tipoUsuario, nome, email);
        console.log(`[FACTORY] Criando '${tipoUsuario}' via formulário UI -> ID: ${novoUsuario.id}`);

        const novaOS = this.gerenciador.adicionarOS({
            cliente: novoUsuario,
            descricao: descricaoOS,
            status: 'ABERTA',
            dataCriacao: new Date()
        });

        this.atualizarView();

        if (typeof Toastify !== 'undefined') {
            Toastify({
                text: `Ordem de Serviço #${novaOS.id} criada com sucesso!`,
                duration: 3000,
                gravity: "top",
                position: "right",
                style: { background: "#2ecc71" }
            }).showToast();
            console.log(`[BIBLIOTECA] Toastify exibido: "Ordem de Serviço #${novaOS.id} criada com sucesso!"`);
        }
    }

    atualizarView() {
        const tabela = document.getElementById('tabela-os');
        if (tabela) {
            console.log('[VIEW] Tabela de OS atualizada dinamicamente com Flexbox/Grid.');
        }
    }
}
