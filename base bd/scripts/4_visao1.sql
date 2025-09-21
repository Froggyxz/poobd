-- Visão 1: União de exames de Cardiologia e Pediatria
CREATE VIEW exames_cardiopediatria AS
SELECT * FROM exames WHERE especialidade_requerida = 'Cardiologia'
UNION
SELECT * FROM exames WHERE especialidade_requerida = 'Pediatria';

SELECT * FROM exames_cardiopediatria;