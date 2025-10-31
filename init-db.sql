-- Script de inicialização do banco de dados
CREATE DATABASE IF NOT EXISTS sitedb;
USE sitedb;

-- Tabela de contatos
CREATE TABLE IF NOT EXISTS contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  phone VARCHAR(20),
  message TEXT NOT NULL,
  newsletter BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inserir um registro de teste
INSERT INTO contacts (name, email, phone, message, newsletter)
VALUES ('Teste', 'teste@exemplo.com', '(11) 99999-9999', 'Mensagem de teste', true);