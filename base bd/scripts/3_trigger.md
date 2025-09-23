# Trigger de Validação de Especialidade — `valida_especialidade_agendamento`

## Objetivo
Impedir que seja criado (ou atualizado, se existir a versão de `UPDATE`) um agendamento em que a especialidade do médico não seja compatível com a especialidade requerida do exame.

## O que essa trigger faz
Antes de inserir um novo registro em `agendamentos`, ela:
- Busca as especialidades em `medicos` e `exames`.  
- Compara os valores.  
- Se forem diferentes, bloqueia a operação com um erro.  

## Como funciona
- **Disparo:** `BEFORE INSERT` na tabela `agendamentos`.  
- **Passos:**  
  1. Busca a especialidade do médico usando `NEW.medicos_id`.  
  2. Busca a especialidade requerida do exame usando `NEW.exames_id`.  
  3. Compara:  
     - Se uma delas estiver vazia, ou  
     - Se forem diferentes → dispara erro.  
- **Mensagem de erro:**  
  `"Especialidade do médico não é compatível com o exame agendado."`  

## Por que existe
- Garante a regra de negócio central de **compatibilidade de especialidade**, mesmo que a aplicação esqueça de validar.  
- Mantém a integridade do banco para qualquer cliente.  

## Como testar
- **Compatível:**  
  Médico “Cardiologia” + Exame que requer “Cardiologia” → deve funcionar.  

- **Incompatível:**  
  Médico “Radiologia” + Exame que requer “Cardiologia” → deve falhar com a mensagem da trigger.  
