# techos-core-lacerda
# TechOS Core - Sprint Express

## 1. USER STORIES (INVEST)
* **US01:** "Como técnico, quero abrir uma Ordem de Serviço para registrar um conserto."
  * **C.A.01:** Deve validar o ID do cliente.
  * **C.A.02:** O status inicial deve ser sempre 'ABERTA'.
* **US02:** "Como cliente, quero visualizar o status do meu equipamento."

## 2. REQUISITOS NÃO-FUNCIONAIS (RNF)
* **RNF01 (Segurança):** Sanitização de inputs contra XSS/OWASP no cadastro.
* **RNF02 (Desempenho):** Tempo de resposta na criação de chamados < 2s.

## 3. DIAGRAMA DE CLASSES (POO)
- Usuario (Classe Abstrata: id, nome, email)
- Cliente (Herança de Usuario + telefone)
- Tecnico (Herança de Usuario + especialidade)
- OrdemServico (id, cliente, status)
