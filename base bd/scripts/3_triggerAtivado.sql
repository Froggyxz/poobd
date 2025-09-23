
-- Visualização do ANTES
SELECT * FROM agendamentos;

-- Inserção VÁLIDA (médico e exame compatíveis)
INSERT INTO agendamentos (pacientes_id, exames_id, medicos_id, data_agendamento, sala, status)
VALUES (1, 1, 1, '2025-09-18 10:00:00', 'Sala 101', 'Agendado');

-- Inserção INVÁLIDA (médico e exame incompatíveis, deve acionar o trigger e dar erro)
-- Exemplo: medico id 1 (Cardiologia), exame id 2 (Pediatria)
INSERT INTO agendamentos (pacientes_id, exames_id, medicos_id, data_agendamento, sala, status)
VALUES (1, 12, 1, '2025-09-18 11:00:00', 'Sala 100', 'Agendado');

-- Visualização do DEPOIS
SELECT * FROM agendamentos;
