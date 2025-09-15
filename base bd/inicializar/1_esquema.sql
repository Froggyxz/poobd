CREATE DATABASE trabalho;
USE trabalho;

-- Tabela de PACIENTES
CREATE TABLE pacientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(11) UNIQUE NOT NULL,
    data_nascimento DATE NOT NULL
);

-- Tabela de MÉDICOS
CREATE TABLE medicos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    crm VARCHAR(20) UNIQUE NOT NULL,
    especialidade VARCHAR(50) NOT NULL
);

-- Tabela de EXAMES
CREATE TABLE exames (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    codigo VARCHAR(20) UNIQUE NOT NULL,
    especialidade_requerida VARCHAR(50) NOT NULL,
    valor DECIMAL(10,2) NOT NULL
);

-- Tabela de CONSULTAS
CREATE TABLE consultas (
    id SERIAL PRIMARY KEY,
    paciente_id INTEGER NOT NULL,
    medico_id INTEGER NOT NULL,
    data_consulta TIMESTAMP NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    status VARCHAR(20) DEFAULT 'agendada' CHECK (status IN ('agendada', 'realizada', 'cancelada')),
    
    FOREIGN KEY (paciente_id) REFERENCES pacientes(id) ON DELETE CASCADE,
    FOREIGN KEY (medico_id) REFERENCES medicos(id) ON DELETE CASCADE
);

-- Tabela de AGENDAMENTOS
CREATE TABLE agendamentos (
    id SERIAL PRIMARY KEY,
    paciente_id INTEGER NOT NULL,
    consulta_id INTEGER,
    exame_id INTEGER NOT NULL,
    medico_id INTEGER NOT NULL,
    data_agendamento TIMESTAMP NOT NULL,
    sala VARCHAR(20) NOT NULL,
    status VARCHAR(20) DEFAULT 'agendado' CHECK (status IN ('agendado', 'realizado', 'cancelado')),
    
    FOREIGN KEY (paciente_id) REFERENCES pacientes(id) ON DELETE CASCADE,
    FOREIGN KEY (consulta_id) REFERENCES consultas(id) ON DELETE SET NULL,
    FOREIGN KEY (exame_id) REFERENCES exames(id) ON DELETE CASCADE,
    FOREIGN KEY (medico_id) REFERENCES medicos(id) ON DELETE CASCADE
);


CREATE TABLE apagar(
    id INT AUTO_INCREMENT PRIMARY KEY,
    texto VARCHAR(100) NOT NULL
);

CREATE TABLE apagar_tambem(
    id INT AUTO_INCREMENT PRIMARY KEY,
    mensagem VARCHAR(100) NOT NULL
);