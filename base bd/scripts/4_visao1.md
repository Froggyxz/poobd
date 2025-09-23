# Visão 1 — Exames por Especialidade (Cardiologia e Pediatria)

## Objetivo
Disponibilizar, em uma view única, os exames cuja `especialidade_requerida` é **Cardiologia** ou **Pediatria**, facilitando consultas e relatórios por área.

## O que essa visão faz
Cria uma visão que reúne os registros da tabela `exames` filtrados por **Cardiologia** e **Pediatria**.

## Como funciona
- Seleciona, na tabela `exames`, todos os registros onde `especialidade_requerida = "Cardiologia"`.  
- Faz a união com outra seleção onde `especialidade_requerida = "Pediatria"`.  
- A união remove duplicatas por padrão.  

## Quando usar
- Para listar o catálogo de exames dessas duas especialidades.  
- Para checar se a base está preenchida corretamente para essas áreas.  

## Exemplo de uso
Consultar todos os registros da view ou ordenar por nome para relatórios rápidos.  

## Observações
- A base de dados precisa ter exames cadastrados exatamente com esses nomes de especialidade.  
- Outras especialidades podem ser adicionadas criando outra view ou ajustando o filtro.  
