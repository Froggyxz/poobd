# Visão 2 — Agendamentos Realizados com Detalhamento

## Objetivo
Fornecer uma visão pronta que detalha os agendamentos já realizados, juntando informações de **paciente**, **médico** e **exame** em uma única consulta.

## O que essa visão faz
Cria uma `VIEW` que faz junções entre `agendamentos`, `pacientes`, `medicos` e `exames`, filtrando somente os registros com `status = "realizado"`.

## Como funciona
- Liga `agendamentos.pacientes_id` com `pacientes.id`.  
- Liga `agendamentos.medicos_id` com `medicos.id`.  
- Liga `agendamentos.exames_id` com `exames.id`.  
- Aplica o filtro `status = "realizado"`.  
- Seleciona campos úteis como:  
  - Nome do paciente  
  - Nome do médico  
  - Nome do exame  
  - Data  
  - Sala  

## Quando usar
- Para relatórios ou telas que exibem apenas o que já foi concluído.  
- Para auditoria e histórico.  

## Exemplo de uso
- Listar todos os agendamentos realizados.  
- Contar quantos agendamentos cada médico concluiu.  

## Observações
- É importante padronizar o campo `status` (usar sempre `"REALIZADO"` ou sempre `"realizado"`).  
- A `VIEW` depende de relacionamentos corretos entre as tabelas envolvidas.  
