---
nome: Nome do grupo
integrante1: Nome completo do estudante 1
integrante2: Nome completo do estudante 2
integrante3: Nome completo do estudante 3
integrante4: Nome completo do estudante 4
--- 

# PROBLEMA

Cadastro de pacientes com informações pessoais  
· Registro de médicos com especialidades  
· Controle de tipos de exames disponíveis no hospital  
· Agendamento de consultas médicas  
· Agendamento de exames especializados  

## Requisitos Principais

· Gerenciamento completo de pacientes e seus dados  
· Controle de profissionais médicos e suas especialidades  
· Catálogo de exames disponíveis com valores e especialidades requeridas  
· Sistema de agendamento para consultas e exames  
· Controle de status das consultas e agendamentos  

## Restrições do Banco de Dados

· Cada consulta deve estar associada a um paciente e um médico  
· Cada agendamento de exame deve estar associado a um paciente, um exame e um médico  
· Médicos devem possuir especialidade compatível com os exames que realizam  
· Pacientes podem ter múltiplas consultas e agendamentos  
· Exames possuem especialidades requeridas específicas  

### 1. PACIENTES
· id (PK): Identificador único  
· nome: Nome completo do paciente  
· cpf: CPF único do paciente  
· data_nascimento: Data de nascimento  

### 2. MÉDICOS
· id (PK): Identificador único  
· nome: Nome completo do médico  
· crm: CRM único do médico  
· especialidade: Especialidade médica  

### 3. EXAMES
· id (PK): Identificador único  
· nome: Nome do exame  
· codigo: Código único do exame  
· especialidade_requerida: Especialidade médica requerida  
· valor: Valor do exame  

### 4. CONSULTAS
· id (PK): Identificador único  
· paciente_id (FK): Referência ao paciente  
· medico_id (FK): Referência ao médico  
· data_consulta: Data e hora da consulta  
· valor: valor da consulta  

### 5. AGENDAMENTOS
· id (PK): Identificador único  
· paciente_id (FK): Referência ao paciente  
· consulta_id: Referência à consulta  
· exame_id (FK): Referência ao exame  
· medico_id (FK): Referência ao médico  
· data_agendamento: Data e hora do agendamento  
· sala: Sala do exame  
· status: Status do agendamento  

---

# SOLUÇÃO IMPLEMENTADA

Além da modelagem acima, foram feitos scripts SQL para atender os requisitos:

- **1_esquema.sql** → Criação do banco `trabalho` e das tabelas.  
- **2_popular.sql** → Inserção de dados de teste (pacientes, médicos, exames, consultas e agendamentos).  
- **3_trigger.sql** → Trigger de validação de especialidade, impedindo que um exame seja agendado com médico de área diferente.  
- **3_triggerAtivado.sql** → Arquivo com inserções de teste para validar a trigger.  
- **4_visao1.sql** → View listando exames de Cardiologia e Pediatria.  
- **4_visao2.sql** → View listando apenas agendamentos realizados, com informações de paciente, médico, exame, data e sala.  

