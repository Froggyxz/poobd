# Controllers

Os controllers são responsáveis por receber as requisições, validar os dados e direcionar para a camada de serviço/repositório.  

## AgendamentoController.ts
Gerencia os **agendamentos** de exames e consultas.  
- Criar novos agendamentos  
- Listar todos os agendamentos  
- Buscar por **ID**  
- Excluir registros  
- Verificar se há informações válidas antes de enviar para a camada de serviço/repositório  

## ConsultaController.ts
Responsável pelas **consultas médicas**.  
- Criar novas consultas vinculadas a pacientes e médicos  
- Listar consultas  
- Buscar consulta por **ID**  

## ExameController.ts
Controla os **exames** cadastrados no sistema.  
- Incluir novos exames  
- Listar todos os exames  
- Buscar exame específico  
- Excluir exames quando necessário  

## MedicoController.ts
Administra os dados dos **médicos**.  
- Cadastrar médicos (nome, CRM e especialidade)  
- Listar todos os médicos  
- Buscar médico específico  
- Excluir registros  

## PacienteController.ts
Gerencia os **pacientes** do sistema.  
- Cadastrar novos pacientes  
- Listar todos os pacientes  
- Buscar paciente por **CPF** ou **ID**  
- Excluir registros  
