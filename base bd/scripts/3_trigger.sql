USE trabalho;

DELIMITER //
CREATE TRIGGER valida_especialidade_agendamento
BEFORE INSERT ON agendamentos
FOR EACH ROW
BEGIN
    DECLARE especialidade_medicos VARCHAR(100);
    DECLARE especialidade_exames VARCHAR(100);

    SELECT especialidade INTO especialidade_medicos FROM medicos WHERE id = NEW.id;
    SELECT especialidade_requerida INTO especialidade_exames FROM exames WHERE id = NEW.id;

    IF especialidade_medicos <> especialidade_exames THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Especialidade do médico não é compatível com o exame agendado.';
    END IF;
END;
//
DELIMITER ;

CREATE TEMPORARY TABLE especialidade_medicos
AS SELECT id,especialidade FROM medicos;
CREATE TEMPORARY TABLE especialidade_exames
AS SELECT id,especialidade_requerida FROM exames;

SELECT * FROM especialidade_medicos;
SELECT * FROM especialidade_exames;




antes de inserir agendamento, pega a tabela de medicos e Exames
e verifica se a especialidade do medico é igual a especialidade requerida do exame
se for diferente, lança um erro e não deixa inserir o agendamento

medico 50 | Dr(a). Isabela Freitas  | CRM017 | Endocrinologia
exame  50 | Tomografia Coluna       | EX040  | Ortopedia              

INSERT INTO agendamentos (pacientes_id, consultas_id, exames_id, medicos_id, data_agendamento, sala, status) VALUES
(1, 50, 50, 1, '2024-07-01 10:00:00', 'Sala 101', 'agendado'); 

SELECT * from agendamentos;