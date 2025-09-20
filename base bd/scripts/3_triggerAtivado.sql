DELIMITER $$
--  falhar
INSERT INTO Agendamentos (pacientes_id, consultas_id, exames_id, medicos_id, data_agendamento, sala, status)
VALUES (101, 1, 1, 2, '2025-09-18 10:00:00', 'Sala 101', 'Agendado');

-- funcionar
INSERT INTO agendamentos (pacientes_id, consultas_id, exames_id, medicos_id, data_agendamento, sala, status)
VALUES (100, 1, 1, 100, '2025-09-18 11:00:00', 'Sala 100', 'agendado');

-- Visualização do depois
SELECT * FROM agendamentos WHERE pacientes_id = 100;

DELIMITER ;
