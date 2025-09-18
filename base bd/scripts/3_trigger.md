O trigger criado realiza operações de seleção em duas tabelas do banco:
Medico e Exame.

Explicação detalhada:
Antes de inserir um novo registro na tabela Agendamento, o trigger executa duas consultas (SELECT): Busca a especialidade do médico (especialidade_medico) na tabela Medico usando o medico_id do novo agendamento. Busca a especialidade requerida do exame (especialidade_exame) na tabela Exame usando o exame_id do novo agendamento.
Após obter esses valores, o trigger compara as especialidades.
Se forem diferentes, o trigger impede o agendamento, lançando um erro com a mensagem: "Especialidade do médico não é compatível com o exame agendado."
