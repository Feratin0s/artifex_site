const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: 'artifex_db',        // Nome do container MariaDB na rede Docker
  user: 'root',              // ou seu usuário
  password: 'sua_senha',     // coloque no .env depois
  database: 'artifex',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;