export class GerenciadorOS {
    constructor() {
        if (GerenciadorOS.instancia) {
            return GerenciadorOS.instancia;
        }
        this.ordensServico = [];
        GerenciadorOS.instancia = this;
        console.log("[SINGLETON] Instância única do GerenciadorOS inicializada.");
    }
    adicionarOS(os) { this.ordensServico.push(os); }
    listarOS() { return this.ordensServico; }
}