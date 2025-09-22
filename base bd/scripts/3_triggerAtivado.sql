DELIMITER $$
INSERT INTO agendamentos (pacientes_id, exames_id, medicos_id, data_agendamento, sala, status)
VALUES (101, 1, 2, '2025-09-18 10:00:00', 'Sala 101', 'Agendado');

INSERT INTO agendamentos (pacientes_id, exames_id, medicos_id, data_agendamento, sala, status)
VALUES (101, 1, 101, '2025-09-18 11:00:00', 'Sala 100', 'agendado');

-- Visualização do depois
SELECT * FROM agendamentos WHERE pacientes_id = 100;

DELIMITER ;
