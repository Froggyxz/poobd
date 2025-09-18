
-- Visualização do antes
SELECT * FROM Agendamento WHERE paciente_id = 101;

-- Tenta inserir um agendamento com especialidade incompatível (deve falhar)
INSERT INTO Agendamento (paciente_id, consulta_id, exame_id, medico_id, data_agendamento, sala, status)
VALUES (101, 1, 1, 2, '2025-09-18 10:00:00', 'Sala 101', 'Agendado');

-- Tenta inserir um agendamento com especialidade compatível (deve funcionar)
INSERT INTO Agendamento (paciente_id, consulta_id, exame_id, medico_id, data_agendamento, sala, status)
VALUES (101, 1, 1, 1, '2025-09-18 11:00:00', 'Sala 101', 'Agendado');

-- Visualização do depois
SELECT * FROM Agendamento WHERE paciente_id = 101;
