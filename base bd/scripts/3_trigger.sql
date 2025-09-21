DELIMITER $$
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
DELIMITER