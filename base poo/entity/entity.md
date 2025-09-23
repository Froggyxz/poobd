# Entities

As entidades representam as tabelas e objetos principais do sistema.  

## Agendamento.ts
Representa os **agendamentos** de exames ou consultas.  
- Contém: paciente, exame, médico, data, sala e status.  
- Conecta pacientes, médicos e exames em um único registro.  

## Consulta.ts
Define a entidade de **consultas médicas**.  
- Liga um paciente a um médico em uma data e horário específicos.  
- Inclui o valor da consulta.  

## Exame.ts
Modela os **exames** disponíveis no hospital.  
- Armazena: nome do exame, código único, valor e especialidade requerida.  

## Medico.ts
Representa os **médicos** do sistema.  
- Inclui: nome, CRM (único) e especialidade.  
- Pode estar vinculado a várias consultas e agendamentos.  

## Paciente.ts
Modela os **pacientes** do hospital.  
- Inclui: nome, CPF (único) e data de nascimento.  
- Pode ter várias consultas e agendamentos associados.  

## Pessoa.ts
Classe base que define atributos comuns (ex.: nome e data de nascimento).  
- Usada para **herança**, facilitando o reuso de código entre entidades que compartilham características.  
