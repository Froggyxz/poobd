USE trabalho;
-- Permite deletar sem WHERE em modo seguro
SET SQL_SAFE_UPDATES = 0;
-- Limpa todas as tabelas populares
DELETE FROM agendamentos WHERE id > 0;
DELETE FROM consultas WHERE id > 0;
DELETE FROM exames WHERE id > 0;
DELETE FROM medicos WHERE id > 0;
DELETE FROM pacientes WHERE id > 0;
SET SQL_SAFE_UPDATES = 1;

-- Reinicia auto-incremento (MySQL)
ALTER TABLE agendamentos AUTO_INCREMENT = 1;
ALTER TABLE consultas AUTO_INCREMENT = 1;
ALTER TABLE exames AUTO_INCREMENT = 1;
ALTER TABLE medicos AUTO_INCREMENT = 1;
ALTER TABLE pacientes AUTO_INCREMENT = 1;
