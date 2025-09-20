CREATE DATABASE trabalho;
USE trabalho;

-- Tabela de PACIENTES
CREATE TABLE pacientes (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(11) UNIQUE NOT NULL,
    data_nascimento DATE NOT NULL
);

-- Tabela de MÉDICOS
CREATE TABLE medicos (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    crm VARCHAR(20) UNIQUE NOT NULL,
    especialidade VARCHAR(50) NOT NULL
);

-- Tabela de EXAMES
CREATE TABLE exames (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    codigo VARCHAR(20) UNIQUE NOT NULL,
    especialidade_requerida VARCHAR(50) NOT NULL,
    valor DECIMAL(10,2) NOT NULL
);

-- Tabela de CONSULTAS
CREATE TABLE consultas (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    pacientes_id INTEGER NOT NULL,
    medicos_id INTEGER NOT NULL,
    data_consulta TIMESTAMP NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    status VARCHAR(20) DEFAULT 'agendada' CHECK (status IN ('agendada', 'realizada', 'cancelada')),
    
    FOREIGN KEY (pacientes_id) REFERENCES pacientes(id) ON DELETE CASCADE,
    FOREIGN KEY (medicos_id) REFERENCES medicos(id) ON DELETE CASCADE
);

-- Tabela de AGENDAMENTOS
CREATE TABLE agendamentos (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    pacientes_id INTEGER NOT NULL,
    consultas_id INTEGER,
    exames_id INTEGER NOT NULL,
    medicos_id INTEGER NOT NULL,
    data_agendamento TIMESTAMP NOT NULL,
    sala VARCHAR(20) NOT NULL,
    status VARCHAR(20) DEFAULT 'agendado' CHECK (status IN ('agendado', 'realizado', 'cancelado')),
    
    FOREIGN KEY (pacientes_id) REFERENCES pacientes(id) ON DELETE CASCADE,
    FOREIGN KEY (consultas_id) REFERENCES consultas(id) ON DELETE SET NULL,
    FOREIGN KEY (exames_id) REFERENCES exames(id) ON DELETE CASCADE,
    FOREIGN KEY (medicos_id) REFERENCES medicos(id) ON DELETE CASCADE
);
