CREATE DATABASE trabalho;
USE trabalho;

/* Apague este comentário. Depois, coloque aqui apenas os scripts referentes à criação do banco de dados */

CREATE TABLE apagar(
    id INT AUTO_INCREMENT PRIMARY KEY,
    texto VARCHAR(100) NOT NULL
);

CREATE TABLE apagar_tambem(
    id INT AUTO_INCREMENT PRIMARY KEY,
    mensagem VARCHAR(100) NOT NULL
);