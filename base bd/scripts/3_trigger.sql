USE trabalho;

DELIMITER //
DROP TRIGGER IF EXISTS valida_especialidade_agendamento;//
CREATE TRIGGER valida_especialidade_agendamento
BEFORE INSERT ON agendamentos
FOR EACH ROW
BEGIN
    DECLARE especialidade_medico VARCHAR(100);
    DECLARE especialidade_exame VARCHAR(100);

    -- Busca a especialidade do médico (ajustado para ignorar maiúsculas/minúsculas e espaços)
    SELECT TRIM(LOWER(especialidade)) INTO especialidade_medico FROM medicos WHERE id = NEW.medicos_id LIMIT 1;
    -- Busca a especialidade requerida do exame (ajustado para ignorar maiúsculas/minúsculas e espaços)
    SELECT TRIM(LOWER(especialidade_requerida)) INTO especialidade_exame FROM exames WHERE id = NEW.exames_id LIMIT 1;

    -- Se qualquer um for nulo, lança erro
    IF especialidade_medico IS NULL OR especialidade_exame IS NULL THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Médico ou exame não encontrado.';
    END IF;

    -- Se as especialidades forem diferentes, lança erro
    IF especialidade_medico <> especialidade_exame THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Especialidade do médico não é compatível com o exame agendado.';
    END IF;
END//
DELIMITER ;
