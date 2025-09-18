
-- Visão 2: Agendamentos realizados, mostrando dados do paciente, exame e médico
CREATE VIEW agendamentos_realizados AS
SELECT a.id AS agendamento_id, p.nome AS paciente, m.nome AS medico, e.nome AS exame, a.data_agendamento, a.sala
FROM Agendamento a
JOIN Paciente p ON a.paciente_id = p.id
JOIN Medico m ON a.medico_id = m.id
JOIN Exame e ON a.exame_id = e.id
WHERE a.status = 'Realizado';

SELECT * FROM agendamentos_realizados;
