
-- Visão 2: Agendamentos realizados, mostrando dados do paciente, exame e médico
CREATE VIEW agendamentos_realizados AS
SELECT a.id AS agendamento_id, p.nome AS pacientes, m.nome AS medicos, e.nome AS exames, a.data_agendamento, a.sala
FROM agendamentos a
JOIN pacientes p ON a.pacientes_id = p.id
JOIN medicos m ON a.medicos_id = m.id
JOIN exames e ON a.exames_id = e.id
WHERE a.status = 'realizado';

SELECT * FROM agendamentos_realizados;