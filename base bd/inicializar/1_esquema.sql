CREATE DATABASE trabalho;
USE trabalho;

-- Tabela de PACIENTES
CREATE TABLE pacientes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  cpf VARCHAR(11) UNIQUE NOT NULL,
  data_nascimento DATE NOT NULL
);

-- Tabela de MÉDICOS
CREATE TABLE medicos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  crm VARCHAR(20) UNIQUE NOT NULL,
  especialidade VARCHAR(50) NOT NULL
);

-- Tabela de EXAMES
CREATE TABLE exames (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  codigo VARCHAR(20) UNIQUE NOT NULL,
  especialidade_requerida VARCHAR(50) NOT NULL,
  valor DECIMAL(10,2) NOT NULL
);

-- Tabela de CONSULTAS
CREATE TABLE consultas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  pacientes_id INT NOT NULL,
  medicos_id INT NOT NULL,
  data_consulta DATETIME NOT NULL,
  valor DECIMAL(10,2) NOT NULL,
  status VARCHAR(50) NOT NULL,
  FOREIGN KEY (pacientes_id) REFERENCES pacientes(id),
  FOREIGN KEY (medicos_id) REFERENCES medicos(id)
);

-- Tabela de AGENDAMENTOS
CREATE TABLE agendamentos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  pacientes_id INT NOT NULL,
  exames_id INT NOT NULL,
  medicos_id INT NOT NULL,
  data_agendamento DATETIME NOT NULL,
  sala VARCHAR(50) NOT NULL,
  status VARCHAR(50) NOT NULL,
  FOREIGN KEY (pacientes_id) REFERENCES pacientes(id),
  FOREIGN KEY (exames_id) REFERENCES exames(id),
  FOREIGN KEY (medicos_id) REFERENCES medicos(id)
);
