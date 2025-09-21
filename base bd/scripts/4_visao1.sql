-- Visão 1: União de exames de Cardiologia e Pediatria
CREATE VIEW exames_cardiopediatria AS
SELECT * FROM exame WHERE especialidade_requerida = 'Cardiologia'
UNION
SELECT * FROM exame WHERE especialidade_requerida = 'Pediatria';

SELECT * FROM exames_cardiopediatria;