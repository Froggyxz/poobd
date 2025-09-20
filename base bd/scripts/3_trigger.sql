DELIMITER $$
CREATE TRIGGER valida_especialidade_agendamento
BEFORE INSERT ON Agendamento
FOR EACH ROW
BEGIN
    DECLARE especialidade_medico VARCHAR(100);
    DECLARE especialidade_exame VARCHAR(100);

    SELECT especialidade INTO especialidade_medico FROM Medico WHERE id = NEW.medico_id;
    SELECT especialidade_requerida INTO especialidade_exame FROM Exame WHERE id = NEW.exame_id;

    IF especialidade_medico <> especialidade_exame THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Especialidade do médico não é compatível com o exame agendado.';
    END IF;
END;
DELIMITER