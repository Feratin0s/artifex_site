const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

// Rota para receber o formulário
app.post('/api/contato', async (req, res) => {
  const { name, email, phone, message, newsletter } = req.body;

  try {
    const [result] = await pool.execute(
      `INSERT INTO contatos (nome, email, telefone, mensagem, newsletter)
       VALUES (?, ?, ?, ?, ?)`,
      [name, email, phone, message, newsletter ? 1 : 0]
    );

    res.status(200).json({ success: true, id: result.insertId });
  } catch (error) {
    console.error('Erro ao salvar contato:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});