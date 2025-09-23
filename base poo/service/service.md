# Service

A camada de **Service** concentra as **regras de negócio** do sistema.  

## AgendamentoService.ts
Aplica as regras de negócio para os **agendamentos**.  
- Criar, listar, buscar e excluir  
- Valida compatibilidade entre a especialidade do médico e o exame antes de gravar  

## ConsultaService.ts
Gerencia as **consultas médicas**.  
- Confere se paciente e médico existem  
- Valida a data  
- Aciona o repositório para salvar ou consultar  

## ExameService.ts
Controla os **exames**.  
- Garante que códigos não se repitam  
- Valida se a especialidade está cadastrada corretamente antes de persistir  

## MedicoService.ts
Administra os **médicos**.  
- Verifica duplicidade de CRM  
- Garante consistência dos dados antes de chamar o repositório  

## PacienteService.ts
Gerencia os **pacientes**.  
- Valida formato e duplicidade de CPF  
- Envia dados corretos para o repositório  
