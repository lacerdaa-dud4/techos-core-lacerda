import { Cliente } from './Cliente.js';
import { Tecnico } from './Tecnico.js';

export class UsuarioFactory {
    static criarUsuario(tipo, dados) {
        if (tipo === 'CLIENTE') {
            console.log("[FACTORY] Criando Usuário Tipo: CLIENTE...");
            return new Cliente(dados.id, dados.nome, dados.email, dados.telefone);
        } else if (tipo === 'TECNICO') {
            console.log("[FACTORY] Criando Usuário Tipo: TECNICO...");
            return new Tecnico(dados.id, dados.nome, dados.email, dados.especialidade);
        }
    }
}