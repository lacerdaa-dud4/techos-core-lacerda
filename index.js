import { UsuarioFactory } from './UsuarioFactory.js';
import { GerenciadorOS } from './GerenciadorOS.js';

const gerenciador = new GerenciadorOS();
const clienteAna = UsuarioFactory.criarUsuario('CLIENTE', { id: 101, nome: 'Ana', email: 'ana@email.com', telefone: '9999-9999' });
const tecnicoCarlos = UsuarioFactory.criarUsuario('TECNICO', { id: 202, nome: 'Carlos', email: 'carlos@email.com', especialidade: 'Hardware' });

gerenciador.adicionarOS({ id: 1, cliente: clienteAna.getNome(), tecnico: tecnicoCarlos.getNome(), status: "ABERTA", descricao: "Troca de Tela" });
console.log("[SISTEMA] Ordem de Serviço #1 registrada com sucesso!");
console.log(gerenciador.listarOS());