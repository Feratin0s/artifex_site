// server/index.js
const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

// Configuração do banco
let dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'sitedb'
};

// Try to read from Docker secrets if available
try {
  if (fs.existsSync(process.env.DB_USER_FILE || '/run/secrets/db_user')) {
    dbConfig.user = fs.readFileSync(process.env.DB_USER_FILE || '/run/secrets/db_user', 'utf8').trim();
  } else {
    dbConfig.user = process.env.DB_USER || 'root';
  }
  
  if (fs.existsSync(process.env.DB_PASSWORD_FILE || '/run/secrets/db_password')) {
    dbConfig.password = fs.readFileSync(process.env.DB_PASSWORD_FILE || '/run/secrets/db_password', 'utf8').trim();
  } else {
    dbConfig.password = process.env.DB_PASSWORD || '';
  }
} catch (error) {
  console.warn('Using fallback database credentials:', error.message);
  dbConfig.user = process.env.DB_USER || 'root';
  dbConfig.password = process.env.DB_PASSWORD || '';
}

// Rota para salvar contato
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message, newsletter } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      error: 'Campos obrigatórios não preenchidos' 
    });
  }

  let connection;
  try {
    connection = await mysql.createConnection(dbConfig);
    console.log('Conexão com o banco de dados estabelecida com sucesso');
    
    // Verificar se a tabela existe, se não, criar
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS contacts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        phone VARCHAR(20),
        message TEXT NOT NULL,
        newsletter BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    
    const [result] = await connection.execute(
      `INSERT INTO contacts (name, email, phone, message, newsletter) 
       VALUES (?, ?, ?, ?, ?)`,
      [name, email, phone || null, message, newsletter ? 1 : 0]
    );

    console.log(`Contato salvo com sucesso, ID: ${result.insertId}`);
    res.json({ success: true, id: result.insertId });
  } catch (error) {
    console.error('Erro ao salvar contato:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message,
      details: 'Verifique a conexão com o banco de dados'
    });
  } finally {
    if (connection) {
      try {
        await connection.end();
      } catch (err) {
        console.error('Erro ao fechar conexão:', err);
      }
    }
  }
});

const PORT = 3001;
app.listen(PORT, async () => {
  console.log(`Backend rodando na porta ${PORT}`);
  
  // Test database connection on startup
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log('✅ Conexão com o banco de dados MariaDB estabelecida com sucesso!');
    await connection.end();
  } catch (error) {
    console.error('❌ Erro ao conectar ao banco de dados MariaDB:', error.message);
    console.log('Por favor, verifique se o serviço MariaDB está rodando e as credenciais estão corretas.');
  }
});