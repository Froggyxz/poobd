# Repositories

Os repositórios são responsáveis pela comunicação com o banco de dados.  
Eles implementam as operações **CRUD** e filtros específicos para cada entidade.  

## AgendamentoRepository.ts
Gerencia os **agendamentos**.  
- Criar, listar, buscar e excluir  
- Filtrar por paciente, médico, exame ou período  

## ConsultaRepository.ts
Controla as **consultas médicas**.  
- Operações CRUD  
- Busca por paciente, médico e data  

## ExameRepository.ts
Administra os **exames**.  
- Operações CRUD  
- Busca por código único  
- Listagem por especialidade requerida  

## MedicoRepository.ts
Gerencia os **médicos**.  
- Operações CRUD  
- Busca por CRM  
- Busca por especialidade  

## PacienteRepository.ts
Gerencia os **pacientes**.  
- Operações CRUD  
- Busca por CPF  
- Busca por nome  
